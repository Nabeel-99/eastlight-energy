"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface RelatedProductsProps {
  parentProduct: any;
  currentSeries: any;
}

export function RelatedProducts({
  parentProduct,
  currentSeries,
}: RelatedProductsProps) {
  const router = useRouter();

  const otherSeries =
    parentProduct.dataSource
      ?.filter((s: any) => s.series !== currentSeries.series)
      .slice(0, 3) || [];

  if (otherSeries.length === 0) return null;

  const generateSlug = (seriesName: string) => {
    return seriesName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  const handleClick = (series: any) => {
    const slug = generateSlug(series.series || series.models[0]?.model);
    router.push(`/services/solar-products/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold  mb-2 text-center">
          You Might Also Like
        </h3>
        <p className=" text-center mb-8">Other {parentProduct.title} series</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherSeries.map((series: any, index: number) => (
            <div
              key={index}
              onClick={() => handleClick(series)}
              className="group cursor-pointer bg-white border border-black/10 shadow-md rounded-2xl overflow-hidden hover:border-black/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48  p-4 flex items-center justify-center">
                <img
                  src={series.image || parentProduct.image}
                  alt={series.series || series.models[0]?.model}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4 text-center bg-gray-50/50">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-black">
                  {series.series || series.models[0]?.model}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {series.description || parentProduct.description}
                </p>
                <Button className="w-full mt-4 bg-white border border-black/20 text-gray-900 hover:bg-black hover:text-white transition-all">
                  View Specifications
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
