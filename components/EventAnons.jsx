"use client"

import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'

const EventAnons = () => {
  const [api, setApi] = useState(undefined)

  const handleNext = () => {
    if (api) {
      api.scrollNext(false)
    }
  }

  const handlePrev = () => {
    if (api) {
      api.scrollPrev(false)
    }
  }
  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Image src="/images/event.png" width={400} height={100} alt='img' />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src="/images/event.png" width={400} height={100} alt='img' />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src="/images/event.png" width={400} height={100} alt='img' />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src="/images/event.png" width={400} height={100} alt='img' />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src="/images/event.png" width={400} height={100} alt='img' />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
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
      <div>
        <h2>24-26 января</h2>
        <span>Выездной детокс</span>
        <p>Что будем делать?
          <br />Проведем чистку кишечника и лимфы с помощью трав и живого питания
          <br />Пища будет легкая и натуральная!
          <br /> Будут активные тренировки, релакс тренировки и медитации!
          <br /> Будут лекции по живому питанию и мастер-классы по приготовлению полезной еды!
          <br />Будем гулять вдали от суеты в тихих и красивых местах
          <br /> Обязательно сходим в баньку!
        </p>
      </div>
    </>
  );
}

export default EventAnons;