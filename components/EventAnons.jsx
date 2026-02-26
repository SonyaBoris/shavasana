"use client"

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventAnons = () => {
  const [api, setApi] = useState(undefined)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    if (events.length > 0) {
      setSelectedEvent(events[0]);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (api) {
      api.scrollNext(false)
    }
  }, [api]);

  const handlePrev = useCallback(() => {
    if (api) {
      api.scrollPrev(false)
    }
  }, [api]);

  const handleSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
  }, []);

  const events = useMemo(() => [

    {
      id: 1,
      date: "1 - 8 мая",
      title: "Йога-тур в ретрит-центре Шавасана",
      desc: "Начало мая в Шавасане как первое тёплое прикосновение после долгой зимы. Земля ещё держит прохладу, воздух звенит чистотой. Утро здесь не «включает» тебя, а мягко возвращает: вдох за вдохом, без рывков и долженствований.",
      about: "В эти дни с нами будет Андрей Зарубин — преподаватель йоги и практик осознанности, телесно-ориентированный и гештальт-терапевт, основатель студии «Точка опоры», человек, который умеет работать с телом так же точно, как мастер настраивает сложный механизм. Его путешествия по Индии, обучение у мастеров, личный опыт и годы психотерапии и телесных практик стали глубокой трансформацией не через теорию,а через проживание. Он помогает глубинно корректировать ресурсы и жизненные стратегии, чтобы человек снова почувствовал опору в теле, ясность направления и живой интерес к жизни.",
      plan: [
        "Каждое утро - Мягкая медитация, дыхание и йога-асаны - 1,5 часа. Без гонки за формой. С вниманием к ощущениям, как будто тело вспоминает себя изнутри.",
        "1 день - Соматическая практика «Прибывание и движение внимания». Про то, как вернуться из головы в тело и заметить: я здесь.",
        "2 день - Беседа и практика «Движение к опоре и поддержке». Про устойчивость - не как напряжение, а как умение опираться.",
        "3 день - Йога-нидра - 1 час. Состояние, где отдыхает не только тело, но и привычка всё контролировать.",
        "4 день - Основы Дизайна Человека как компас для самореализации. Не инструкция «как жить», а ориентиры, чтобы не идти против своей природы.",
        "5 день - Соматическая практика «От зачатия до рождения». Базовые нейроклеточные движения как возвращение к самым ранним слоям опыта.",
        "6 день - Беседа и практика «Границы и личное пространство». Про контакт без слияния и близость без потери себя.",
        "7 день - Снова йога-нидра. Как тихая точка в конце пути, где всё укладывается само собой.",
        "Также мы добавим в эти дни простые «земные» радости, которые хорошо заземляют и возвращают в тело: рецепты из дикоросов, квас из берёзового сока, мастер-класс по керамике, походы в лес."
      ]
    },
    {
      id: 2,
      date: "17 - 19 апреля ",
      title: "Ретрит «Тишина, Ясность и Предназначение» с Михаилом Седовым",
      desc: "3 дня, чтобы отпустить лишнее, почувствовать главное и заглянуть туда, где ответы уже есть.",
      about: "Михаил Седов - проводник и наставник, который помогает увидеть глубинные причины текущих состояний, распознать задачи души и вспомнить, с чем человек пришёл в эту жизнь. Через личные беседы, медитативные настройки и простое живое присутствие он мягко раскрывает то, что давно просится быть услышанным.",
      plan: [
        "Личная сессия с Михаилом Седовым. Глубокая и бережная встреча, где вы сможете задать вопросы, которые по-настоящему важны. Михаил помогает увидеть корни текущих трудностей, распознать уроки, которые душа выбрала пройти, и найти ясность в своём пути.",
        "Вечер у костра с живым разговором. Открытый круг - пространство, где можно быть собой. Вопросы, инсайты, узнавание себя в историях других. Михаил делится видением, открывает тему предназначения и возвращения к себе.",
        "Практики с Михаилом на природе. Прогулки, настройки, медитации.Спокойные и глубокие процессы, которые включают тело, дыхание, интуицию.Всё происходит в живом потоке - в резонансе с природой, тишиной и внутренним запросом.",
        "Забота о теле и духе. Йога на рассвете, фермерская еда, баня с целебными травами, купель, чай с травами и аромат весны в каждом вдохе. Всё, чтобы тело стало союзником на пути к ясности.",
        "Весенний ритм дня. Без суеты и расписания по минутам. Время, наполненное смыслом: утренние практики, лес, тишина, чай, отдых, разговоры у огня и настоящая встреча с собой.",
      ]
    },

  ], []);

  return (
    <>
      <Carousel setApi={setApi} opts={{ align: "start", slidesToScroll: 1 }}>
        <CarouselContent className="px-1 md:px-2">
          {events.map(event => (
            <CarouselItem
              key={event.id}
              className="basis-1/2 px-2 sm:basis-[46%] md:basis-[48%] lg:basis-1/3 xl:basis-1/4 p-3 sm:p-5">
              <div
                className={`group flex h-full cursor-pointer flex-col justify-between rounded-2xl border p-3 sm:p-4 transition ${selectedEvent?.id === event.id
                  ? 'border-[hsl(var(--accent-color))] bg-white'
                  : 'border-white/70 bg-white/70 hover:border-gray-200'
                  }`}
                onClick={() => handleSelectEvent(event)}
              >
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.14em]">
                    {event.date}
                  </span>
                  <h3 className='text-base font-semibold leading-snug text-foreground text-balance sm:text-lg md:text-xl'>
                    {event.title}
                  </h3>
                  <p className="hidden text-sm text-muted-foreground sm:block">{event.desc}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent-color))] transition group-hover:translate-x-1 sm:mt-4 sm:text-sm">
                  Подробнее
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-3 py-3">
        <Button
          size="icon"
          variant="outline"
          onClick={handlePrev}>
          <ChevronLeft />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleNext}>
          <ChevronRight />
        </Button>
      </div>
      {selectedEvent && (
        <div className="mt-2 rounded-3xl border border-white/70 bg-secondary/60 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-foreground">{selectedEvent.title}</h2>
              <p className='text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground'>{selectedEvent.date}</p>
            </div>
            <a
              className='inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent-color))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(214,99,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-color))]/90'
              href="tel:+79879488117"
            >
              Записаться
            </a>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div className="space-y-3 text-muted-foreground">
              <p>{selectedEvent.desc}</p>
              <p>{selectedEvent.about}</p>
            </div>
            <div>
              <p className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent-color))]'>Что даст практика</p>
              <ul className='space-y-2 text-foreground'>
                {selectedEvent.plan.map((item, index) => (
                  <li key={index} className="flex gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-[0_6px_20px_rgba(15,30,25,0.05)]">
                    <span className="text-sm leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventAnons;
