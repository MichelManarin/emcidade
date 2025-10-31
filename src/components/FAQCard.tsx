export default function FAQCard() {
  const faqs = [
    {
      question: "Vocês atendem fora do horário comercial?",
      answer: "Sim, mediante agendamento prévio e taxa adicional.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Pix, cartão de crédito/débito e boleto para empresas.",
    },
    {
      question: "Emitam nota fiscal?",
      answer: "Sim, emitimos NF-e para todos os serviços.",
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Perguntas frequentes</h2>
      </div>
      <div className="p-3 sm:p-5 grid gap-2.5">
        {faqs.map((faq, index) => (
          <details key={index} className="cursor-pointer">
            <summary className="font-medium text-slate-800 hover:text-slate-900 transition-colors">
              {faq.question}
            </summary>
            <p className="mt-2 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

