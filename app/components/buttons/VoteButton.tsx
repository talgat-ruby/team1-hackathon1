"use client";
import styles from '../../styles/vote.module.css';


import { addVoterDownServer } from '../../actions/add-vote-down';
import { addVoterUPServer } from '../../actions/add-vote-up';



function handleClickUP() {
    console.log('Look terminal increment like handleClickUP');
}

function handleClickDOWN() {
    console.log('Look terminal  decrement like handleClickDOWN');
}



const VoteButton = ({ votes }) =>  {

    return (
        <>
        <div className={styles.votes}>
						<div className={styles.vote}>
                        <span className={styles.up} onClick={handleClickUP}>
                            <form action={addVoterUPServer}>
                                <button type="submit">        
                                    <img src="/assets/images/+.svg" alt="" />
                                </button>
                            </form>
                        </span>
                        <span className={styles.num}>{votes}</span>
                        <span className={styles.down} onClick={handleClickDOWN}>
                            <form action={addVoterDownServer}>
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
