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
      <h2 className="text-3xl font-bold lg:text-5xl text-center">
        Why Choose EastLight Energy
      </h2>
      <p className="text-xl text-center">
        Your trusted partner in clean energy solutions.
      </p>
      <div className="grid  lg:grid-cols-3 gap-10">
        {chooseDetails.map((item, index) => (
          <Card key={index} className="shadow-none">
            <CardHeader>
              {" "}
              <div className="flex justify-start">
                {" "}
                <span className="bg-teal-500/20 p-2 rounded-full">
                  {" "}
                  {item.icon}
                </span>
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
