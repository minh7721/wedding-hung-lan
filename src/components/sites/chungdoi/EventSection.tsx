import { MapPin, Calendar, Clock } from 'lucide-react';

export function EventSection() {
  return (
    <section id="event" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="font-viaoda text-[43px] leading-[60px] text-center text-[#511419] mb-12">
          Thông tin sự kiện
        </h2>

        <div className="space-y-6">
          {/* Ceremony */}
          <EventCard
            title="Lễ Vu Quy"
            time="09:00 AM"
            date="Thứ Bảy, 25 tháng 12, 2024"
            address="123 Đường Lê Lợi, Quận 1, TP.HCM"
            mapUrl="https://maps.google.com"
          />

          {/* Reception */}
          <EventCard
            title="Tiệc Cưới"
            time="18:00 PM"
            date="Thứ Bảy, 25 tháng 12, 2024"
            address="Nhà hàng Paradise, 456 Đường Nguyễn Huệ, Quận 1, TP.HCM"
            mapUrl="https://maps.google.com"
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({
  title,
  time,
  date,
  address,
  mapUrl,
}: {
  title: string;
  time: string;
  date: string;
  address: string;
  mapUrl: string;
}) {
  return (
    <div className="bg-[#511419] rounded-2xl p-6 shadow-lg">
      <h3 className="font-viaoda text-3xl text-[#ECE4D8] mb-6 text-center">
        {title}
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#ECE4D8] flex-shrink-0 mt-0.5" />
          <p className="font-inter font-light text-[#ECE4D8]">{time}</p>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#ECE4D8] flex-shrink-0 mt-0.5" />
          <p className="font-inter font-light text-[#ECE4D8]">{date}</p>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#ECE4D8] flex-shrink-0 mt-0.5" />
          <p className="font-inter font-light text-[#ECE4D8]">{address}</p>
        </div>
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-[#ECE4D8] hover:bg-[#DED9D7] text-[#511419] px-6 py-2 rounded-full font-inter text-sm font-light transition-colors"
      >
        Xem bản đồ
      </a>
    </div>
  );
}
