export function FlowerDecoration() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top left flower */}
      <div className="absolute -top-12 -left-12 w-64 h-64 opacity-40">
        <img
          src="/sites/chungdoi/images/flower-decoration.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top right flower */}
      <div className="absolute -top-16 -right-16 w-72 h-72 opacity-30 rotate-90">
        <img
          src="/sites/chungdoi/images/flower-decoration.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom left flower */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 opacity-25 -rotate-45">
        <img
          src="/sites/chungdoi/images/flower-decoration.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom right flower */}
      <div className="absolute -bottom-16 -right-12 w-64 h-64 opacity-35 rotate-180">
        <img
          src="/sites/chungdoi/images/flower-decoration.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Center accent flowers */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-20 rotate-45">
        <img
          src="/sites/chungdoi/images/flower-decoration.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 opacity-15 -rotate-12">
        <img
          src="/sites/chungdoi/images/flower-decoration.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
