import Image from "next/image";
import Map from "./Map";
import { CarFront, MapPin, Phone, Sailboat, TrainFront } from 'lucide-react';

export const Address = () => {
  return (
    <section id="address" className="section-shell grid gap-8 scroll-mt-28 md:scroll-mt-36 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-sm">
        <Image className="h-full w-full object-cover lg:block" src="/images/center2.jpg" width={600} height={902} alt="Дом ретрит-центра" />
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">Как добраться</p>
          <h2>Самарская область, село Владимировка</h2>
          <p className="text-muted-foreground">Мы на берегу Волги: тихая набережная, свежий воздух и быстрый путь из Самары.</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-[0_6px_20px_rgba(15,30,25,0.05)]">
            <div className="w-6 h-6">
              <MapPin className="mt-1 text-[hsl(var(--accent-color))]" />
            </div>

            <p>Самарская область, Безенчукский район, село Владимировка, Набережная 59</p>
          </div>
          <div className="grid gap-2 rounded-2xl bg-secondary/60 p-4 text-sm font-semibold text-foreground shadow-[0_6px_20px_rgba(15,30,25,0.05)]">
            <div className="flex items-center gap-3" >
              <div className="w-6 h-6">
                <Sailboat className="text-[hsl(var(--accent-color))]" />
                </div>
              По Волге — 60 км
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6">
                <CarFront className="text-[hsl(var(--accent-color))]" />
              </div>
              На авто — 110 км
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6">
                <TrainFront className="mt-0.5 text-[hsl(var(--accent-color))]" />
              </div>
              <span>Электричка до Безенчука — 1 час, далее такси 20–25 минут</span>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm">
          <Map />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Контакты</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+79879488117"
              className="flex items-center gap-2 rounded-full bg-[hsl(var(--accent-color))] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(214,99,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-color))]/90"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <span className="hidden sm:inline">+7 (987) 948-81-17</span>
            </a>
            <a
              href="https://t.me/retritcentre"
              className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-3 text-sm font-semibold text-foreground shadow-[0_8px_24px_rgba(15,30,25,0.05)] transition hover:-translate-y-0.5 hover:border-[hsl(var(--accent-color))]"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <svg className="h-5 w-5 text-[hsl(var(--accent-color))]" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.985 15.408L15.227 19.094C16.427 20.459 17.028 21.142 17.657 20.975C18.285 20.809 18.501 19.911 18.932 18.114L21.322 8.14604C21.987 5.37804 22.319 3.99504 21.581 3.31204C20.843 2.62904 19.564 3.13704 17.006 4.15204L5.13998 8.86504C3.09398 9.67804 2.07099 10.084 2.00599 10.782C1.99833 10.8532 1.99833 10.9249 2.00599 10.996C2.06899 11.695 3.08998 12.104 5.13398 12.923C6.05898 13.294 6.52199 13.48 6.85399 13.835C6.89132 13.875 6.92732 13.9164 6.96199 13.959C7.26799 14.339 7.39799 14.839 7.65899 15.835L8.14798 17.702C8.40098 18.672 8.52799 19.158 8.86099 19.224C9.19399 19.29 9.48299 18.888 10.062 18.083L11.985 15.408ZM11.985 15.408L11.668 15.078C11.306 14.7 11.125 14.512 11.125 14.278C11.125 14.044 11.305 13.855 11.668 13.478L15.241 9.75404" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="hidden sm:inline">Наш телеграм</span>
            </a>
          </div>

        </div>
      </div>
    </section >
  );
}
