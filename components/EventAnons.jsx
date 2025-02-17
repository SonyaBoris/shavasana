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
      date: "18-19 февраля",
      title: "Концентрация",
      desc: "Вас ждет глубокое путешествие внутрь себя под руководством опытной монахини Махешвари Гири",
      about: "Концентрация лежит в основе любого духовного пути и материального благополучия! На ритрите мы освоим базовые методы концентрации, переданные знаменитым духовным мастером современности - Гуру Свами Вишнудевананда Гири. Разберем теоретическую базу применяемого метода, изучая священные писания. Будем практиковать, трансформируя полученные знания в свой личный опыт.",
      plan: ["Утренняя йога и практики работы с энергией", "Тонкая и грубая концентрация", "Созерцательная ходьба с санкальпой Сон", "Мауна (полное молчание) ", "Призывания божественных энергий", " Созерцание природы и тишины"]
    },
    {
      id: 3,
      date: "21-23 февраля",
      title: "Темный Ретрит",
      desc: "Это идеальная возможность отключиться от внешнего мира, погрузиться в состояние полной тишины, качественно отдохнуть и перезагрузиться.",
      about: "Время для глубокого отдыха, восстановления и открытия новых горизонтов",
      plan: ["Здоровое трехразовое питание — живая разнообразная пища, которая добавит красок в это увлекательное путешествие", "Свежий воздух, природа и тишина", "Проживание вслепую — перемещение по дому и за его пределами с закрытыми глазами, что позволит вам отключиться от визуальных стимулов и начать чувствовать мир по-новому", " Профессиональные наставники, которые помогут вам пройти через все этапы ретрита, обеспечив безопасность и поддержку в этом путешествии."]
    },
    {
      id: 4,
      date: "25 февраля - 2 марта",
      title: "Чистка печени и почек+ пошив обережного платья",
      desc: "Такого полезного и приятного отдыха вы еще не пробовали! А вы знаете , что в этот период как раз самое благоприятное время для очищения печени?",
      about: "За эти 5 дней детокса каждая участница успеет сшить себе обережное платье из натуральной ткани по своим мерам",
      plan: ["Медитациями убираем негатив из нашей ауры", "Оздоровительными занятиями расшевеливаем свои суставы, улучшаем кровообращение и лимфоток", "Вкусным и полезным питанием наполняем свой организм необходимыми нутриентами", "Много активно двигаемся на свежем воздухе", "Идем в баньку"]
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