import React from "react";
import styles from "../styles/home.module.scss";
// import { BsChevronPlus } from "react-icons/bs";


const FaqItem = ({ list, handleClick, isOpen }) => {
  return (
    <div className={styles["faq"]} >
      <div className={styles["inner-container"]} >
        <div className={styles["question-flex"]}>
        <p className={styles["question"]} >{list.question}</p>
        <button className={styles["button"]} onClick={() => handleClick(list.id)}>+</button>
        </div>
        {isOpen[list.id] ? <p className={styles["answer"]} >{list.answer}</p> : null}
      </div>
    </div>
  );
};

export default FaqItem;