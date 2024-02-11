
"use client";
import styles from '../../styles/reply.module.css';


const handleClickReply = (e) => {
  console.log('handleClickReply');
  e.preventDefault();

}


const ReplyButton = () => {

  return (
    <>
      <div className={styles.reply}>
      <form action="">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.227189 4.31583L5.0398 0.159982C5.46106 -0.203822 6.125 0.0915222 6.125 0.656646V2.8456C10.5172 2.89589 14 3.77618 14 7.93861C14 9.61864 12.9177 11.283 11.7214 12.1532C11.348 12.4247 10.816 12.0839 10.9536 11.6437C12.1935 7.67857 10.3655 6.62588 6.125 6.56484V8.96878C6.125 9.5348 5.46056 9.82883 5.0398 9.46545L0.227189 5.30918C-0.0755195 5.04772 -0.0759395 4.57766 0.227189 4.31583Z" fill="#5357B6" />
        </svg>

       
          <button type="submit" onClick={handleClickReply}>
          <span className={styles.txt}>Reply</span>
          </button>
        </form>
        
      </div>


    </>
  )
}

export default ReplyButton;
