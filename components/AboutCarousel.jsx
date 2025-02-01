"use client"

import { useState, useEffect, useMemo } from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import clsx from 'clsx'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'

const AboutCarousel = () => {
  const [api, setApi] = useState(undefined)
  const [selectedTab, setSelectedTab] = useState('Номера')

  const tabData = useMemo(() => ({
    Номера: 0,
    Зал: 1,
    Баня: 2,
    Кухня: 3,
  }), [])

  const tabs = useMemo(() => Object.keys(tabData), [tabData])

  const updateTabBySlideIndex = (index) => {
    const tab = Object.keys(tabData).find((key) => tabData[key] === index)
    if (tab) setSelectedTab(tab)
  }

  const handleNext = () => {
    if (api) {
      api.scrollNext(false)
      const nextIndex = (tabData[selectedTab] + 1) % tabs.length
      updateTabBySlideIndex(nextIndex)
    }
  }

  const handlePrev = () => {
    if (api) {
      api.scrollPrev(false)
      const prevIndex = (tabData[selectedTab] - 1 + tabs.length) % tabs.length
      updateTabBySlideIndex(prevIndex)
    }
  }

  useEffect(() => {
    if (api) {
      const slideIndex = tabData[selectedTab]
      api.scrollTo(slideIndex, false, 'smooth')
    }
  }, [api, selectedTab, tabData])

  return (
    <div>
      <div className='flex justify-between'>
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}>
              <h2 className={clsx('border-b-[4px] transition',
                selectedTab === tab ? 'border-accent' : 'text-black border-white')}>{tab}</h2>
            </button>
          ))}
        </div>
        <div className="flex gap-3">
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
      </div>

      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <div>
              <div className='my-4'>Для глубокого и качественного сна мы приобрели самые лучшие и удобные матрасы, подушки и одеяла.
                <br /> Постельное белье я своими руками прошила с молитвой символом (руной Ингуз ) изобилия и плодородия
                чтобы здесь ваше тело максимально насыщалось благостными энергиями.
                <br />Лоскутные покрывала на кровати сделала мастерица из Подмосковья Ольга с любовью и радостью.
                Белоснежное постельное белье окутает негой крепким сном.
                <br />Картины в комнаты специально по заказу писались известной самарской художницей Зоенькой Древинг.
                <br />В них такой глубокий смысл и красота, столько энергии и любви
                <br /> В каждом номере есть свой санузел!</div>
              <div className='flex gap-4'>
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/room1.jpg" width={488} height={326} alt='Фото номера' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/room2.jpg" width={488} height={326} alt='Фото номера' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/room3.jpg" width={488} height={326} alt='Фото номера' />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <div className='my-4'>У нас есть прекрасный зал для занятий и медитаций с чудесным освещением ️его площадь 80 кв.м.
                <br />В зале есть настоящий камин на дровах и теплый пол.
                <br />Есть все необходимое оборудование для занятий.</div>
              <div className='flex gap-4'>
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/hall1.jpg" width={488} height={326} alt='Фото зала' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/hall2.jpg" width={488} height={326} alt='Фото зала' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/hall3.jpg" width={488} height={326} alt='Фото зала' />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <div className='my-4'>У нас прекрасный банный комплекс, печка на дровах, большая парная и комната отдыха.
                <br />У нас у единственных в самарской области есть в парной кушетка для парения.
                <br />Здесь все со знаком эко, а самое приятное, что из бани можно выбегать купаться в снегу!</div>
              <div className='flex gap-4'>
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/bath1.jpg" width={550} height={300} alt='Фото бани' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/bath2.jpg" width={550} height={300} alt='Фото бани' />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <div className='my-4'>Кухня-столовая очень большая.
                <br /> Тут очень уютно. Здесь можно проводить лекции, мастер классы, сидя на огромном диване.
                <br />Можно просто подключиться к проводному интернету и работать на хорошей скорости.
                <br />Здесь много музыкальных инструментов: пианино, укулеле, барабан, глюкофон, поющие чаши.</div>
              <div className='flex gap-4'>
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/kitchen1.jpg" width={488} height={326} alt='Кухня' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/kitchen2.jpg" width={488} height={326} alt='Кухня' />
                <Image className='rounded flex-1 object-cover w-1/4' src="/images/kitchen3.jpg" width={488} height={326} alt='Кухня' />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default AboutCarousel;