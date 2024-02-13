"use client";
import styles from '../../styles/vote.module.css';
import React, { useState } from "react";


import { addVoterDownServer } from '../../actions/add-vote-down';
import { addVoterUPServer } from '../../actions/add-vote-up';






const VoteButton = ({ votes, commentId, author }) => {

    const [count, setCount] = React.useState<number>(votes);


    const handleClickUP = (event) => {
        if (!(event.currentTarget.className.includes('clicked'))) {

            setCount((prevValue) => prevValue + 1);
            event.currentTarget.classList.toggle('clicked');

        }


    }

    const handleClickDOWN = (event) => {
        if (!(event.currentTarget.className.includes('clicked'))) {

            setCount((prevValue) => prevValue - 1);
            event.currentTarget.classList.toggle('clicked');
        }



    }

    return (
        <>
            <div className={styles.votes}>
                <div className={styles.vote}>
                    <span className={styles.up} onClick={handleClickUP}>
                        <form action={addVoterUPServer}>
                            <input type="hidden" name="commentId" value={commentId} />
                            <input type="hidden" name="rate" value="1" />

                            <button type="submit">
                                <img src="/assets/images/+.svg" alt="" />
                            </button>
                        </form>
                    </span>
                    <span className={styles.num}>{count}</span>
                    <span className={styles.down} onClick={handleClickDOWN}>
                        <form action={addVoterDownServer}>
                            <input type="hidden" name="commentId" value={commentId} />
                            <input type="hidden" name="rate" value="-1" />

                            <button type="submit">
                                <img src="/assets/images/-.svg" alt="" />
                            </button>
                        </form>
                    </span>
                </div>
            </div>
        </>
    )
}

export default VoteButton;
