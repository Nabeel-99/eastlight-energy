"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Phone, Mail } from "lucide-react";
import Link from "next/link";

const OfficeTrustSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#office-trust",
        start: "top 70%",
      },
    });

    tl.from(".office-image", {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    })
      .from(
        ".office-contact-card",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.5"
      )
      .from(
        ".office-badge",
        {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".office-heading",
        {
          x: -30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".office-description",
        {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.2"
      );

    ScrollTrigger.batch(".office-feature-item", {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        });
      },
    });

    gsap.from(".office-cta-btn", {
      scrollTrigger: {
        trigger: ".office-cta-btn",
        start: "top 90%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="office-trust"
      className="py-20 w-full 2xl:container 2xl:mx-auto"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20 border-4 border-teal-400/20 office-image">
              <img
                src="/office.webp"
                alt="Eastlight Energy Office"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Our Office
                </h3>
                <p className="text-gray-200">
                  Professional team ready to serve you
                </p>
              </div>
            </div>

            {/* Floating Contact Card */}
            <div className="office-contact-card absolute -bottom-8 -right-8 bg-gradient-to-br from-teal-900 to-slate-900 p-6 rounded-2xl border border-teal-400/40 shadow-xl max-lg:hidden">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+2347072245877"
                      className="hover:text-teal-400 text-white transition-colors"
                    >
                      +234 707 224 5877
                    </a>
                    <a
                      href="tel:+2347072252441"
                      className="hover:text-teal-400 text-white transition-colors"
                    >
                      +234 707 225 2441
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <a
                    href="mailto:info@eastlightenergy.com"
                    className="hover:text-teal-400 text-white transition-colors"
                  >
                    info@eastlightenergy.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            <div className="office-badge inline-flex items-center gap-2 w-fit px-4 py-2 bg-teal-400/10 rounded-full border border-teal-400/30">
              <Building2 className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-semibold">
                Visit Our Office
              </span>
            </div>

            <h2 className="office-heading text-3xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              Experience Professional Service
            </h2>

            <p className="office-description text-lg text-gray-300 leading-relaxed">
              Our dedicated team of experts is committed to providing you with
              the best solar energy solutions and services across Nigeria.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {[
                "Certified professionals",
                "State-of-the-art equipment",
                "Nationwide coverage",
                "24/7 customer support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="office-feature-item opacity-0 translate-x-[-20px] flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 office-cta-btn">
              <Link href="/contact">
                <button
                  type="button"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeTrustSection;
