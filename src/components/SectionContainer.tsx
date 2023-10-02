import React, { ReactNode } from "react";

type Props = { heading: string; children: ReactNode };

export default function SectionContainer({ heading, children }: Props) {
  return (
    <div className="my-8">
      <div className="rounded-t rounded-t-[20px] bg-[#D0F7FA] pl-8 py-6">
        <p className="font-['Poppins'] text-2xl font-semibold">{heading}</p>
      </div>
      <div className="flex flex-col shadow-md justify-center items-center rounded-b rounded-b-[20px] px-8">
        {children}
      </div>
    </div>
  );
}
