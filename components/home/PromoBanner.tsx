import MaterialIcon from "@/components/ui/MaterialIcon";

export default function PromoBanner() {
  return (
    <div className="px-4 pb-12">
      <div className="bg-primary/20 rounded-2xl p-6 flex items-center gap-4 border border-primary/20">
        <div className="flex-1">
          <h3 className="text-slate-900 font-bold text-lg leading-tight">
            Dapatkan Diskon 15%
          </h3>
          <p className="text-slate-600 text-xs mt-1">
            Gunakan kode{" "}
            <span className="font-bold text-primary">HIJAUKAN</span> untuk
            pembelian pertama.
          </p>
          <button className="mt-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors active:scale-95">
            Klaim Sekarang
          </button>
        </div>
        <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center">
          <MaterialIcon icon="local_florist" size="xl" className="text-primary" />
        </div>
      </div>
    </div>
  );
}
