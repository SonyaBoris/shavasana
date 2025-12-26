import Image from "next/image";

const May = () => {
  return (
    <section className="section-shell space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow">Сезонное предложение</p>
          <h2>Проведите лето в «Шавасане»</h2>
          <p className="text-muted-foreground">
            Дом у Волги — идеальное место для тихого отдыха. Утренние туманы, потрясающие закаты и много зелени вокруг. Можно просто забронировать номер, а мы поможем с практиками и досугом.
          </p>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Что вас ждет</h3>
            <ul className="space-y-2 text-foreground">
              <li>Природные фотозоны и прогулки по тропинкам к реке.</li>
              <li>Йога утром и вечером, медитации с поющими чашами.</li>
              <li>Мастер-классы по керамике и полезным суперфудам.</li>
              <li>Вечера у костра в кругу семьи и друзей.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 text-sm font-semibold text-[hsl(var(--accent-color))] shadow-[0_6px_20px_rgba(214,99,50,0.15)]">
            При бронировании от 4 дней — баня на дровах в подарок.
          </div>
          <a className='inline-flex w-fit items-center justify-center rounded-full bg-[hsl(var(--accent-color))] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(214,99,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-color))]/90' href="tel:+79879488117">Забронировать</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-sm">
            <Image className="h-full w-full object-cover" src="/images/may1.jpg" width={700} height={465} alt="Вид на Волгу летом" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-sm sm:row-span-2">
            <Image className="h-full w-full object-cover" src="/images/may2.jpg" width={700} height={465} alt="Летний отдых в центре" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-sm">
            <Image className="h-full w-full object-cover" src="/images/may3.jpg" width={700} height={465} alt="Прогулки у Волги" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default May;
