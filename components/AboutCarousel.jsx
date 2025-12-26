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
    if (!api) return
    api.scrollNext(false)
    const nextIndex = (tabData[selectedTab] + 1) % tabs.length
    updateTabBySlideIndex(nextIndex)
  }

  const handlePrev = () => {
    if (!api) return
    api.scrollPrev(false)
    const prevIndex = (tabData[selectedTab] - 1 + tabs.length) % tabs.length
    updateTabBySlideIndex(prevIndex)
  }

  useEffect(() => {
    if (api) {
      const slideIndex = tabData[selectedTab]
      api.scrollTo(slideIndex, false, 'smooth')
    }
  }, [api, selectedTab, tabData])

  useEffect(() => {
    if (!api) return
    const syncTabWithSlide = () => {
      const index = api.selectedScrollSnap()
      updateTabBySlideIndex(index)
    }
    api.on("select", syncTabWithSlide)
    return () => {
      api.off("select", syncTabWithSlide)
    }
  }, [api, tabData])

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
      images: ["/images/kitchen1.jpg", "/images/kitchen2.jpg", "/images/kitchen3.jpg"],
    }
  ]

  return (
    <div className="space-y-6">
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className="space-y-2">
          <p className="eyebrow">Пространство центра</p>
          <h3 className="text-2xl font-semibold text-foreground">Номера, зал, баня и кухня</h3>
          <p className="text-muted-foreground">Загляните в ключевые зоны центра: теплые спальни, зал с камином, просторную баню и кухню с авторской керамикой.</p>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2 md:w-auto md:flex-nowrap md:justify-end">
          {tabs.map((tab) => (
            <button
              key={tab}
              aria-pressed={selectedTab === tab}
              className={clsx(
                "min-w-[130px] whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition md:min-w-[120px]",
                selectedTab === tab
                  ? "border-[hsl(var(--accent-color))] bg-[hsl(var(--accent-color))] text-white shadow-[0_6px_24px_rgba(214,99,50,0.25)]"
                  : "border-white/70 bg-white/70 text-foreground hover:bg-white"
              )}
              onClick={() => setSelectedTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className="px-1">
          {
            slides.map(slide => (
              <CarouselItem key={slide.id} className="space-y-4">
                <div className='rounded-2xl border border-white/70 bg-secondary/60 p-5 text-muted-foreground shadow-sm'>
                  {slide.text}
                </div>
                <div className='grid gap-4 lg:grid-cols-3'>
                  {slide.images.map((img, index) => (
                    <div key={index} className='overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm'>
                      <Image className='h-full w-full object-cover' src={img} width={488} height={326} alt=''  />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
      <div className="flex justify-end gap-3">
        <Button size="icon" variant="outline" onClick={handlePrev}>
          <ChevronLeft />
        </Button>
        <Button size="icon" variant="outline" onClick={handleNext}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default AboutCarousel;
