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
      date: "14-18 июля",
      title: "Ретрит «Тишина»: Погружение в гармонию и покой",
      desc: "Приглашаем вас на уникальный ретрит «Тишина», где каждый момент будет направлен на восстановление внутреннего баланса и глубокую связь с собой и природой.",
      about: "Погрузитесь в практику медитации, которая поможет вам очистить разум и открыть сердце. Наслаждайтесь вкусной и полезной вегетарианской кухней, приготовленной из свежих овощей и фруктов, собранных прямо с нашего огорода. Откройте для себя красоту окружающего мира! Прогулки по живописным дорожкам, медитации на свежем воздухе и просто время, проведенное на природе, помогут вам восстановить связь с Землей и ощутить её невероятную силу.",
      plan: ["7 часов медитаций в день",
        "Здоровая вегетарианская еда с огорода",
        "Соединение с природой",
        "Баня для расслабления",
      ]
    },
    {
      id: 2,
      date: "18-20 июля",
      title: "Даосские секреты Любви",
      desc: "Будем учится запускать энерго Волну в теле , расскажу для чего это нужно , как пользоваться практиками в обыденной жизни. Будет работа в парах ( если есть партнер можно прийти вместе , если нет то сформируются пары с теми кто придет )  Работа с женщиной или мужчиной это не принципиально. ",
      about: "Этот опыт усилит ваши оргазмы , изменит сексуальную жизнь , вы научитесь испытывать оргазм всего тела , насыщать органы тела гормональным коктейлем счастья ! Во время практики в мышцах тела происходит высвобождение от блоков и зажимов, в кровь выбрасывается омолаживающий гормональный коктейль, организм освобождается от стресса и получает опыт для управления эмоциями и удержания этих состояний.",
      plan: ["Парные телесные практики",
        "Утренняя медитация",
        "Баня с парением",
        "Катание на Сапах ( по желанию)",
        "Вкусная полезная еда и Мастер класс ( будем печь ягодный пирог )",
      ]
    }
  ], []);

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent className="px-2">
          {events.map(event => (
            <CarouselItem
              key={event.id}
              className={`lg:basis-1/4 md:basis-1/3 basis-1/2 mx-2 p-4 border rounded cursor-pointer flex flex-col justify-between ${selectedEvent?.id === event.id ? 'border-[var(--accent-color)]' : 'border-gray-300'}`}
              onClick={() => handleSelectEvent(event)}
            >
              <h2 className='md:text-2xl text-base'>{event.title}</h2>
              <span>{event.date}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-3 my-5">
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
        <div>
          <h2>{selectedEvent.title}</h2>
          <p className='font-bold mb-5'>{selectedEvent.date}</p>
          <p className='mb-5'>{selectedEvent.desc}</p>
          <p className='mb-5'>{selectedEvent.about}</p>
          <p className='text-[var(--accent-color)] font-bold mb-5'>Что будет?</p>
          <ul className='mb-10'>
            {selectedEvent.plan.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
          <a className='bg-[var(--accent-color)] text-white p-4 rounded-2xl' href="tel:+79879488117">Записаться</a>
        </div>
      )}
    </>
  );
}

export default EventAnons;