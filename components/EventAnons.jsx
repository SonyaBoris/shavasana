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
      date: "1-2 марта",
      title: "Пошли все в баню",
      desc: "К нам едут самые лучшие мастера Самары по парению во главе с Воеводой Евгением Макловым!",
      about: "Вы когда нибудь проводили целый день в правильной бане? Пришла пора попробовать. Групповые парения, индивидуальные, спа- процедуры и еще много чего",
      plan: ["МК по философии банной культуры (Евгений Маклов)",
        "(Энзимное питание из натуральных деревенских продуктов",
        "Банные процедуры",
        "Коллективные и индивидуальные парения",
        "Прогулка на природе по набережной (можно взять с собой лыжи)",
        "Пробуждающая йога от хозяйки пространства Юлии Борисовой"]
    },
    {
      id: 2,
      date: "7-9 марта",
      title: "Детокс от хозяйки. Обновление и здоровье",
      desc: "Самый лучший подарок на 8 марта- это обновление и здоровье. Всем участницам будут полезные подарочки",
      about: "По звездам этот март- это перепрошивка вашей судьбы! Самое главное - правильно и экологично это сделать",
      plan: ["Специальные упражнения для красоты и здоровья тела",
        "Медитации обновления энергетики",
        "Запуск программы очищения природными средствами",
        "Специальное омолаживающее детокс меню",
        "Целительная банька",
        "Поход за Волгу на Васильевские острова",
        "Создадим своими руками себе подарки техникой макраме",
        "Научу вас делать полезные хлебцы и выращивать микрозелень"]
    },
    {
      id: 3,
      date: "14 - 16 марта",
      title: "Путь к Блаженству",
      desc: "Дорогие мои сестры!Приглашаю вас на Женский ретрит Путь к Блаженству",
      about: "Чувствую, что в информационном поле растёт потребность в том, чтобы женщины объединялись. Чтобы каждая из нас вернулась к своей сути - приняла свою самость и раскрыла сердце. Чтобы каждая женщина услышала Зов Матери Земли и взрастила в себе мощь.",
      plan: ["На женских кругах женщины соединяются с собой",
        "Встретимся друг с другом",
        "Раскроем природную сексуальность",
        "Обретем внутреннюю гармонию на ПУТИ К БЛАЖЕНСТВУ"]
    },
    {
      id: 4,
      date: "21-23 марта",
      title: "Моё первое предназначение",
      desc: "С точки зрения цифровой психологии есть мнение о том, что рождаясь, ребёнок приобретает маршрутную карту своей жизни, раскрывая свою звезду - 5 предназначений! ",
      about: "Узнаете какие способности и таланты вы используете в своей жизни, а какие еще нет. Познакомитесь с истинными потребностями и желаниями своего Внутреннего Ребенка (творческой жизненной силы). Научитесь экологично и эффективно удовлетворять эти потребности и желания. Освободитесь от тяжелых чувств, которые подавил в себе Внутренний Ребёнок. Ощутите свободу и легкость своей жизни ",
      plan: ["Разбор первого предназначения (способности и таланты)",
        "Системные расстановки для диагностики и высвобождения жизненной силы",
        "Перезагрузка с помощью тибетских чаш",
        "Работа с телом через движение"]
    }, {
      id: 5,
      date: "28-30 марта",
      title: "Время ТОЛЬКО ДЛЯ СЕБЯ!",
      desc: "ВАЖНО: Все время без телефонов! Они сдаются по приезду",
      about: "Милые дамы! В потрясающе красивом месте - я проведу для вас традиционный женский выезд, посвященный только вам и развитию чувствительности и любви к себе",
      plan: ["Йога",
        "Ци-гун",
        "Телесные практики",
        "Игра «Лила» и расстановки по Тальпису (на выбор)",
        "Голосение (через мантры и звуки чакр)",
        "Крепкий сон и вкусная здоровая еда из местных деревенских продуктов",
        "Женское поле единомышленниц и прогулки на свежем воздухе",
        "Банька и мягкое общее парение от волшебного пар-мастера (по желанию можно попариться индивидуально)",
        "Тайный даритель"]
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