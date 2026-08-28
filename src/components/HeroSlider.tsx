"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/hero-basketball-farkadona.jpg",
  "/images/hero/hero-basketball-school.jpg",
  "/images/hero/hero-tennis-blue.jpg",
  "/images/hero/hero-football-aerial.jpg",
  "/images/hero/hero-tennis-complex.jpg",
  "/images/hero/hero-football-top.jpg",
] as const;

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-slides" aria-hidden="true">
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={index === activeSlide ? "hero-slide is-active" : "hero-slide"}
        />
      ))}
    </div>
  );
}
