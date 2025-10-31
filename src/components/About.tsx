export default function About() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Sobre</h2>
      </div>
      <div className="p-3 sm:p-5 grid gap-3 sm:gap-3.5">
        <p className="text-[15.5px] text-slate-800 leading-relaxed">
          A <strong className="text-slate-900">Nome da Empresa</strong> atua há mais de 10 anos em Criciúma, oferecendo soluções de alta qualidade em <em className="text-slate-700">categoria/segmento</em>. Nosso foco é atendimento humano, preços justos e resultados consistentes. Trabalhamos com marcas confiáveis, equipe certificada e processos claros.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <span className="px-3 py-2 rounded-full border border-slate-200 text-[12px] text-slate-700 bg-slate-50 font-medium">
            Orçamento gratuito
          </span>
          <span className="px-3 py-2 rounded-full border border-slate-200 text-[12px] text-slate-700 bg-slate-50 font-medium">
            Atendimento em domicílio
          </span>
          <span className="px-3 py-2 rounded-full border border-slate-200 text-[12px] text-slate-700 bg-slate-50 font-medium">
            Garantia estendida
          </span>
          <span className="px-3 py-2 rounded-full border border-slate-200 text-[12px] text-slate-700 bg-slate-50 font-medium">
            Parcelamento no cartão
          </span>
        </div>

        <div className="grid gap-3.5 mt-2.5">
          <div className="flex gap-3 items-start p-3.5 border border-slate-200 rounded-[14px] bg-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-400">
              <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 14.5h-2V17h2v-.5Zm0-9h-2v7h2v-7Z"/>
            </svg>
            <div>
              <h4 className="m-0 mb-1 font-semibold text-slate-900">Serviço A</h4>
              <p className="m-0 text-slate-600 text-sm leading-relaxed">
                Descrição breve do serviço A, benefícios principais e quando é indicado.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3.5 border border-slate-200 rounded-[14px] bg-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-400">
              <path d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm16 2h2v8h-2V8Z"/>
            </svg>
            <div>
              <h4 className="m-0 mb-1 font-semibold text-slate-900">Serviço B</h4>
              <p className="m-0 text-slate-600 text-sm leading-relaxed">
                Descrição breve do serviço B, diferenciais e tempo médio de execução.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3.5 border border-slate-200 rounded-[14px] bg-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-400">
              <path d="M7 4h10a2 2 0 0 1 2 2v9.586a2 2 0 0 1-.586 1.414l-2.414 2.414A2 2 0 0 1 14.586 20H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm7 11h2v-2h-2v2Zm-8-7h10V6H6v2Z"/>
            </svg>
            <div>
              <h4 className="m-0 mb-1 font-semibold text-slate-900">Serviço C</h4>
              <p className="m-0 text-slate-600 text-sm leading-relaxed">
                Descrição do serviço C, materiais usados e garantias.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3.5 border border-slate-200 rounded-[14px] bg-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-400">
              <path d="M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 2a7 7 0 1 1-7 7 7.008 7.008 0 0 1 7-7Zm1 3h-2v5h5v-2h-3V8Z"/>
            </svg>
            <div>
              <h4 className="m-0 mb-1 font-semibold text-slate-900">Atendimento Express</h4>
              <p className="m-0 text-slate-600 text-sm leading-relaxed">
                Agendamento rápido para urgências com taxa adicional e prioridade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

