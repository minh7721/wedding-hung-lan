export function StorySection() {
  return (
    <section className="py-20 px-6 bg-[#511419]">
      <div className="max-w-md mx-auto">
        <h2 className="font-viaoda text-[43px] leading-[60px] text-center text-[#ECE4D8] mb-12">
          Câu chuyện tình yêu
        </h2>

        <div className="space-y-12">
          {/* First meet */}
          <StoryCard
            date="Mùa xuân 2020"
            title="Lần đầu gặp gỡ"
            description="Chúng tôi gặp nhau lần đầu trong một buổi chiều mùa xuân ấm áp. Từ cái nhìn đầu tiên, chúng tôi đã biết rằng đây là người đặc biệt."
            image="/sites/chungdoi/images/story-1.jpg"
          />

          {/* Proposal */}
          <StoryCard
            date="Mùa đông 2024"
            title="Lời cầu hôn"
            description="Dưới ánh trăng lãng mạn của một đêm đông, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh. Và em đã gật đầu với hạnh phúc tràn ngập."
            image="/sites/chungdoi/images/story-2.jpg"
          />

          {/* Wedding */}
          <StoryCard
            date="25 tháng 12, 2024"
            title="Ngày trọng đại"
            description="Và giờ đây, chúng tôi sẵn sàng bước vào chặng đường mới cùng nhau, với sự chứng kiến của gia đình và bạn bè thân yêu."
            image="/sites/chungdoi/images/story-3.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function StoryCard({
  date,
  title,
  description,
  image,
}: {
  date: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="text-center space-y-4">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-[#ECE4D8] font-inter text-sm font-light opacity-80">{date}</p>
      <h3 className="font-viaoda text-3xl text-[#ECE4D8]">
        {title}
      </h3>
      <p className="text-[#ECE4D8] font-inter font-light text-base leading-relaxed opacity-90">
        {description}
      </p>
    </div>
  );
}
