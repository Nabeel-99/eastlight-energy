"use client";
import React, { useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

type Card = {
  id: number;
  thumbnail: string;
  heading: string;
  subheading: string;
};

interface CarouselProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
}

export const Carousel = ({ cards, onCardClick }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -330, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 330, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <div className="relative w-full py-10">
      <div
        ref={carouselRef}
        onScroll={checkScrollability}
        className="flex overflow-x-auto gap-4 px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => onCardClick(card)}
            className="relative group w-80 h-[400px] cursor-pointer overflow-hidden rounded-md hover:border-4 hover:border-teal-400/40 transition-all duration-300 hover:drop-shadow-md hover:drop-shadow-teal-400 flex-shrink-0"
          >
            <img
              src={card.thumbnail}
              alt={card.heading}
              className="object-cover h-full w-full transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white">
                {card.heading}
              </h3>
              <p className="text-sm text-gray-200 mt-1">{card.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 px-4 mt-4">
        <button
          type="button"
          className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 disabled:opacity-50 hover:bg-teal-500 transition-colors"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <span className="sr-only">left</span>
          <IconArrowNarrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          type="button"
          className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 disabled:opacity-50 hover:bg-teal-500 transition-colors"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <span className="sr-only">right</span>
          <IconArrowNarrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};
