import styles from '../../styles/create.module.css';


const CreateForm = () => {
    return (
        <form className={styles.comment_form}>
            <div className={styles.comment}>
                <div className={styles.avatar}>
                    <img src="" className={styles.avatar} />
                </div>
                <div className={styles.text_box}>
                    <textarea className={styles.text_field} placeholder="Add comment..."></textarea>
                </div>
                <div className={styles.btn_box}>
                    <button type="submit" className={styles.btn}>Send</button>
                </div>
            </div>
        </form>
    )
}

export default CreateForm;
