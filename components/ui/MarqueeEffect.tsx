"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useMediaQuery } from "react-responsive";
export interface MarqueeEffectRef {
  pause: () => void;
  resume: () => void;
  isPaused: () => boolean;
}

const MarqueeEffect = forwardRef<
  MarqueeEffectRef,
  {
    children: React.ReactNode;
    reverse?: boolean;
  }
>(({ children, reverse }, ref) => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const isPausedRef = useRef(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    gsap.from(".marquee", {
      scrollTrigger: {
        trigger: ".marquee",
        start: isMobile ? "top center" : "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    });
    const ctx = gsap.context(() => {
      if (reverse) {
        gsap.set(".marquee-effect-right", { xPercent: -50 });
        tweenRef.current = gsap.to(".marquee-effect-right", {
          xPercent: 0,
          repeat: -1,
          ease: "linear",
          duration: 40,
        });
      } else {
        tweenRef.current = gsap.to(".marquee-effect-left", {
          xPercent: -50,
          repeat: -1,
          ease: "linear",
          duration: 40,
        });
      }
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  useImperativeHandle(ref, () => ({
    pause: () => {
      if (tweenRef.current && !isPausedRef.current) {
        tweenRef.current.pause();
        isPausedRef.current = true;
      }
    },
    resume: () => {
      if (tweenRef.current && isPausedRef.current) {
        tweenRef.current.resume();
        isPausedRef.current = false;
      }
    },
    isPaused: () => isPausedRef.current,
  }));

  const onMouseEnter = () => {
    if (!isPausedRef.current) {
      tweenRef.current?.timeScale(0.2);
    }
  };
  const onMouseLeave = () => {
    if (!isPausedRef.current) {
      tweenRef.current?.timeScale(1);
    }
  };
  return (
    <div
      ref={marqueeRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden marquee  md:block md:w-full mask-x-from-50% overflow-hidden mt-10 "
    >
      {children}
    </div>
  );
});

MarqueeEffect.displayName = "MarqueeEffect";

export default MarqueeEffect;
