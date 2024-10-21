"use client";
import { Tabs } from "../sourceFiles/tabs";
import Linear from "@/public/assets/dashboard.svg";
import AssetTable from "../home/AssetTable";
export function TabsDemo() {
  const tabs = [
    {
      title: "Crypto Futures",
      value: "crypto Futures",
      content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl- md:text-4xl- font-bold- -text-white bg-[#0A0A0A]">
            <AssetTable type={'crypto'} />
          </div>
      ),
    },
    {
      title: "Forex",
      value: "forex",
      content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl- md:text-4xl- font-bold- -text-white bg-[#0A0A0A]">
            <AssetTable type={'forex'} />
          </div>
      ),
    },
    {
      title: "Indices",
      value: "indices",
      content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl- md:text-4xl- font-bold- -text-white bg-[#0A0A0A]">
            <AssetTable type={'indices'} />
          </div>
      ),
    },
    {
      title: "Commodities",
      value: "commodities",
      content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl- md:text-4xl- font-bold- -text-white bg-[#0A0A0A]">
            <AssetTable type={'commodities'} />
          </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] sm:h-[45rem] [perspective:1000px] overflow-x-scroll md:overflow-hidden relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-12 text-[red]">
      <Tabs tabs={tabs} />
    </div>
  );
}
