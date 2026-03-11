export default function HeroBanner() {
  return (
    <div className="p-4 sm:p-6">
      <div
        className="flex min-h-130 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center shadow-xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBDKf550YqRy3Zm7-DRxD3CYStVZJsiMBHMtHsS2ggDm94dRErZX3wxMqEprtWoYRPg21XhChSVbW9xyhpwDcyK0WxICJHeOfUto8PVE-yax-ugxwgCMXPJ_lDmeGEIaGPTts_jOiVTJdjFt3_6jFw_ThpXXdNMAsZC717j9g0q9G-Qq3PXd8ztlYYLr6h2kss812pIBSoyW3GAC8KjKEn568NQSk1YsFNHXH4mAaRDGYXLmVkybVjjn5PPyMHrY03-2vNUJ_xkpw")`,
        }}
        role="img"
        aria-label="Beautiful aesthetic indoor garden with various lush green plants"
      >
        <div className="flex flex-col gap-3 max-w-md">
          <span className="text-white w-max self-center py-1 px-2 animate-bounce duration-5000 rounded bg-amber-400 font-bold tracking-widest text-xs uppercase">
            SENTRA BIBIT BUAH LAMPUNG
          </span>
          <h2 className="text-white text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl font-display">
            Segarkan Rumahmu dengan Flora Jaya
          </h2>
          <p className="text-white/90 text-sm font-medium leading-relaxed sm:text-base">
            Menjual Berbagai Jenis Bibit Buah Tabulampot
          </p>
        </div>
        <button className="flex min-w-40 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal transition-transform active:scale-95 shadow-lg shadow-primary/30 hover:brightness-110">
          <span className="truncate">Lihat Koleksi</span>
        </button>
      </div>
    </div>
  );
}
