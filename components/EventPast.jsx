"use client"

import React, { useCallback, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const EventPast = () => {

  const MemoizedCarouselItem = React.memo(({ img }) => (
    <CarouselItem key={img.id} className="basis-1/3">
      <Image src={img.link} width={400} height={600} alt='img' />
    </CarouselItem>
  ));

  const [api, setApi] = useState(undefined)

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

  const images = [
    { id: 1, link: "/images/ny1.jpg" },
    { id: 2, link: "/images/ny2.jpg" },
    { id: 3, link: "/images/ny3.jpg" },
    { id: 4, link: "/images/ny4.jpg" },
    { id: 5, link: "/images/ny5.jpg" },
    { id: 6, link: "/images/ny6.jpg" },
    { id: 7, link: "/images/ny7.jpg" },
    { id: 8, link: "/images/ny8.jpg" },
    { id: 9, link: "/images/ny9.jpg" }
  ]

  return (
    <>
      <div>
        <h2>Новогодняя елка</h2>
        <p className='mb-5'>В нашем центре прошла незабываемая новогодняя елка для детей!
          Ребята погрузились в атмосферу волшебства, участвуя в увлекательных конкурсах и играх.
          Дед Мороз и Снегурочка порадовали всех веселыми танцами и подарками.
          Каждый ребенок смог сделать фото на память с любимыми сказочными персонажами.
          Мы благодарим всех участников за чудесные моменты и ждем вас на наших следующих мероприятиях!</p>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {images.map(img => (
              <MemoizedCarouselItem key={img.id} img={img} />
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
      </div>
    </>
  );
}

