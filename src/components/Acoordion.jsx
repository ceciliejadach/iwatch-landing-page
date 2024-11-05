"use client";
import { useState } from "react";
import AccordionListItem from "./AccordionListItem";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <section className="mx-auto max-w-screen-sm py-8">
      <h1 className="text-5xl text-center py-4 text-white">FAQs</h1>
      <AccordionListItem isOpen={isOpen} setIsOpen={setIsOpen} item={1} headline="Her er første bjælke" text="En masse lorem ipsum text En masse lorem ipsum text En masse lorem ipsum text En masse lorem ipsum text En masse lorem ipsum text" />
      <AccordionListItem isOpen={isOpen} setIsOpen={setIsOpen} item={2} headline="Her er anden bjælke" text="En masse lorem ipsum text" />
      <AccordionListItem isOpen={isOpen} setIsOpen={setIsOpen} item={3} headline="Her er trejde bjælke" text="En masse lorem ipsum text" />
    </section>
  );
};

export default Accordion;
