import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoàng Long & Bảo Ngọc - 3 tháng 1, 2026',
  description: 'Mẫu Thiệp Minimalism Đỏ Đậm - Thiệp Cưới Tối Giản Sang Trọng',
  themeColor: '#fb3570',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
