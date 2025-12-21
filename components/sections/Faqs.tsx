"use client";

import { useGSAP } from "@gsap/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { ShineBorder } from "../ui/shine-border";
import gsap from "gsap";
const Faqs = () => {
  const questions = [
    {
      question: "Do you sell complete solar systems or individual components?",
      answer:
        "We offer both complete solar power systems and individual components such as panels, inverters, batteries, and accessories. Our team helps you choose what best fits your power needs and budget.",
    },
    {
      question: "Can I get installation after purchasing solar products?",
      answer:
        "Absolutely. We provide professional installation services to ensure your solar system is properly set up and performs optimally.",
    },
    {
      question: "How do I book a solar installer?",
      answer:
        "Simply select your state from our booking form, provide your contact details and energy requirements, and we'll connect you with a certified installer in your area within 24 hours.",
    },
    {
      question: "Do you cover all Nigerian states?",
      answer:
        "Yes! We have professional installers across all 36 Nigerian states and the Federal Capital Territory (FCT).",
    },
    {
      question: "Do I need to pay to book?",
      answer:
        "No, booking is completely free. Payment is discussed directly with the installer based on your specific requirements.",
    },
    {
      question: "How do I book flights and hotels?",
      answer:
        "Contact us directly with your travel requirements, destinations, and dates. Our team will assist you with booking options and pricing.",
    },
    {
      question: "Do you sell air conditioners?",
      answer:
        "Yes, we offer a wide range of energy-efficient air conditioning units. Contact us for available models, pricing, and installation services.",
    },
    {
      question: "How does the affiliate program work?",
      answer:
        "Contact us to join the program. Once approved, you'll promote our services and earn commission on successful sales and bookings.",
    },
  ];

  useGSAP(() => {
    gsap.from("#faqs", {
      scrollTrigger: {
        trigger: "#faqs",
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    });
  }, []);
  return (
    <section id="faqs" className="">
      <div className="flex flex-col gap-6 items-center text-white 2xl:container 2xl:mx-auto">
        <span className="text-base relative  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
          <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
          FAQs
        </span>
        <div className="flex flex-col items-center  gap-4 faq-div">
          <h2 className="text-3xl font-bold lg:text-5xl xl:text-6xl lg:tracking-tight  text-center xl:leading-30 bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-300">
            Got any questions? Reach out to us.
          </p>
          {/* <Link href={"/contact"}>
            {" "}
            <Button>Get in touch</Button>
          </Link> */}
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl flex flex-col gap-6"
          defaultValue="item-1"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              defaultValue={`item-${index + 1}`}
              className="border bg-teal-800/10 border-teal-400/10 px-8 rounded-3xl"
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-gray-300">{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
