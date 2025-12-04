import { Handshake, Navigation, Zap } from "lucide-react";

import { Card, CardContent, CardHeader } from "../ui/card";

const ChooseUs = () => {
  const chooseDetails = [
    {
      icon: <Zap />,
      title: "Nationwide coverage",
      description:
        "Professional solar installation services across all Nigerian states.",
    },
    {
      icon: <Navigation />,
      title: "Comprehensive Solutions",
      description:
        "From solar power to air conditioning and travel booking, we've got you covered.",
    },
    {
      icon: <Handshake />,
      title: "Customer-First Approach",
      description: "Dedicated support to help you every step of the way.",
    },
  ];
  return (
    <section className="flex flex-col gap-6 w-full h-full 2xl:container 2xl:mx-auto">
      <h2 className="text-3xl font-bold lg:text-5xl xl:text-6xl lg:tracking-tight  text-center xl:leading-30 bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
        Why Choose Us?
      </h2>
      <p className="text-xl text-center text-gray-300">
        Your trusted partner in clean energy solutions.
      </p>
      <div className="grid  lg:grid-cols-3 gap-10">
        {chooseDetails.map((item, index) => (
          <Card
            key={index}
            className="bg-[#111822]  flex flex-col gap-4 text-gray-300 rounded-2xl border-2 border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20  hover:drop-shadow-md  transition-all duration-300 ease-in-out group"
          >
            <CardHeader>
              {" "}
              <div className="flex justify-start">
                {" "}
                <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
                  <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-medium">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
