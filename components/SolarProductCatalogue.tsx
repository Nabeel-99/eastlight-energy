import React from "react";
import DataTable from "./DataTable";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SolarProductCatalogue = ({
  productsRef,
  startRef,
  selectedSeriesIndex,
  specKeys,
  currentSeries,
  hasMultipleSeries,
  currentProduct,
  activeIndex,
  handleProductClick,
  handleSeriesClick,
  solarProducts,
}: any) => {
  return (
    <section
      ref={productsRef}
      className="flex flex-col px-4 md:px-20 w-full lg:pt-20 pb-32 text-black bg-[#ffffff] "
    >
      <div
        ref={startRef}
        className="flex flex-col lg:flex-row  2xl:container 2xl:mx-auto lg:justify-betwen lg:gap-10 items-start mt-20  relative"
      >
        <section className="flex flex-col gap-4 w-full lg:w-auto lg:sticky top-30">
          <h2 className="text-lg lg:text-xl text-left uppercase bg-linear-to-t from-gray-900 from-10% to-[#313131] bg-clip-text text-transparent font-bold">
            PRODUCT CATALOGUE
          </h2>
          <div className="border bg-white/30 shadow-md border-black/10 rounded-lg p-4 flex flex-col gap-4">
            {solarProducts.map((product: any, productIndex: number) => {
              const hasDataSource =
                product.dataSource && product.dataSource.length > 0;
              const hasMultiple =
                hasDataSource && product.dataSource.length > 1;

              if (hasMultiple) {
                return (
                  <Collapsible
                    open={activeIndex === productIndex}
                    // onOpenChange={setIsOpen}
                    key={productIndex}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        className={cn(
                          "w-full border flex items-center justify-between border-black/10 text-gray-900 rounded-xl p-5 lg:p-6 lg:text-base text-left bg-white/20 hover:bg-black hover:text-white",
                          activeIndex === productIndex &&
                            "bg-black/80 text-white"
                        )}
                        onClick={() => handleProductClick(productIndex)}
                      >
                        {product.title}
                        <ChevronRight className="size-6" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 ml-4 space-y-2">
                      {product.dataSource.map(
                        (series: any, seriesIndex: number) => (
                          <Button
                            key={seriesIndex}
                            onClick={() => {
                              handleProductClick(productIndex);
                              handleSeriesClick(seriesIndex);
                            }}
                            className={cn(
                              "w-full border flex items-center justify-between border-black/10 text-gray-900 rounded-xl p-4 lg:p-5 text-left bg-white/40 hover:bg-black hover:text-white text-base",
                              activeIndex === productIndex &&
                                selectedSeriesIndex === seriesIndex
                                ? "bg-black text-white"
                                : ""
                            )}
                          >
                            {series.models[0].model}
                            <ChevronRight className="size-5" />
                          </Button>
                        )
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                );
              } else {
                return (
                  <Button
                    key={productIndex}
                    onClick={() => handleProductClick(productIndex)}
                    className={cn(
                      "border flex items-center justify-between border-black/10 text-gray-900 rounded-xl p-5 lg:p-6 lg:text-base text-left bg-white/20 hover:bg-black hover:text-white",
                      activeIndex === productIndex ? "bg-black text-white" : ""
                    )}
                  >
                    {product.title}
                    <ChevronRight className="size-6" />
                  </Button>
                );
              }
            })}
          </div>
        </section>
        <section className="w-full   flex flex-col gap-4 h-full pb-10 mt-10 order-first lg:order-0">
          <div className="border border-black/10 shadow-md bg-white/30 rounded-3xl p-10">
            <img
              src={currentSeries?.image || currentProduct.image}
              alt={currentSeries?.series || currentProduct.title}
              className=" w-[400px] aspect-square mx-auto"
            />
          </div>

          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {hasMultipleSeries && currentSeries
                ? `${currentProduct.title} - ${currentSeries.series || currentSeries.models[0].model}`
                : currentProduct.title}
            </h3>
            <div className="h-1 w-20 bg-linear-to-r from-black to-yellow-500 rounded-full" />
          </div>
          <p className="uppercase text-sm font-bold  text-black">Description</p>
          <p className="text-lg">
            {currentSeries?.description || currentProduct.description}
          </p>
          {currentSeries?.models && currentSeries.models.length > 0 && (
            <>
              <p className="text-sm font-bold uppercase text-black mt-6">
                Specifications
              </p>
              <div className="shadow-sm border border-black/10 rounded-lg overflow-hidden">
                <DataTable currentSeries={currentSeries} specKeys={specKeys} />
              </div>
            </>
          )}
        </section>
      </div>
    </section>
  );
};

export default SolarProductCatalogue;
