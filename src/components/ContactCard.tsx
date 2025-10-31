export default function ContactCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Contato rápido</h2>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-1 gap-3">
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white shadow-[0_6px_20px_rgba(37,99,235,.3)] font-semibold transition-all duration-200 hover:shadow-[0_8px_25px_rgba(37,99,235,.4)] text-[15px]"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="tel:+554833334444"
            className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,.05)] font-semibold transition-all duration-200"
          >
            Ligar (48) 3333-4444
          </a>
          <a
            href="mailto:contato@seudominio.com"
            className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,.05)] font-semibold transition-all duration-200"
          >
            Enviar e-mail
          </a>
          <small className="text-slate-600 text-center text-[13px]">Tempo médio de resposta: ~15 min</small>
        </div>
      </div>
    </div>
  );
}

