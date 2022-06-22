import React, { useState } from "react";
import { FaqList } from "./FaqList";
import FaqItem from "./FaqItem";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id]
    });
  };

    return ( 
        <>
        {FaqList.map((list) => (
          <FaqItem
            key={list.id}
            list={list}
            isOpen={isOpen}
            handleClick={handleClick}
          />
        ))}
      </>
     );
}
 
export default Faq;