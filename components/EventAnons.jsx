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
      date: "8-10 августа",
      title: "Выездной ретрит «Сила Рода» на берегу Волги! ",
      desc: "Погрузитесь в атмосферу гармонии и единения с природой, где каждый момент будет наполнен волшебством и глубокими переживаниями",
      about: "Не забудьте взять с собой обережные платья, чтобы впитать дух нашего ретрита и соединиться с древними традициями!",
      plan: ["Утренние и вечерние медитации и сонастройки с Ириной Владимировной Ивановой — откройте свое сердце и настройтесь на энергию Рода",
        "Хороводы с мастером русских народных танцев — почувствуйте силу традиций и радость движения!",
        "У нас будет профессиональная фотосессия с потрясающим фотографом на фоне природы",
        "Теплые посиделки у костра",
        "Йога на рассвете",
        "Прогулки на сапах и велосипедах",
        "Расслабляющая баня",
        "И конечно же наше коронное вкуснейшее живое питание со своего огорода",
      ]
    },
    {
      id: 2,
      date: "15-17 августа",
      title: "Йога-тур",
      desc: "Приглашаем вас провести выходные на берегу Волги в Самарской области. Это уникальная возможность отдохнуть от городской суеты и сменить обстановку.",
      about: "В стоимость включены:  Проживание в комнатах с двумя односпальными кроватями и уборной, Трехразовое питание, Практики йогой, Мастер-класс по керамике, Трансфер до места и обратно",
      plan: ["Вегетарианское трехразовое питание — живая разнообразная пища.",
        "Свежий воздух, природа и тишина",
        "Занятия йогой",
        "Мастер класс по керамике",
        "По желанию выезд в спа отель Васильевский",
      ]
    },
    {
      id: 3,
      date: "18-24 августа",
      title: "Детокс тур УСЛОВНОЕ ГОЛОДАНИЕ",
      desc: "Чем хороша эта методика-она очень эффективная, начинают уходить многие хронические заболевания и самое главное что участники практически не испытывают чувство голода",
      about: "Для тех кто хочет доказательного подхода будет диагностика состояния здоровья на входе и выходе! Первое с чего мы ее начнем- это будет анализ крови на гемоскане ( это микроскоп, который делает сильное увеличение). Доктор увеличит вашу капельку крови до таких размеров, где вы собственными глазами на экране увидите свои эритроциты, фагоциты и многое другое интересное!",
      plan: ["Будут оздоровительные зарядки, дыхательные практики, медитации для работы с подсознанием, лекции о здоровом образе жизни, посиделки у костра с песнями под гитару,  активные водные виды спорта, ежедневные банные детокс процедуры и многое другое",
        "Мы будем вести ежедневное видео сопровождение, будем контролировать все изменения у каждого участника, каждый вечер будем выпускать видеоролик о прошедшем дне",
        "Каждому участнику будет в подарок ежедневный массаж ног",
        "Одним словом голод участникам чувствовать будет некогда!",
      ]
    },
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