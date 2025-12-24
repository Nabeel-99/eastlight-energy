import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Homeowner, Lagos",
      content:
        "Eastlight Energy transformed my home with their solar installation. My electricity bills dropped by 80%! Professional service from start to finish.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Chioma Okafor",
      role: "Business Owner, Abuja",
      content:
        "Their team installed a complete solar system for my office. Outstanding quality and excellent customer support. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Ibrahim Musa",
      role: "Hotel Manager, Kano",
      content:
        "We use their services for both solar power and travel bookings. Everything runs smoothly. They're reliable partners for our business.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-red-200/70 to-teal-400 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences from satisfied customers across Nigeria
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-gradient-to-br from-slate-900/80 to-teal-900/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              <Quote className="w-10 h-10 text-teal-400/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-teal-400/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-yellow-400 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
