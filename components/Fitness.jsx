import Image from "next/image";

const Fitness = () => {
  return (
    <section className="section-shell space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="eyebrow">Обучение</p>
          <h2>Выездные курсы фитнес-инструкторов</h2>
          <p className="text-muted-foreground">
            Полное погружение Bella Vita: природа, зал, баня и кураторы рядом.
          </p>
        </div>
      </div>
      <div className="grid gap-8 grid-col lg:items-center">
        <div className="space-y-5">
          <p className="text-muted-foreground">
            Все внимание — учебе и телу. В свободное время гости отдыхают на природе, едят свежую еду и остаются в моменте «здесь и сейчас».
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Инструктор групповых программ: аэробика, степ, силовой и функциональный тренинг.",
              "Инструктор пилатес.",
              "Инструктор йоги и йоги в гамаках.",
              "Занятия для беременных и для пожилых людей.",
              "Стретчинг и латина.",
              "Практики в зале и на природе.",
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-white/70 bg-white/80 p-3 text-sm font-semibold text-foreground shadow-[0_6px_20px_rgba(15,30,25,0.05)] text-balance leading-relaxed">
                {item}
              </div>
            ))}
          </div>
          <a
            className='inline-flex w-fit items-center justify-center rounded-full bg-[hsl(var(--accent-color))] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(214,99,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-color))]/90'
            href="https://t.me/Shavasanaaaa"
          >
            Оставить заявку
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[ 
            { src: "/images/fit6.jpg", alt: "Тренировка в зале" },
            { src: "/images/fit4.jpg", alt: "Гости на занятии" },
            { src: "/images/fit5.jpg", alt: "Практика в гамаках" },
          ].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-sm">
              <Image
                className="h-full w-full object-cover"
                width={738}
                height={360}
                src={img.src}
                priority={index === 0}
                alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fitness;
