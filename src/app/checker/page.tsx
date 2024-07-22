"use client";
import MatchPosition from "./components/MatchPosition";
import AnalysisTable from "./components/AnalysisTable";
import ImportantToKnow from "./components/ImportantToKnow";
import Recomendations from "./components/Recomendations";
import Suggestions from "./components/Suggestions";
import ActionFooter from "./components/ActionFooter";
import { Separator } from "@/components/ui/separator";

export default function Checker() {
  return (
    <div className="bg-gray-100 p-4 h-screen overflow-auto">
      <div className="w-full max-w-screen-2xl m-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <section className="flex flex-1 flex-col gap-4">
            <MatchPosition />
            <AnalysisTable />
            <ImportantToKnow />
          </section>
          <Separator orientation="vertical" className="h-100" />
          <section className="flex flex-1 flex-col gap-4">
            <Recomendations />
            <Suggestions />
          </section>
        </div>
        <ActionFooter />
      </div>
    </div>
  );
}