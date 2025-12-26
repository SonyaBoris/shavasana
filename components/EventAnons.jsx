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
      id: 2,
      date: "31.12 - 2.01",
      title: "Новый год в Шавасане",
      desc: "Приезжайте к нам! Напоминаем, что 31 декабря мы встречаем Новый год в Шавасане. И для нас он особенный — нам исполняется ровно один год. Год, как мы держим это пространство для тех, кто ищет не внешнего блеска, а внутреннего света.",
      about: "Мы не будем шуметь и устраивать фейерверки. Мы выбрали другой Новый год — душевный, тёплый, настоящий.",
      plan: [
        "Утром и днём йога, медитации, дыхательные практики. Мягкое движение, чтобы встряхнуть лимфу, открыть грудную клетку, успокоить ум и пробудить внутренний огонь. Дадим телу и нервной системе мягкий, поддерживающий старт.",
        "Питание живая, лёгкая, растительная и вкусная еда. Мы не перегружаем желудок, а даём ему возможность отдохнуть и обновиться. Почувствуем настоящую энергию без кофеина и сахара.",
        "Днём тёплые творческие занятия. Лепим из глины, делаем духи с ароматом намерения, готовим зелёные вафли. Заземляемся, работаем с тактильностью и интуицией, возвращаемся в тело через творчество.",
        "Вечером наша любимая восстановительная баня. Активизируем кровоток, выводим токсины через кожу и расслабляем мышцы. А после — травяной чай, снежная купель, и такое состояние, в котором тело наконец выдыхает. "
      ]
    },
    {
      id: 3,
      date: "19.01 - 26.01",
      title: "Детокс-ретрит",
      desc: "А какой подарок ты бы подарила себе на праздник? Я всё чаще склоняюсь к тому, что лучший подарок — это забота о себе. Поэтому рекомендую экологичные подарки, чтобы они несли наполнение и здоровье.",
      about: "Даже если ты не захотела обделять себя в еде на новогодние праздники, то можно подстраховаться заранее подаренным себе январским недельным детокс туром",
      plan: [
        "Мы сразу проверим вашу капельку крови на специальном оборудовании гемоскане и расскажем что там происходит. И потом в конце так же на новой капельке покажем результат",
        "Мы приготовим для вас легкую вкусную и полезную еду!",
        "Приготовим специальную ощелачивающую детокс воду и витграсс",
        "Добавим специально подобранные травяные сборы для очищения ЖКТ и лимфы",
        "Будем заниматься йогой, пилатесом , танцевать",
        "Изучать висцеральный массаж и самомассаж",
        "Активно гулять",
        "Заниматься творчеством - сотворим подарок из керамики",
        "Выведем ваши токсины в баньке (обязательно будет пармастер)"
      ]
    },
    {
      id: 5,
      date: "15.02 - 22.02",
      title: "СИЯЮЩИЙ ДЕТОКС: Голодай, не голодая",
      desc: "Это не просто ретрит — это полноценное очищение, оздоровление и омоложение в безопасном формате, где тебя ведут опытные практики с международным уровнем ",
      about: "Юрий Рахубин — основатель бренда, наш внутренний мотор и проводник в мир живого питания и глубокой телесной мудрости. Именно поэтому он не просто создаёт продукты, которые работают, — он собирает вокруг себя пространство, где можно перезагрузить тело, разум и энергию.",
      plan: [
        "Ежедневные занятия: йога / пилатес / бачата / самомассаж / звуковая терапия (очищение энерго поля с помощью тибетских чаш и этнических инструментов) / концерты с музыкой нового времени, Дает опору, спокойствие и стабильность",
        "Мягкая баня с групповыми парениями, ароматными травами для усиления эффекта очищения и перезагрузки.",
        "Мастер-классы:по проращиванию семян, по висцеральному массажу, по приготовлению пробиотических флаксов, по оживлению любимых блюд с помощью живого питания",
        "Прогулки на свежем воздухе: выезд на каток, есть прокат лыж",
        "Гемосканирование крови - на входе и на выходе из программы"
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
                className={`group flex h-full cursor-pointer flex-col justify-between rounded-2xl border p-3 sm:p-4 transition ${
                  selectedEvent?.id === event.id
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
