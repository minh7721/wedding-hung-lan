import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Minh Hùng & Hương Lan - 24 tháng 10, 2026',
  description: 'Mẫu Thiệp Minimalism Đỏ Đậm - Thiệp Cưới Tối Giản Sang Trọng',
};

export const viewport: Viewport = {
  themeColor: '#fb3570',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
