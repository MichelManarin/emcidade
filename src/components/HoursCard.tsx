export default function HoursCard() {
  const hours = [
    { day: "Segunda", time: "08:00 – 18:00", open: true },
    { day: "Terça", time: "08:00 – 18:00", open: true },
    { day: "Quarta", time: "08:00 – 18:00", open: true },
    { day: "Quinta", time: "08:00 – 18:00", open: true },
    { day: "Sexta", time: "08:00 – 18:00", open: true },
    { day: "Sábado", time: "09:00 – 13:00", open: true },
    { day: "Domingo", time: "Fechado", open: false },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Horário de atendimento</h2>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid gap-2.5">
          <ul className="list-none p-0 m-0 border border-slate-200 rounded-[14px] overflow-hidden">
            {hours.map((hour, index) => (
              <li
                key={index}
                className="grid grid-cols-[1fr_auto] gap-3 px-3.5 py-2.5 border-b border-slate-200 last:border-b-0 bg-white"
              >
                <span className="text-slate-700 font-medium">{hour.day}</span>
                <span className={hour.open ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                  {hour.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

