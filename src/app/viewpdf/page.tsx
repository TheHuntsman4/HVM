"use client"
import VisitingCard from "@/components/visitingCard"
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const page = () => {
  const handlePrint = useReactToPrint({
    documentTitle: "pass.pdf",
    content: () => pdfRef.current,
  });
  const pdfRef = useRef(null)
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div ref={pdfRef}>
        <VisitingCard />
      </div>
      <button
        onClick={handlePrint}
        className="text-white text-lg font-semibold bg-black rounded-2xl  border-white border-[3px] p-4"
      >
        Download
      </button>
    </div>
  )
}

export default page
