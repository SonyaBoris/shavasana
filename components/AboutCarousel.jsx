"use client"

import { useState, useEffect, useMemo } from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import clsx from 'clsx'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
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

  const slides = [
    {
      id: 1,
      text: "Для глубокого и качественного сна мы приобрели самые лучшие и удобные матрасы, подушки и одеяла. Постельное белье я своими руками прошила с молитвой символом (руной Ингуз ) изобилия и плодородия, чтобы здесь ваше тело максимально насыщалось благостными энергиями. Белоснежное постельное белье окутает негой крепким сном. Картины в комнаты специально по заказу писались известной самарской художницей Зоенькой Древинг. В них такой глубокий смысл и красота, столько энергии и любви. В каждом номере есть свой санузел!",
      images: ["/images/room1.jpg", "/images/room2.jpg", "/images/room3.jpg"],
    },
    {
      id: 2,
      text: "У нас есть прекрасный зал для занятий и медитаций с чудесным освещением ️его площадь 80 кв.м. В зале есть настоящий камин на дровах и теплый пол. Есть все необходимое оборудование для занятий.",
      images: ["/images/hall1.jpg", "/images/hall2.jpg", "/images/hall3.jpg"],
    },
    {
      id: 3,
      text: "У нас прекрасный банный комплекс, печка на дровах, большая парная и комната отдыха. У нас у единственных в самарской области есть в парной кушетка для парения. Здесь все со знаком эко, а самое приятное, что из бани можно выбегать купаться в снегу!",
      images: ["/images/bath1.jpg", "/images/bath2.jpg", "/images/bath3.jpg"],
    },
    {
      id: 4,
      text: "Кухня-столовая очень большая. Тут очень уютно. Здесь можно проводить лекции, мастер классы, сидя на огромном диване. Можно просто подключиться к проводному интернету и работать на хорошей скорости. Здесь много музыкальных инструментов: пианино, укулеле, барабан, глюкофон, поющие чаши.",
      images: ["/images/bath1.jpg", "/images/bath2.jpg", "/images/bath1.jpg"],
    }
  ]

  return (
    <div>
      <div className='flex justify-between'>
        <div className="flex md:gap-8 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}>
              <h2 className={clsx('md:border-b-[4px] border-b-[2px] transition md:text-4xl text-xl',
                selectedTab === tab ? 'border-accent' : 'text-black border-white')}>{tab}</h2>
            </button>
          ))}
        </div>
        <div className="lg:flex gap-3 hidden">
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
          {
            slides.map(slide => (
              <CarouselItem key={slide.id}>
                <div className='my-4'>
                  {slide.text}
                </div>
                <div className='flex gap-4 lg:flex-row flex-col'>
                  {slide.images.map((img, index) => (
                    <Image key={index} className='rounded flex-1 object-cover lg:w-1/4 w-full' src={img} width={488} height={326} alt='' loading="lazy" />
                  ))}
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default AboutCarousel;