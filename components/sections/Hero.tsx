"use client";

import Link from "next/link";
import { Button } from "../ui/stateful-button";
import { ShineBorder } from "../ui/shine-border";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const swiperRef = useRef<any>(null);

  useGSAP(() => {
    // First slide animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 70%",
      },
    });
    tl.from(".hero-img", {
      scale: 1.2,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    })
      .from(
        ".shine-border",
        {
          filter: "blur(10px)",
          opacity: 0,
          y: -20,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".hero-title",
        {
          y: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".hero-desc",
        {
          y: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.5"
      )
      .from(
        ".cta-btns",
        {
          y: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.5"
      );
  }, []);

  const animateSlide2 = () => {
    const tl2 = gsap.timeline();
    tl2
      .from(".calc-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".calc-heading",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".calc-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.3"
      )
      .from(
        ".calc-button",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".calc-image",
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<-0.5"
      );
  };

  const animateSlide3 = () => {
    const tl3 = gsap.timeline();
    tl3
      .from(".hero-img-three", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })
      .from(
        ".office-badge",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.3"
      )
      .from(
        ".office-title",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".office-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".office-btns",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.2"
      );
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col gap-6 text-white rounded-b-3xl w-full overflow-hidden"
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => {
          if (swiper.realIndex === 1) {
            animateSlide2();
          } else if (swiper.realIndex === 2) {
            animateSlide3();
          }
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-yellow-400",
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full min-h-[600px] lg:min-h-[700px] h-[600px] lg:h-[700px]">
            <div className="absolute overflow-hidden inset-0 w-full h-full rounded-b-3xl shadow shadow-cyan-500/10 z-0">
              <img
                src={"/herobg.jpeg"}
                alt=""
                loading="eager"
                className="w-full h-full hero-img object-cover rounded-b-3xl object-top"
              />
            </div>
            <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-linear-to-b from-black/60 via-black/80 to-black/70 z-10" />

            <div className="relative flex flex-col gap-2 lg:items-center w-full z-30 pt-32 lg:pt-40 pb-20 px-8 lg:px-14 xl:px-20 2xl:container 2xl:mx-auto">
              <div className="flex justify-center">
                <h2 className="text-base relative shine-border px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
                  <ShineBorder
                    duration={30}
                    shineColor={["#2DD4BF", "#DC2626"]}
                  />
                  SUSTAINABLE ENERGY SOLUTIONS
                </h2>
              </div>

              <p className="hero-title text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-30 bg-linear-to-tl from-red-500 from-30% to-teal-400 to-70% bg-clip-text text-transparent">
                EASTLIGHT ENERGY
              </p>
              <p className="hero-desc lg:text-xl leading-loose text-center max-w-xl mx-auto">
                Powering your home with Cworth Energy solar solutions and
                simplifying your lifestyle. Professional installations, AC
                sales, and travel services nationwide.
              </p>
              <div className="flex flex-col cta-btns lg:flex-row lg:items-center lg:justify-center gap-4 mt-4">
                <Link
                  href={"/services/solar-products"}
                  className="max-lg:w-full mx-auto"
                >
                  <Button className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 max-lg:w-full md:p-4 md:px-8 md:text-base max-lg:max-w-sm mx-auto md:rounded-full items-center gap-2">
                    Explore Solar Products
                  </Button>
                </Link>

                <Link
                  href={"/services/solar-installations"}
                  className="max-lg:w-full mx-auto"
                >
                  <Button className="flex bg-white/90 text-black hover:ring-yellow-500 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-white max-lg:w-full items-center md:p-4 md:px-8 max-lg:max-w-sm mx-auto md:text-base md:rounded-full gap-2">
                    Book Solar Installation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full min-h-[600px] lg:min-h-[700px] h-[600px] lg:h-[700px] bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 rounded-b-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 h-full items-center px-8 lg:px-14 xl:px-20 2xl:container 2xl:mx-auto py-20 lg:py-20">
              {/* Left Content */}
              <div className="flex flex-col justify-center items-center lg:items-start h-full gap-4 z-20 text-center lg:text-left">
                <div className="flex justify-center calc-badge">
                  <h2 className="text-base relative shine-border px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
                    <ShineBorder
                      duration={30}
                      shineColor={["#2DD4BF", "#DC2626"]}
                    />
                    ENERGY CALCULATOR
                  </h2>
                </div>

                <p className="calc-heading text-3xl lg:text-6xl xl:text-7xl tracking-tight font-bold lg:leading-20">
                  Not sure how much solar power your home needs?
                </p>

                <p className="calc-desc text-base lg:text-xl font-semibold leading-relaxed max-w-xl">
                  Use our AI-powered{" "}
                  <span className="text-yellow-400 font-bold">
                    Energy calculator
                  </span>
                </p>

                <div className="flex flex-col gap-4 mt-4 w-full lg:w-auto calc-button">
                  <Link
                    href={"/energy-calculator"}
                    className="max-lg:w-full mx-auto"
                  >
                    <Button className="flex bg-white/90 text-black hover:ring-yellow-500 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-white max-lg:w-full items-center md:p-4 md:px-8 max-lg:max-w-sm mx-auto md:text-base md:rounded-full gap-2">
                      Try It Now
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative hidden lg:block h-full calc-image">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-500/10 to-transparent blur-3xl"></div>
                <img
                  src="/energycalcbg.png"
                  alt="Solar Calculator"
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full min-h-[600px] lg:min-h-[700px] h-[600px] lg:h-[700px]">
            <div className="absolute overflow-hidden inset-0 w-full h-full rounded-b-3xl shadow shadow-cyan-500/10 z-0">
              <img
                src={"/office.webp"}
                alt="Eastlight Energy Office"
                loading="eager"
                className="w-full h-full hero-img-three object-cover rounded-b-3xl"
              />
            </div>
            <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

            <div className="relative flex flex-col gap-4 items-center justify-center text-center h-full w-full z-30 px-8 lg:px-14 xl:px-20 2xl:container 2xl:mx-auto">
              <div className="flex justify-center office-badge">
                <h2 className="text-base relative shine-border px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
                  <ShineBorder
                    duration={30}
                    shineColor={["#2DD4BF", "#DC2626"]}
                  />
                  MEET OUR TEAM
                </h2>
              </div>

              <h2 className="office-title text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl">
                <span className="bg-gradient-to-r from-teal-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                  Professional Service,
                </span>
                <br />
                <span className="text-white">Trusted Results</span>
              </h2>

              <p className="office-desc text-base lg:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Our experienced team is dedicated to delivering excellence in
                solar installations and energy solutions across Nigeria.
              </p>

              <div className="flex flex-col lg:flex-row gap-4 mt-6 office-btns">
                <Link href={"/about"} className="max-lg:w-full mx-auto">
                  <Button className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 max-lg:w-full md:p-4 md:px-8 md:text-base max-lg:max-w-sm mx-auto md:rounded-full items-center gap-2">
                    Learn About Us
                  </Button>
                </Link>
                <Link href={"/contact"} className="max-lg:w-full mx-auto">
                  <Button className="flex bg-white/90 text-black hover:ring-yellow-500 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-white max-lg:w-full items-center md:p-4 md:px-8 max-lg:max-w-sm mx-auto md:text-base md:rounded-full gap-2">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className="hidden lg:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className="hidden lg:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </section>
  );
};

export default Hero;
