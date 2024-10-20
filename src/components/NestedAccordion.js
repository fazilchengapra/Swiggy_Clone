import React from "react";
import AccordionArrow from "../assets/accordionArrow";
import Accordion from "./Accordion";

const NestedAccordion = ({ data, restro }) => {
  return (
    <div className="bg-white">
      <div className="flex py-4 pl-2">
        <div className="text-lg font-bold">{data?.title}</div>
      </div>
      {data?.categories.map((e) => (
        <div className="border-b-2">
          <Accordion data={e} text={"md"} show={false} restro={restro} />
        </div>
      ))}
    </div>
  );
};

export default NestedAccordion;
