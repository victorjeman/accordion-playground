import { useState } from "react";
import "./App.css";

const DATA = [
  {
    title: "Title 1",
    content: "Content 1",
  },
  {
    title: "Title 2",
    content: "Content 2",
  },
  {
    title: "Title 3",
    content: "Content 3",
  },
];

type AccordionItemProps = {
  title: string;
  index: number;
  content: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  handleActiveIndex: (index: number) => void;
};

function AccordionItem({ title, content, index, isOpen, handleActiveIndex }: AccordionItemProps) {
  return (
    <div className="accordion-item">
      <div onClick={() => handleActiveIndex(index)}>{title}</div>
      {isOpen && <div>{content}</div>}
    </div>
  );
}

type AccordionProps = {
  data: { title: string; content: string }[];
};

function Accordion({ data }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleActiveIndex(index: number) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          index={index}
          handleActiveIndex={handleActiveIndex}
          isOpen={activeIndex === index}
        />
      ))}
    </section>
  );
}

function App() {
  return (
    <>
      <h1>Accordion with React</h1>

      <Accordion data={DATA} />
    </>
  );
}

export default App;
