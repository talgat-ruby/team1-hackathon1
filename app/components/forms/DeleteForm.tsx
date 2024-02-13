
"use client";
import styles from '../../styles/delete.module.css';

import { deleteCommentServer } from '../../actions/delete-comment';

import { useState } from 'react';

const DeleteForm = ({ item_id }) => {
    const [idichnik, setItem_id] = useState(item_id);
    const [submitted, setSubmitted] = useState(false);



    const handleSubmit = async (event) => {
        console.log('delete handleSubmit');
        setSubmitted(true);
    };

    return (
        <div className={styles.modalOverlay}>
            {!submitted ? (
                <form onSubmit={handleSubmit} action={deleteCommentServer} className={styles.modalWrapper}>                   
                        <h3>Delete comment</h3>
                        <p className="txt">Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
                        <input type="hidden" name="commentId" value={idichnik} />

                        <button type="submit" name='no'>NO, CANCEL</button>
                        <button type="submit">YES, DELETE</button>
                    </form>
                    ) : (
                    <div></div>
            )}              

        </div>
    )
}

export default DeleteForm;
