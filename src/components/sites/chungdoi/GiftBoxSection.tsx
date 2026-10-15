import { Gift } from 'lucide-react';

export function GiftBoxSection() {
  return (
    <section className="relative z-10 px-6 py-12">
      <div className="max-w-[448px] mx-auto">
        {/* Section title */}
        <h2
          className="uppercase text-center text-xl md:text-2xl font-bold mb-2 tracking-widest"
          style={{ color: '#511419', fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}
        >
          Hộp Quà Mừng
        </h2>

        <p className="text-center text-sm mb-8 leading-relaxed px-4" style={{ color: '#6B4E3D' }}>
          Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi
        </p>

        {/* Single card with both QR codes side by side */}
        <div className="p-6 md:p-8 rounded-3xl shadow-xl" style={{ backgroundColor: '#F5F1E8' }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift className="w-5 h-5" style={{ color: '#511419' }} />
            <h3 className="text-lg font-semibold uppercase tracking-wider" style={{ color: '#511419' }}>
              Gửi quà tới cô dâu và chú rể
            </h3>
          </div>

          {/* Two QR codes side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Groom's QR */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: '#511419' }}>
                Mừng Chú Rể
              </p>

              <div className="text-center mb-4">
                <p className="text-base font-bold mb-1" style={{ color: '#3D2820', fontFamily: 'Times New Roman, serif' }}>
                  Phan Minh Hùng
                </p>
                <p className="text-xs" style={{ color: '#8B6F47' }}>
                  Vietcombank
                </p>
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-3">
                <div className="w-40 h-40 rounded-2xl flex items-center justify-center shadow-md overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
                  <img
                    src="/images/stk_qr.jpeg"
                    alt="QR Code"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Account number */}
              <div className="text-center p-3 rounded-xl w-full" style={{ backgroundColor: 'rgba(81, 20, 25, 0.08)' }}>
                <p className="text-xs mb-1 opacity-70" style={{ color: '#6B4E3D' }}>STK</p>
                <p className="text-base font-mono font-semibold tracking-wider" style={{ color: '#511419' }}>
                  1234567890
                </p>
              </div>
            </div>

            {/* Bride's QR */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: '#511419' }}>
                Mừng Cô Dâu
              </p>

              <div className="text-center mb-4">
                <p className="text-base font-bold mb-1" style={{ color: '#3D2820', fontFamily: 'Times New Roman, serif' }}>
                  Nguyễn Hương Lan
                </p>
                <p className="text-xs" style={{ color: '#8B6F47' }}>
                  Techcombank
                </p>
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-3">
                <div className="w-40 h-40 rounded-2xl flex items-center justify-center shadow-md overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
                  <img
                    src="/images/stk_qr.jpeg"
                    alt="QR Code"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Account number */}
              <div className="text-center p-3 rounded-xl w-full" style={{ backgroundColor: 'rgba(81, 20, 25, 0.08)' }}>
                <p className="text-xs mb-1 opacity-70" style={{ color: '#6B4E3D' }}>STK</p>
                <p className="text-base font-mono font-semibold tracking-wider" style={{ color: '#511419' }}>
                  0987654321
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
