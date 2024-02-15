"use client";
import styles from '../../styles/create.module.css';

import { replyCommentServer } from '../../actions/reply-comment';

const ReplyForm = ({ item_id, addressee, parentId }) => {

    return (
        <>


                <form action={replyCommentServer} className={styles.comment_form}>
                    <div className={styles.comment}>
                        <div className={styles.tex_box}>
                            <textarea required name="content" className={styles.text_field} placeholder="Reply comment..." /> {item_id}-{parentId}
                            <input type="hidden" name="parentId" value={parentId} />
                            <input type="hidden" name="addressee" value={addressee} />

                            <div className={styles.btn_box}>
                                <button type="submit" className={styles.btn}>Reply</button>
                            </div>
                        </div>
                    </div>
                </form>




        </>
    )
}

export default ReplyForm;
