export function DressCodeSection() {
  const colors = [
    { name: 'Burgundy', hex: '#511419' },
    { name: 'Terracotta', hex: '#B8654E' },
    { name: 'Gold', hex: '#C9A961' },
    { name: 'Cream', hex: '#ECE4D8' },
  ];

  return (
    <section className="relative z-10 px-6 py-10">
      <div className="max-w-[448px] mx-auto text-center">
        {/* Section title */}
        <h2
          className="uppercase text-base md:text-lg font-bold mb-3 tracking-widest"
          style={{ color: '#511419', fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}
        >
          Dress Code
        </h2>

        <p className="text-xs mb-6 leading-relaxed" style={{ color: '#6B4E3D' }}>
          Trang phục dự tiệc
        </p>

        {/* Color palette */}
        <div className="flex items-center justify-center gap-3 md:gap-5">
          {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center">
              <div
                className="w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg border-2 border-white"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
