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
      date: "21-23 ноября",
      title: "Выездной Женский Банный ретрит",
      desc: "Ты - Женщина. И тебе нужна огромная порция Заботы, есть потребность в смене обстановки, запрос на умиротворение или перезагрузку. Ждём тебя.",
      about: "Размещение в двухместных номерах со всеми удобствами. Питание трехразовое вегетарианское из фермерских продуктов.",
      plan: ["Настольная игра «Ледокол», МАК-карты. Будем знакомиться, создавать общее пространство на выходные и, конечно же, узнавать себя.",
        "Йога",
        "МК по вязанию крючком «Интерьерная корзинка»",
        "МК по восковым свечам.  Все материалы предоставляются.",
        "Баня!!! Не просто баня, а Женская Баня!!! Вкусный пар, заботливая Пармастерица в сопровождении виброзвукотерапии бубном, чашами и прочими звуками,  травушки, чаюшки",
        "Звуковая Медитация",
        "Пешая прогулка с дыхательными практиками",
        "МК по деревенской магии",
      ]
    },
    {
      id: 2,
      date: "28-30 ноября",
      title: "Выезд-ретрит «Точки опоры»",
      desc: "Время ноября располагает, чтобы остановиться, сделать паузу, углубиться в себя и в свою практику",
      about: "Уровень начальный. В мероприятии может принять участие каждый, достаточно лишь наличие вашего интереса.",
      plan: ["Аштанга йога",
        "Медитация випассана",
        "Соматика",
        "Дизайн человека",
        "Культура движения",
        "Йога нидра",
        "Баня",
      ]
    },
    {
      id: 3,
      date: "31 декабря",
      title: "День рождение",
      desc: "у нашего уютного ретрит центра «Шавасаны» день рождения. Нам исполняется один год! Мы решили встретить его вместе с вами, особенным образом. Без суеты, без переедания, но с Душой.",
      about: "Если вы хотите провести этот день по-другому, вам, возможно, откликнется наш формат:",
      plan: ["Вместо традиционного застолья вас ждет вкусная, лёгкая и полезная еда.",
        "Утром и днём занятия йогой, медитации и пространство для себя",
        "Днём у нас будут тёплые творческие занятия. Приготовим зелёные вафли, сделаем духи с ароматом намерения и полепим из глины.",
        "А вечером наша волшебная живая традиция — баня.",
      ]
    },
    {
      id: 4,
      date: "4–10 января",
      title: "ЗИМНИЕ КАНИКУЛЫ И КАК НАЙТИ СВОЮ КАПСУЛУ ВРЕМЕНИ",
      desc: "Для подростков от 10-16 лет которым нужно больше, чем просто “развлечься на каникулах”. Тут тебя никто не будет учить “жить правильно”",
      about: "Забудь про скуку и «мам, мне нечем заняться». Мы зарядим эти каникулы по полной! Неделя без телефонов (ну почти), неделя, где никто не оценивает, где можно быть собой, танцевать, ошибаться, и находить настоящих себя и друзей.",
      plan: ["ЗАРЯД СУПЕРГЕРОЯ. Утренние зарядки, которые бодрят лучше любого будильника.",
        "БРЕЙК-ДАНС: ТАНЕЦ СВОБОДЫ. Не просто движения, а язык тела. ",
        "МЕНТАЛЬНАЯ МАТЕМАТИКА: СУПЕРСПОСОБНОСТЬ ДЛЯ МОЗГА. Считать быстрее калькулятора? Легко!",
        "ВИДЕОБЛОГИНГ С ИИ: СНИМИ СВОЙ ХИТ! От идеи до монтажа.",
        "ПРИКЛЮЧЕНИЯ НА ВОЗДУХЕ. Снежные баталии, командные игры, прогулки по зимнему лесу и смех",
        "ЕДА КАК ДОМА (ТОЛЬКО ЛУЧШЕ). Мы будем готовить вместе, используя наши вкусные фермерские продукты."
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