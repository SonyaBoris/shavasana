"use client"

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RECURRING_INVITE = "Регулярное мероприятие";
const TELEGRAM_FALLBACK = "https://t.me/Shavasana_centre";

const EventAnons = () => {
  const [api, setApi] = useState(undefined)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const hasPlanItems = useCallback((plan) => {
    return Array.isArray(plan) && !(plan.length === 1 && plan[0] === "-");
  }, []);

  const recurringPrograms = useMemo(() => [
    {
      key: "mikhail-sedov",
      title: "Ретрит «Тишина, Ясность и Предназначение» с Михаилом Седовым",
      image: "/images/detocs14.jpg",
      description: "Весна — время, когда природа сбрасывает старое, просыпается и тянется к свету. Если вы чувствуете зов замедлиться, послушать себя и наметить новые шаги, это пространство тишины и внутреннего обновления для вас. Три дня, чтобы отпустить лишнее, почувствовать главное и заглянуть туда, где ответы уже есть.",
      guide: "Михаил Седов — проводник и наставник, который помогает увидеть глубинные причины текущих состояний, распознать задачи души и вспомнить, с чем человек пришел в эту жизнь. Через личные беседы, медитативные настройки и живое присутствие он мягко раскрывает то, что давно просится быть услышанным.",
      plan: [
        "Личная сессия с Михаилом Седовым: глубокая и бережная встреча с ключевыми вопросами и поиском ясности пути.",
        "Вечер у костра с живым разговором: открытый круг, инсайты, тема предназначения и возвращения к себе.",
        "Практики на природе: прогулки, настройки и медитации в резонансе с тишиной и внутренним запросом.",
        "Забота о теле и духе: йога на рассвете, фермерская еда, баня с целебными травами, купель и травяной чай.",
        "Ритм дня без суеты: утренние практики, лес, отдых и разговоры у огня."
      ],
      forWhom: [
        "Если чувствуете, что пришло время остановиться и услышать, куда хочется идти на самом деле.",
        "Если нужна ясность: в теле, мыслях и решениях.",
        "Если хотите встретить сезон без суеты, но с опорой внутри."
      ],
      booking: "По вопросам и бронированию: через Telegram центра.",
      bookingUrl: TELEGRAM_FALLBACK
    },
    {
      key: "detox",
      title: "Сияющий детокс",
      image: "/images/detoks.jpg",
      description: "Новейшая авторская программа Юрия Рахубина и Юлии Борисовой. Детокс-тур на неделю в Шавасане: очищение, перезагрузка и обучение безопасному выходу.",
      guide: "Юрий Рахубин — международный эксперт в области живого питания, натуропатии, телесных практик и биохакинга. Юлия Борисова — соавтор программы, создательница ретрит-центра «Шавасана», доктор народной медицины и натуропат-нутрициолог.",
      plan: [
        "Формат 7 дней: 3 дня мягкого детокса на витграссе, овсяном киселе и овощном бульоне; 2 дня на отваре по системе Марвы Оганян; 2 дня обучения правильному выходу из голодания.",
        "По каждому этапу участники получают мастер-классы, рецепты и видеоуроки.",
        "Ежедневные практики: йога, пилатес, бачата, самомассаж.",
        "Бани с групповыми парениями, ароматными травами и глубокой перезагрузкой.",
        "Мастер-классы: керамика, кремоварение, висцеральный массаж.",
        "Прогулки и активность на свежем воздухе: лес, лошади, сбор березового сока.",
        "Гемосканирование крови на входе и выходе, чтобы увидеть изменения по результатам очищения.",
        "Дополнительные услуги: висцеральный и вакуумный массаж, массаж казацкими нагайками, омолаживающее тейпирование лица, индивидуальные банные ритуалы, Su Jok и гавайский массаж."
      ],
      forWhom: [
        "Для тех, кто хочет мягко восстановить организм и снизить хроническую нагрузку.",
        "Для тех, кто ищет системный и сопровождаемый формат детокса без истощения.",
        "Для тех, кому важны практические инструменты, которые можно продолжить дома."
      ],
      booking: "Если откликается, бронирование через Telegram центра.",
      bookingUrl: "https://t.me/FarkhodAkh"
    },
    {
      key: "open-day",
      title: "День открытых дверей для организаторов",
      image: "/images/dver.jpg",
      description: "При встрече мастеров рождается больше, чем сотрудничество. Это день живых связей, знакомства с пространством и обсуждения, как проводить свои программы в Шавасане.",
      guide: "Приглашаем мастеров, фасилитаторов, организаторов и тех, кто работает с людьми. Покажем, как устроен центр, чтобы вы сразу поняли, подойдет ли пространство именно под вашу практику.",
      plan: [
        "12:00 — встреча и обед: витграсс, проростки, хлеб на закваске, натуральные сладости и веганские блюда.",
        "Экскурсия по пространству: залы, баня, номера, сад, тропинки и места силы. Обсуждение размещения групп, питания и сопровождения.",
        "15:00 — баня с пармастером: дровяная баня, травы, аромат и глубокая разгрузка.",
        "Для желающих после программы: специальные условия на проживание и завтрак."
      ],
      forWhom: [
        "Для тех, кто ищет место для авторских ретритов, практик и групповых программ.",
        "Для тех, кому важно пространство, которое поддерживает не только гостей, но и ведущего.",
        "Для тех, кто хочет лично почувствовать атмосферу центра перед бронированием дат."
      ],
      booking: "Если откликается, бронирование через Telegram центра.",
      bookingUrl: TELEGRAM_FALLBACK
    }
  ], []);

  const events = useMemo(() => [
    {
      id: 1,
      date: "9-16 сентября",
      title: "Условное голодание в «Шавасане»",
      desc: "Неделя, чтобы выключиться из привычного городского ритма и направить внимание на себя: тело, сон, движение, дыхание и простые ежедневные привычки.",
      about: "Мы снова проводим наш привычный формат условного голодания по системе Марвы Оганян — с подготовкой, травяными отварами и постепенным возвращением к питанию.",
      plan: [
        "Утренние оздоровительные зарядки",
        "Дыхательные практики и медитации",
        "Лекции о питании и образе жизни",
        "Ежедневная баня на дровах",
        "Прогулки, Волга и активный отдых на воде",
        "Вечера у костра с песнями и разговорами",
        "Время для сна, тишины и отдыха",
        "Бережное сопровождение на протяжении программы"
      ]
    },
    {
      id: 2,
      date: "18-20 сентября ",
      title: "Пошив обережного сарафана с Екатериной Хан",
      desc: "Сентябрь — хорошее время для ручной работы. Лето уже отпускает, воздух становится прохладнее, дни — тише. Хочется меньше суеты и больше простых, понятных дел, поэтому в эти три дня мы будем шить обережное платье.",
      about: "Ручное шитьё хорошо возвращает внимание из головы в руки. Пока прокладываешь строчку, невозможно одновременно спешить во все стороны. Есть игла, ткань и следующий стежок.",
      plan: [
        "Тёплая живая еда из сезонных продуктов",
        "Банька вечером, особенно приятная после нескольких часов за работой",
        "Мягкая утренняя йога",
        "Волга, прохладный воздух и время, которое не нужно всё время чем-то заполнять",
      ]
    },
    {
      id: 3,
      date: "2-4 октября",
      title: "Гурмэ-тур «Дары осени»",
      desc: "Этот тур — для тех, кому хочется не просто перекусить и поспать, а почувствовать заботу через тепло рук, баню, вкусную еду и женский круг. Будем готовить полезные деликатесы из того, чем щедро одарила нас осень: лесные грибы, тыква, яблоки, корнеплоды, травы и поздние овощи.",
      plan: [
        "Кулинарные мастер-классы на открытом воздухе",
        "Научимся печь тёплые осенние пироги с садовыми плодами",
        "Приготовим сытные, но лёгкие деликатесы: грибное ризотто, крем-суп из печёной тыквы, овощи на живом огне, десерты с мёдом и лесными ягодами",
        "Обмен рецептами и секретами «полезного гурманства», которые вы увезёте с собой",
        "Коллективная массажная практика",
        "Баня на дровах и джакузи"
      ]
    },
    {
      id: 4,
      date: "7-13 октября",
      title: "Сияющий детокс",
      desc: "Очищение, перезагрузка и обучение безопасному выходу.",
      bookingUrl: "https://t.me/FarkhodAkh",
      plan: ["-"],
      recurringKey: "detox"
    },
    {
      id: 5,
      date: "14-24 ноября",
      title: "Осенний ретрит в Индию (Путтапарти)",
      desc: "Путтапарти — 10 дней благости.",
      about: "Жизнь в ашраме — это другой ритм: здесь всё держится на простоте, мягкой дисциплине и молитвенной тишине.",
      bookingUrl: TELEGRAM_FALLBACK,
      plan: [
        "Путтапарти — место, где жил и служил миру Сатья Саи Баба. Ежедневные даршаны, коллективные пения, пространство, в котором тысячи людей учились самому главному — быть внимательными к сердцу.",
        "Мы будем жить в ашраме, вставать рано, входить в день без спешки. Посетим священные места в окрестностях. Почувствуем, как ум постепенно перестает шуметь.",
        "Это опыт соприкосновения с традицией, где духовность — не слова, а образ жизни.",
        "Такие дни дают: глубокое внутреннее выравнивание, ясность намерений, ощущение опоры внутри.",
        "Как говорил Сатья Саи Баба: «Начните день с любви, наполните день любовью, завершите день любовью — такова дорога к Богу».",
        "Эти дни дают: глубокое расслабление нервной системе, ощущение свободы, контакт с внутренней тишиной.",
        "Путешествие в Индию — это возвращение к себе через традиции, дисциплину, природу и пространство силы. Мы едем небольшой группой, бережно сопровождая процесс."
      ]
    },
    {
      id: 6,
      date: "10-16 декабря",
      title: "Сияющий детокс",
      desc: "Очищение, перезагрузка и обучение безопасному выходу.",
      bookingUrl: "https://t.me/FarkhodAkh",
      plan: ["-"],
      recurringKey: "detox"
    },
    {
      id: 7,
      date: "16-22 февраля",
      title: "Сияющий детокс",
      desc: "Очищение, перезагрузка и обучение безопасному выходу.",
      bookingUrl: "https://t.me/FarkhodAkh",
      plan: ["-"],
      recurringKey: "detox"
    },
  ], []);

  useEffect(() => {
    if (events.length > 0) {
      setSelectedEvent(events[0]);
    }
  }, [events]);

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
                  {event.recurringKey && (
                    <p className="hidden text-xs font-semibold text-[hsl(var(--accent-color))] sm:block">
                      {RECURRING_INVITE}
                    </p>
                  )}
                </div>
                {event.recurringKey ? (
                  <a
                    href={`#regular-${event.recurringKey}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent-color))] transition hover:translate-x-1 sm:mt-4 sm:text-sm"
                  >
                    Подробнее
                  </a>
                ) : (
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent-color))] transition group-hover:translate-x-1 sm:mt-4 sm:text-sm">
                    Подробнее
                  </span>
                )}
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
              href={selectedEvent.bookingUrl || TELEGRAM_FALLBACK}
              target="_blank"
              rel="noreferrer"
            >
              Записаться в Telegram
            </a>
          </div>
          <div className={`mt-4 grid gap-4 ${hasPlanItems(selectedEvent.plan) ? 'md:grid-cols-[1fr_1.2fr]' : ''} md:items-start`}>
            <div className="space-y-3 text-muted-foreground">
              <p>{selectedEvent.desc}</p>
              <p>{selectedEvent.about}</p>
              {selectedEvent.recurringKey && (
                <a
                  href={`#regular-${selectedEvent.recurringKey}`}
                  className="inline-flex items-center rounded-full border border-[hsl(var(--accent-color))]/40 bg-white px-4 py-2 text-xs font-semibold text-[hsl(var(--accent-color))] transition hover:border-[hsl(var(--accent-color))]"
                >
                  Перейти к мероприятию
                </a>
              )}
            </div>
            {hasPlanItems(selectedEvent.plan) && (
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
            )}
          </div>
        </div>
      )}
      <section id="regular-programs" className="-mx-6 mt-10 scroll-mt-28 space-y-4 md:mx-0 md:scroll-mt-36">
        <div className="space-y-2 px-6 md:px-0">
          <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Регулярные программы</h3>
          <p className="text-muted-foreground">Здесь собрана полная информация по событиям, которые проходят на регулярной основе</p>
        </div>
        <div className="space-y-5 md:space-y-6">
          {recurringPrograms.map((program) => (
            <article
              key={program.key}
              id={`regular-${program.key}`}
              className="overflow-hidden border-y border-white/70 bg-white shadow-[0_12px_30px_rgba(15,30,25,0.08)] sm:rounded-3xl sm:border md:flex"
            >
              <div className="relative h-56 md:h-auto md:min-h-full md:w-[340px] md:shrink-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 px-4 py-4 sm:p-5 md:p-6">
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold text-foreground">{program.title}</h4>
                  <p className="text-sm text-muted-foreground">{program.location}</p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{program.description}</p>
                  <p>{program.guide}</p>
                </div>
                {hasPlanItems(program.plan) && (
                  <div>
                    <p className='mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent-color))]'>Что вас ждет</p>
                    <ul className='space-y-2 text-foreground'>
                      {program.plan.map((item, index) => (
                        <li key={index} className="rounded-xl bg-secondary/50 px-4 py-3 text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className='mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent-color))]'>Для кого</p>
                  <ul className='space-y-2 text-foreground'>
                    {program.forWhom.map((item, index) => (
                      <li key={index} className="rounded-xl bg-secondary/50 px-4 py-3 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-semibold text-foreground">{program.booking}</p>
                <a
                  href={program.bookingUrl || TELEGRAM_FALLBACK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent-color))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(214,99,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-color))]/90"
                >
                  Записаться в Telegram
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default EventAnons;
