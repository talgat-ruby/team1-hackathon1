import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";




const ChildComments = (item_replies) => {

	return (
		<>
			<article className="comment" data-key={item_replies.id} data-parent-id={item_replies.id}>
				<header>
					<VoteButton votes={item_replies.likes} />

					<h2 className="author">{item_replies.author}</h2>
					<time className="date">{item_replies.duration}</time>

					<ReplyButton />
					<DeleteButton />
					<EditButton />

				</header>
				<div className="content">{item_replies.content}</div>
			</article>
		</>
	)
}

export default ChildComments;
