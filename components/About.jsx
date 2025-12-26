import Image from "next/image";
import AboutCarousel from "./AboutCarousel";

export const About = () => {

  return (
    <section id="about" className="space-y-10 scroll-mt-28 md:scroll-mt-36">
      <div className="section-shell space-y-6">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <p className="eyebrow">О центре</p>
            <h2>Эко-пространство для глубокого отдыха</h2>
            <p>
              Мы создавали «Шавасану» как дом, где каждая деталь помогает расслабиться: много дерева и естественного света, теплый пол и камин, собственная баня на дровах и тишина Волги поблизости.
            </p>
            <p>
              Здание полностью из лиственницы, мебель сделана руками мастеров, а керамическая посуда — авторская, созданная с молитвой. Здесь хочется оставаться и дышать глубже.
            </p>
            <div className="grid gap-3">
              {[
                "Натуральные материалы и ручная работа",
                "В каждом номере — личный санузел и свежие матрасы",
                "Уютные огоньки, камин и пространство для медитаций",
              ].map((item, index) => (
                <div key={index} className="rounded-2xl bg-secondary/70 p-3 text-sm font-semibold text-foreground shadow-[0_6px_24px_rgba(15,30,25,0.06)] leading-6 text-balance border border-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full overflow-hidden rounded-3xl border border-white/60 bg-secondary/60 shadow-inner">
            <Image
              className="h-[360px] lg:h-[560px] w-full object-cover"
              src="/images/fire.jpg"
              width={738}
              height={360}
              priority={true}
              alt="Вечер у огня в центре"
            />
          </div>
        </div>
      </div>

      <div className="section-shell">
        <AboutCarousel />
      </div>

      <div className="grid gap-6">
        <div className="section-shell grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="eyebrow">Детокс программы</p>
            <h3>Очищение тела на природе</h3>
            <p>
              Мы проводим программы детокса на растительной кухне и чистой воде, поддерживая гостей вниманием и заботой. С радостью принимаем мастеров со своими группами.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Проживание и практика в едином ритме без суеты города.</li>
              <li>Мягкая поддержка тела: дыхательные техники, баня, прогулки.</li>
              <li>Можно посадить свое дерево — мы создаем священную рощу.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-secondary/60">
            <Image className="h-full w-full object-cover" src="/images/detocs.jpg" width={700} height={465} alt="Медитация в центре" />
          </div>
        </div>

        <div className="section-shell grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-secondary/60">
            <Image className="h-full w-full object-cover" src="/images/detocs2.jpg" width={700} height={465} alt="Стол с живой едой" />
          </div>
          <div className="space-y-4">
            <p className="eyebrow">Живое питание</p>
            <h3>Вкусно, питательно, с заботой о теле</h3>
            <p>
              Вегетарианская, веганская и сыроедная кухня из продуктов, выращенных на нашей земле. Мы готовим так, чтобы было полезно и по-настоящему вкусно.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Витграсс, проростки, микрозелень и ферментированные продукты.</li>
              <li>Льняные хлебцы, квасы и авторские десерты без перегруза для тела.</li>
              <li>Поддержка пищеварения и энергии на протяжении всего ретрита.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
