'use client';

import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const handleHomeClick = (event) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="site-container mt-4">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(15,30,25,0.08)] backdrop-blur md:px-6">
          <Link href="/" scroll onClick={handleHomeClick} className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/30 shadow-lg shadow-[#0a1624]/40 transition duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Shavasana Tour"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Ретрит-центр
              </p>
              <p className="text-base font-semibold leading-tight text-foreground">
                Шавасана
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-2 md:gap-4">
            <a className="hidden rounded-full px-3 py-2 text-sm font-semibold text-foreground transition hover:text-[hsl(var(--accent-color))] md:inline-flex" href="#about">
              О нас
            </a>
            <a className="hidden rounded-full px-3 py-2 text-sm font-semibold text-foreground transition hover:text-[hsl(var(--accent-color))] md:inline-flex" href="#events">
              Мероприятия
            </a>
            <a className="hidden rounded-full px-3 py-2 text-sm font-semibold text-foreground transition hover:text-[hsl(var(--accent-color))] md:inline-flex" href="#address">
              Адрес
            </a>
            <Button
              asChild
              className="rounded-full h-11 w-11 md:h-11 md:w-36 bg-[hsl(var(--accent-color))] px-4 font-semibold text-primary-foreground hover:bg-[hsl(var(--accent-color))]/85"
            >
              <a href="tel:+79879488117" className="flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden sm:inline">Позвонить</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
