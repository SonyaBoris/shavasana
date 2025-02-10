import Image from "next/image";
import Map from "./Map";
import { CarFront, MapPin, Phone, Sailboat, TrainFront } from 'lucide-react';

export const Address = () => {
  return (
    <section id="adress" className="flex gap-6">
      <Image className="hidden lg:block" src="/images/center.jpg" width={600} height={901.88} alt="Фото дома" />
      <div>
        <h2>Адрес</h2>
        <div className="flex gap-5 mb-10">
          <div>
            <MapPin className="text-[var(--accent-color)]" />
          </div>
          <p>Самарская область, Безенчукский район, село Владимировка, Набережная 59</p>
        </div>
        <p className="mb-3">Из Самары можно добраться:</p>
        <ul className="mb-10">
          <li className="flex gap-5 mb-3">
            <Sailboat className="text-[var(--accent-color)]" />
            по Волге 60км
          </li>
          <li className="flex gap-5 mb-3">
            <CarFront className="text-[var(--accent-color)]" />
            На авто 110 км
          </li>
          <li className="flex gap-5 mb-3">
            <div>
              <TrainFront className="text-[var(--accent-color)]" />
            </div>
            На электричке до Безенчука 1 час и далее на такси 20-25 мин
          </li>
        </ul>
        <Map />
        <h2>Контакты</h2>
        <a href="tel:+79879488117" className="flex gap-5 mb-3">
          <Phone className="text-[var(--accent-color)]" />
          +7(987)948-81-17
        </a>
        <a href="https://t.me/retritcentre" className="flex gap-5 mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.985 15.408L15.227 19.094C16.427 20.459 17.028 21.142 17.657 20.975C18.285 20.809 18.501 19.911 18.932 18.114L21.322 8.14604C21.987 5.37804 22.319 3.99504 21.581 3.31204C20.843 2.62904 19.564 3.13704 17.006 4.15204L5.13998 8.86504C3.09398 9.67804 2.07099 10.084 2.00599 10.782C1.99833 10.8532 1.99833 10.9249 2.00599 10.996C2.06899 11.695 3.08998 12.104 5.13398 12.923C6.05898 13.294 6.52199 13.48 6.85399 13.835C6.89132 13.875 6.92732 13.9164 6.96199 13.959C7.26799 14.339 7.39799 14.839 7.65899 15.835L8.14798 17.702C8.40098 18.672 8.52799 19.158 8.86099 19.224C9.19399 19.29 9.48299 18.888 10.062 18.083L11.985 15.408ZM11.985 15.408L11.668 15.078C11.306 14.7 11.125 14.512 11.125 14.278C11.125 14.044 11.305 13.855 11.668 13.478L15.241 9.75404" stroke="#CC3D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Наш телеграм канал
        </a>
      </div>
    </section >
  );
}