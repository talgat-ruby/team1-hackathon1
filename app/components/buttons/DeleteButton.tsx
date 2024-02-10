"use client";
import styles from "../../styles/delete.module.css";

function handleClickDelete() {
  console.log("Deleted");
}

const DeleteButton = () => {
  return (
    <div onClick={handleClickDelete}>
      <div className="delete">Delete</div>
    </div>
  );
};

export default DeleteButton;
