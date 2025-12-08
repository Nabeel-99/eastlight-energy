import { SelectedHotel } from "@/lib/interface";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from "./card";
import { Button } from "./button";

type CustomModalProps = {
  selectedHotel: SelectedHotel;
  handleCloseModal: () => void;
  handleClick: () => void;
};
const CustomModal = ({
  selectedHotel,
  handleCloseModal,
  handleClick,
}: CustomModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleCloseModal}
    >
      <Card
        className="bg-[#060606] border border-teal-400/10 rounded-2xl p-8 max-w-3xl w-full mx-4 relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-3xl hover:scale-125 transition "
        >
          ×
        </button>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center mb-6 ">
            {selectedHotel.heading}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <img
            src={selectedHotel.thumbnail}
            alt=""
            className="w-full h-96 object-cover rounded-lg mb-6"
          />

          <p className="">{selectedHotel.subheading}</p>
        </CardContent>

        <CardFooter className="flex gap-4 mt-8 justify-end">
          <Button
            onClick={handleCloseModal}
            className="bg-teal-400/10 hover:bg-teal-400/30"
          >
            Close
          </Button>
          <Button
            onClick={handleClick}
            className="bg-teal-400/50 hover:bg-teal-400/40"
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomModal;
