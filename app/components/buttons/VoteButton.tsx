
const VoteButton = ({ votes }) =>  {

    return (
        <>
						<div className="vote"><span className="up"></span><span className="num">{votes}</span><span className="down"></span></div>


        </>
    )
}

export default VoteButton;
