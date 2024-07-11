import React from "react";

const CvSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="grid grid-rows-flow grid-cols-12 gap-2 mb-2">
    <div className="row-span-1 col-span-3">
      <hr
        className="h-4 bg-blue-300 mt-4 border-none"
        style={{ backgroundColor: "#93c5fd" }}
      />
    </div>
    <div className="row-span-1 col-span-9">
      <h2
        className="text-xl font-bold text-blue-300"
        style={{ color: "#93c5fd" }}
      >
        {title}
      </h2>
    </div>
    {children}
  </div>
);

export default CvSection;
