const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const url = 'https://chungdoi.com/vi/mau-thiep/minimalism-do-dam/demo';
const outputDir = '/var/www/ai-website-cloner-template/docs/research/chungdoi/screenshots';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Desktop capture
    console.log('Capturing desktop view (1920px)...');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const desktopHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewport({ width: 1920, height: desktopHeight });
    await page.screenshot({ 
      path: path.join(outputDir, 'desktop-1920.png'),
      fullPage: true 
    });
    console.log('Desktop screenshot saved');

    // Mobile capture
    console.log('Capturing mobile view (375px)...');
    await page.setViewport({ width: 375, height: 667 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mobileHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.setViewport({ width: 375, height: mobileHeight });
    await page.screenshot({ 
      path: path.join(outputDir, 'mobile-375.png'),
      fullPage: true 
    });
    console.log('Mobile screenshot saved');

    // Collect detailed measurements
    console.log('Collecting measurements...');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    
    const measurements = await page.evaluate(() => {
      const data = {
        colors: {},
        typography: {},
        layout: {},
        images: [],
        animations: [],
        interactive: []
      };

      const getClassName = (el) => {
        if (typeof el.className === 'string') return el.className;
        if (el.className && el.className.baseVal) return el.className.baseVal;
        return '';
      };

      // Background color
      data.colors.pageBackground = window.getComputedStyle(document.body).backgroundColor;
      data.colors.bodyColor = window.getComputedStyle(document.body).color;

      // Find main container
      const containers = Array.from(document.querySelectorAll('div, main, section'));
      const mainContainer = containers.find(el => {
        const styles = window.getComputedStyle(el);
        return styles.maxWidth && styles.maxWidth !== 'none';
      });
      
      if (mainContainer) {
        const styles = window.getComputedStyle(mainContainer);
        data.layout.containerMaxWidth = styles.maxWidth;
        data.layout.containerPadding = styles.padding;
        data.layout.containerMargin = styles.margin;
      }

      // Typography - headings
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
        const el = document.querySelector(tag);
        if (el) {
          const styles = window.getComputedStyle(el);
          data.typography[tag] = {
            fontFamily: styles.fontFamily,
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            lineHeight: styles.lineHeight,
            color: styles.color,
            marginTop: styles.marginTop,
            marginBottom: styles.marginBottom
          };
        }
      });

      // Body text
      const bodyText = document.querySelector('p, div');
      if (bodyText) {
        const styles = window.getComputedStyle(bodyText);
        data.typography.body = {
          fontFamily: styles.fontFamily,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          lineHeight: styles.lineHeight,
          color: styles.color
        };
      }

      // Buttons
      const buttons = document.querySelectorAll('button, a[class*="button"], a[class*="btn"]');
      data.layout.buttons = [];
      buttons.forEach((button, idx) => {
        const styles = window.getComputedStyle(button);
        data.layout.buttons.push({
          index: idx,
          padding: styles.padding,
          borderRadius: styles.borderRadius,
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          border: styles.border,
          textContent: button.textContent.trim().substring(0, 50)
        });
      });

      // Images
      document.querySelectorAll('img').forEach(img => {
        data.images.push({
          src: img.src,
          alt: img.alt,
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height,
          loading: img.loading
        });
      });

      // Background images
      document.querySelectorAll('*').forEach(el => {
        const bgImage = window.getComputedStyle(el).backgroundImage;
        if (bgImage && bgImage !== 'none') {
          const urlMatch = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (urlMatch) {
            const className = getClassName(el);
            data.images.push({
              src: urlMatch[1],
              type: 'background',
              element: el.tagName + (className ? '.' + className.split(' ')[0] : '')
            });
          }
        }
      });

      // SVGs
      document.querySelectorAll('svg').forEach((svg, idx) => {
        data.images.push({
          type: 'svg',
          index: idx,
          viewBox: svg.getAttribute('viewBox'),
          outerHTML: svg.outerHTML.substring(0, 200)
        });
      });

      // Animations and transitions
      document.querySelectorAll('*').forEach(el => {
        const styles = window.getComputedStyle(el);
        const className = getClassName(el);
        if (styles.animation && styles.animation !== 'none') {
          data.animations.push({
            element: el.tagName + (className ? '.' + className.split(' ')[0] : ''),
            animation: styles.animation
          });
        }
        if (styles.transition && styles.transition !== 'all 0s ease 0s') {
          data.interactive.push({
            element: el.tagName + (className ? '.' + className.split(' ')[0] : ''),
            transition: styles.transition
          });
        }
      });

      // Sticky/fixed positioning
      document.querySelectorAll('*').forEach(el => {
        const styles = window.getComputedStyle(el);
        const className = getClassName(el);
        if (styles.position === 'sticky' || styles.position === 'fixed') {
          data.interactive.push({
            element: el.tagName + (className ? '.' + className.split(' ')[0] : ''),
            position: styles.position,
            top: styles.top,
            zIndex: styles.zIndex
          });
        }
      });

      // Section spacing
      const sections = document.querySelectorAll('section, [class*="section"]');
      sections.forEach((section, idx) => {
        const styles = window.getComputedStyle(section);
        if (!data.layout.sections) data.layout.sections = [];
        data.layout.sections.push({
          index: idx,
          padding: styles.padding,
          margin: styles.margin,
          backgroundColor: styles.backgroundColor
        });
      });

      return data;
    });

    // Save measurements
    fs.writeFileSync(
      path.join(outputDir, 'measurements.json'),
      JSON.stringify(measurements, null, 2)
    );
    console.log('Measurements saved');

    // Get HTML structure
    const html = await page.content();
    fs.writeFileSync(
      path.join(outputDir, 'page.html'),
      html
    );
    console.log('HTML saved');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
