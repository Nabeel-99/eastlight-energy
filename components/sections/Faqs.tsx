import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { Button } from "../ui/button";

const Faqs = () => {
  const questions = [
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
  return (
    <section id="faqs" className="">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 2xl:container 2xl:mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-4 faq-div">
          <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-center">Got any questions? Reach out to us.</p>
          <Link href={"/contact"}>
            {" "}
            <Button>Get in touch</Button>
          </Link>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              defaultValue={`item-${index + 1}`}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
