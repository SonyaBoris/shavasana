export const Main = () => {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden rounded-b-[32px] mb-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/bg2.jpg')] bg-cover bg-center brightness-[0.85]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0f2319]/65 to-[#0f2319]/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white space-y-6 pt-16 md:pt-10">
        <span className="tag justify-center bg-white/15 text-white">
          Пространство силы на берегу Волги
        </span>
        <h1>Ретрит-центр «Шавасана»</h1>
        <p className="text-lg text-white/85 md:text-xl">
          Дом для медитаций, детокса и отдыха в заботливом комьюнити. Теплый зал с камином, баня на дровах, эко-материалы и кухня живого питания.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#events"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent-color))] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(214,99,50,0.35)] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-color))]/90"
          >
            Мероприятия и ретриты
          </a>
          <a
            href="#address"
            className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/25"
          >
            Как добраться
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute -left-16 bottom-8 hidden h-36 w-36 rounded-full bg-white/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -right-16 top-10 hidden h-48 w-48 rounded-full bg-[rgba(214,155,116,0.18)] blur-3xl lg:block" />
    </section>
  );
};
