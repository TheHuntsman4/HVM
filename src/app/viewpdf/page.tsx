"use client"
import VisitingCard from "@/components/visitingCard"
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import { useSearchParams } from "next/navigation";

const page = ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams.name)
  console.log(searchParams.companyName)
  console.log(searchParams.email);
  console.log(searchParams.address1);
  console.log(searchParams.address2);
  console.log(searchParams.departmentName);
  console.log(searchParams.facultyDesignation);
  console.log(searchParams.facultyName);
  console.log(searchParams.phoneNumber);
  const handlePrint = useReactToPrint({
    documentTitle: "pass.pdf",
    content: () => pdfRef.current,
  });
  const pdfRef = useRef(null)
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div ref={pdfRef}>
        <VisitingCard name={searchParams.name} companyName={searchParams.companyName} departmentName={searchParams.departmentName} facultyDesignation={searchParams.facultyDesignation} facultyName={searchParams.facultyName}/>
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
