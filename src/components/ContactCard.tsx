"use client";

import { useAppContext } from "@/context/AppContext";

export default function ContactCard() {
  const { data, loading } = useAppContext();

  if (loading || !data || !data.enabled.contactCard) return null;

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 13) {
      return `(${cleaned.slice(2, 4)}) ${cleaned.slice(4, 8)}-${cleaned.slice(8)}`;
    }
    return phone;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Contato rápido</h2>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-1 gap-3">
          <a
            href={`https://wa.me/${data.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white shadow-[0_6px_20px_rgba(37,99,235,.3)] font-semibold transition-all duration-200 hover:shadow-[0_8px_25px_rgba(37,99,235,.4)] text-[15px]"
          >
            Chamar no WhatsApp
          </a>
          <a
            href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,.05)] font-semibold transition-all duration-200"
          >
            Ligar {formatPhone(data.contact.phone)}
          </a>
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,.05)] font-semibold transition-all duration-200"
          >
            Enviar e-mail
          </a>
          {data.contact.responseTime && (
            <small className="text-slate-600 text-center text-[13px]">Tempo médio de resposta: {data.contact.responseTime}</small>
          )}
        </div>
      </div>
    </div>
  );
}
