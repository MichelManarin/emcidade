import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Fotos</h2>
        <span className="text-slate-600 text-[11px] sm:text-[13px] hidden sm:inline">Arraste para salvar • Clique para ampliar</span>
        <span className="text-slate-600 text-[11px] sm:hidden">Toque para ampliar</span>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
          <a className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
              alt="Ambiente interno"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </a>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
            <a className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Produto 1"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </a>
            <a className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop"
                alt="Produto 2"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </a>
            <a className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
                alt="Equipe"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </a>
            <a className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1200&auto=format&fit=crop"
                alt="Fachada"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

