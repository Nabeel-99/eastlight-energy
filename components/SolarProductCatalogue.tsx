"use client";

import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SolarProductCatalogue = ({
  productsRef,
  startRef,
  activeIndex,
  handleProductClick,
  solarProducts,
}: any) => {
  const router = useRouter();

  const currentProduct = solarProducts[activeIndex];

  // Generate slug
  const generateSlug = (seriesName: string) => {
    return seriesName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  const handleSeriesClick = (series: any) => {
    const slug = generateSlug(series.series || series.models[0].model);
    router.push(`/services/solar-products/${slug}`);
  };

  return (
    <section
      ref={productsRef}
      className="flex flex-col px-4 md:px-20 w-full lg:pt-20 pb-32 text-black bg-[#ffffff]"
    >
      <div
        ref={startRef}
        className="flex flex-col lg:flex-row 2xl:container 2xl:mx-auto lg:gap-10 items-start mt-20 relative"
      >
        {/* SIDEBAR */}
        <aside className="flex flex-col pt-10 lg:pt-0 gap-4 w-full lg:w-auto lg:sticky lg:top-30 z-10">
          <h2 className="text-lg lg:text-xl text-left uppercase bg-linear-to-t from-gray-900 from-10% to-[#313131] bg-clip-text text-transparent font-bold">
            PRODUCT CATALOGUE
          </h2>

          <div className="border bg-white/30 shadow-md border-black/10 rounded-lg p-4 flex flex-col gap-3">
            {solarProducts.map((product: any, productIndex: number) => (
              <Button
                key={productIndex}
                onClick={() => handleProductClick(productIndex)}
                className={cn(
                  "w-full border flex items-center justify-between border-black/10 text-gray-900 rounded-xl p-5 lg:p-6 lg:text-base text-left bg-white/20 hover:bg-black hover:text-white transition-all",
                  activeIndex === productIndex ? "bg-black text-white" : ""
                )}
              >
                {product.title}
                <ChevronRight className="size-6" />
              </Button>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="w-full flex flex-col gap-8 mt-10 lg:mt-0 order-first lg:order-0">
          {/* Header */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {currentProduct.title}
            </h3>
            <div className="h-1 w-20 bg-linear-to-r from-black to-yellow-500 rounded-full" />
          </div>

          <p className="text-lg text-gray-700">{currentProduct.description}</p>

          {/* GRID OF MODELS */}
          {currentProduct.dataSource && currentProduct.dataSource.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentProduct.dataSource.map((series: any, index: number) => (
                <div
                  key={index}
                  onClick={() => handleSeriesClick(series)}
                  className="group cursor-pointer bg-white border border-black/10 shadow-md rounded-2xl overflow-hidden hover:border-black/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64  p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={series.image || currentProduct.image}
                      alt={series.series || series.models[0]?.model}
                      className="w-full h-full object-contain lg:group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3 bg-gray-50/50">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-black">
                      {series.series || series.models[0]?.model}
                    </h4>

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {series.description || currentProduct.description}
                    </p>

                    {/* View Details */}
                    <Button className="w-full mt-4 bg-white border border-black/20 text-gray-900 hover:bg-black hover:text-white transition-all">
                      View Specifications
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Fallback if no dataSource
            <div className="border border-black/10 shadow-md bg-white/30 rounded-3xl p-10 text-center">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-[400px] aspect-square mx-auto mb-6"
              />

              {currentProduct.specs && (
                <div className="max-w-2xl mx-auto text-left">
                  <p className="uppercase text-sm font-bold text-black mb-3">
                    Specifications:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {currentProduct.specs.map((spec: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="size-4 text-black mt-1 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default SolarProductCatalogue;
