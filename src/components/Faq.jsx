import React, { useState } from "react";
import styles from "../styles/home.module.scss";
import { FaqList } from "./FaqList";

const Faq = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

    return ( 
        <div className={styles["faq-container"]}>

        {FaqList.map((faq) => (
        <div key={faq.id} className={styles["inner-container"]}>
          <div className={styles["question-flex"]}>
            <div className={styles["question"]}>
              {faq.question}
            </div>
            <button onClick={handleClick} className={styles["question-btn"]}>{faq.icons}</button> 
            </div>
          <div>
            {isOpen && 
                <p>{faq.answer}</p>
            }
          </div>
        </div>
        ))}
        </div>
     );
}
 
export default Faq;