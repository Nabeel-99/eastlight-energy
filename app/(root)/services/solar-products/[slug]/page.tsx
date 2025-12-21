"use client";

import React, { use } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { solarProducts } from "@/lib/data";
import { SolarProductForm } from "@/components/forms/SolarProductForm";
import DataTable from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { RelatedProducts } from "@/components/RelatedProducts";

const generateSlug = (seriesName: string) => {
  return seriesName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

export default function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();

  let seriesData: any = null;
  let parentProduct: any = null;
  let parentIndex = 0;
  let currentSeriesIndex = 0;

  for (let i = 0; i < solarProducts.length; i++) {
    const product = solarProducts[i];
    if (product.dataSource && product.dataSource.length > 0) {
      const foundIndex = product.dataSource.findIndex(
        (series: any) =>
          generateSlug(series.series || series.models[0]?.model) === slug
      );
      if (foundIndex !== -1) {
        seriesData = product.dataSource[foundIndex];
        parentProduct = product;
        parentIndex = i;
        currentSeriesIndex = foundIndex;
        break;
      }
    }
  }

  if (!seriesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Button onClick={() => router.push("/services/solar-products")}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const specKeys =
    seriesData.models && seriesData.models.length > 0
      ? Object.keys(seriesData.models[0]).filter((key) => key !== "model")
      : [];

  const hasMultipleSeries = parentProduct.dataSource.length > 1;
  const hasPrevious = currentSeriesIndex > 0;
  const hasNext = currentSeriesIndex < parentProduct.dataSource.length - 1;

  const previousSeries = hasPrevious
    ? parentProduct.dataSource[currentSeriesIndex - 1]
    : null;
  const nextSeries = hasNext
    ? parentProduct.dataSource[currentSeriesIndex + 1]
    : null;

  const handleNavigateToSeries = (series: any) => {
    const newSlug = generateSlug(series.series || series.models[0]?.model);
    router.push(`/services/solar-products/${newSlug}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (productIndex: number) => {
    router.push(`/services/solar-products?active=${productIndex}`);
  };

  const getOtherSeriesInCategory = (parentProduct: any, currentSeries: any) => {
    if (!parentProduct.dataSource || parentProduct.dataSource.length <= 1) {
      return [];
    }

    return parentProduct.dataSource
      .filter((s: any) => s.series !== currentSeries.series)
      .map((s: any) => s.series);
  };

  return (
    <div className="min-h-screen bg-white pt-10 lg:pt-40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-8">
          {/* SIDEBAR - PRODUCT CATALOGUE (SAME DESIGN AS PRODUCTS PAGE) */}
          <aside className="lg:sticky lg:top-30 h-fit w-full z-10">
            <h2 className="text-lg lg:text-xl text-left uppercase bg-linear-to-t from-gray-900 from-10% to-[#313131] bg-clip-text text-transparent font-bold mb-4">
              PRODUCT CATALOGUE
            </h2>

            <div className="border bg-white/30 shadow-md border-black/10 rounded-lg p-4 flex flex-col gap-3">
              {solarProducts.map((product, idx) => (
                <Button
                  key={idx}
                  onClick={() => handleCategoryClick(idx)}
                  className={cn(
                    "w-full border flex items-center justify-between border-black/10 text-gray-900 rounded-xl p-5 lg:p-6 lg:text-base text-left bg-white/20 hover:bg-black hover:text-white transition-all",
                    idx === parentIndex ? "bg-black text-white" : ""
                  )}
                >
                  {product.title}
                  <ChevronRight className="size-6" />
                </Button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="space-y-12 order-first lg:order-none">
            {/* MINI HERO */}
            <section className="bg-gradient-to-br  from-black/90 via-black/80 to-black/90 rounded-3xl p-8 lg:p-12 text-white">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                {seriesData.category || parentProduct.title}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold mb-2">
                {seriesData.series || seriesData.models[0]?.model}
              </h1>
              {seriesData.type && (
                <p className="text-lg text-gray-400 mb-4">{seriesData.type}</p>
              )}
              <p className="text-base text-gray-300 mb-6 max-w-3xl leading-relaxed">
                {seriesData.description || parentProduct.description}
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("inquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
              >
                Request Quote
                <ChevronRight className="size-5" />
              </button>
            </section>

            {/* PRODUCT IMAGE + INFO */}
            <section className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="border border-black/10 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src={seriesData.image || parentProduct.image}
                  alt={seriesData.series || seriesData.models[0]?.model}
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Product Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {seriesData.description || parentProduct.description}
                  </p>
                </div>

                {/* Features */}
                {seriesData.features && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {seriesData.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="size-4 text-gray-900 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warranty */}
                {seriesData.warranty && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">Warranty</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="size-4 text-gray-900 mt-0.5 flex-shrink-0" />
                        {seriesData.warranty.product}
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="size-4 text-gray-900 mt-0.5 flex-shrink-0" />
                        {seriesData.warranty.power}
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="size-4 text-gray-900 mt-0.5 flex-shrink-0" />
                        {seriesData.warranty.degradation}
                      </li>
                    </ul>
                  </div>
                )}

                {/* Certifications */}
                {seriesData.certifications && (
                  <div className="flex flex-wrap gap-2">
                    {seriesData.certifications.map((cert: string) => (
                      <span
                        key={cert}
                        className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* SPECIFICATIONS TABLE */}
            {seriesData.models && seriesData.models.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Specifications
                </h3>
                <div className="shadow-sm border border-black/10 rounded-lg overflow-hidden">
                  <DataTable currentSeries={seriesData} specKeys={specKeys} />
                </div>
              </section>
            )}

            {/* MECHANICAL SPECS */}
            {seriesData.mechanicalSpecs && (
              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Mechanical Specifications
                </h3>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(seriesData.mechanicalSpecs).map(
                        ([key, value], idx) => (
                          <tr
                            key={key}
                            className={
                              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {value as string}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* INQUIRY FORM */}
            <section
              id="inquiry-form"
              className="py-20 px-4 overflow-x-hidden bg-[#0A0F18] rounded-3xl"
            >
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl lg:text-5xl text-center mx-auto max-w-xl font-bold bg-gradient-to-b from-red-500/70 to-40% to-teal-400 bg-clip-text text-transparent">
                  Interested in{" "}
                  {seriesData.series || seriesData.models[0]?.model}?
                </h2>
                <p className="lg:text-lg max-w-xl text-center text-gray-300">
                  Submit your inquiry to learn more about this product. Our team
                  will provide detailed information and pricing.
                </p>
              </div>
              <SolarProductForm
                preSelectedProduct={
                  seriesData.series || seriesData.models[0]?.model
                }
                parentCategory={parentProduct.title}
                otherSeriesInCategory={getOtherSeriesInCategory(
                  parentProduct,
                  seriesData
                )}
              />
            </section>
            <RelatedProducts
              parentProduct={parentProduct}
              currentSeries={seriesData}
            />
            {/* NEXT/PREVIOUS NAVIGATION */}
            {hasMultipleSeries && (
              <section className="grid grid-cols-2 lg:flex items-center justify-between gap-4">
                {hasPrevious ? (
                  <button
                    onClick={() => handleNavigateToSeries(previousSeries)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-all font-medium"
                  >
                    <ChevronLeft className="size-5" />
                    <span className="hidden md:inline">Previous:</span>
                    <span className="font-semibold text-sm">
                      {previousSeries.series || previousSeries.models[0]?.model}
                    </span>
                  </button>
                ) : (
                  <div></div>
                )}

                {hasNext ? (
                  <button
                    onClick={() => handleNavigateToSeries(nextSeries)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-all font-medium ml-auto"
                  >
                    <span className="hidden md:inline">Next:</span>
                    <span className="font-semibold text-sm">
                      {nextSeries.series || nextSeries.models[0]?.model}
                    </span>
                    <ChevronRight className="size-5" />
                  </button>
                ) : (
                  <div></div>
                )}
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
