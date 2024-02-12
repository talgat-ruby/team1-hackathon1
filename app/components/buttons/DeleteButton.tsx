
"use client";
import styles from '../../styles/delete.module.css';



const DeleteButton = () => {

  return (
    <>
      <div className="delete">

        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1.16667H11.6667V2.33333H0V1.16667H2.91667L3.89324 0H7.77346L8.75 1.16667ZM2.72223 14C1.86659 14 1.16667 13.3017 1.16667 12.4479V3.5H10.5V12.4479C10.5 13.3017 9.80007 14 8.94447 14H2.72223Z" fill="#ED6368" />
        </svg>

        <span className={styles.txt}>Delete</span>
        

      </div>


    </>
  )
}

export default DeleteButton;
