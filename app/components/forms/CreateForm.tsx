
"use client";
import { useState } from 'react';

import styles from '../../styles/create.module.css';
import { addCommentServer } from '../../actions/add-comment';



const CreateForm = () => {


    const [text, setText] = useState('');

    const handleSubmit = async (event) => {
        console.log('handleSubmit');
        setText('');
    };


    return (
        <form onSubmit={handleSubmit} action={addCommentServer} className={styles.comment_form}>
            <div className={styles.comment}>
                <div className={styles.avatar}>
                    <img src="/assets/images/ava.svg" width="40" height="40" className={styles.avatar} alt={process.env.CURR_USER} />
                </div>
                <div className={styles.text_box}>
                    <textarea required name="content" className={styles.text_field} placeholder="Add comment..." />
                    <div className={styles.btn_box}>
                        <button type="submit" className={styles.btn}>Send</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateForm;
