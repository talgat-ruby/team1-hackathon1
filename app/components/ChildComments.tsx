import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";


const ChildComments = () =>  {

    return (
        <>
                    <article className="comment" data-key="id_3" data-parent-id="id_2">
						<header>
							<VoteButton/>
							
							<h2 className="author">Mr Smith</h2>
							<time className="date">2 month ago</time>

							<ReplyButton/>
							<DeleteButton/>
               				<EditButton/>				
                            
						</header>
						<div className="content">Child Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</div>
					</article>
        </>
    )
}

export default ChildComments;
