"use client";
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
						<div className="vote"><span className="up" onClick={handleClickUP}>+
                            <form action={addVoterUPServer}>
                                <button type="submit">Add UP</button>
                            </form>
                        </span>
                        <span className="num">{votes}</span><span className="down" onClick={handleClickDOWN}>-
                            <form action={addVoterDownServer}>
                                <button type="submit">Add DOWN</button>
                            </form>
                        </span></div>


        </>
    )
}

export default VoteButton;
