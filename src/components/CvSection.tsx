import React from "react";

const CvSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="grid grid-rows-flow grid-cols-12 gap-1">
    <div className="row-span-1 col-span-2">
      <hr
        className="h-4 bg-blue-300 mt-4 border-none"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </div>
    <div className="row-span-1 col-span-10">
      <h2
        className="text-xl font-bold text-blue-300 print-hd"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </h2>
    </div>
    <div className="row-span-1 col-span-12">
      {children}
    </div>
  </div>
);

export default CvSection;
