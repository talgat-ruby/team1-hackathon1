
import ChildComments from "./ChildComments";

import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";
import UpdateForm from "../components/forms/UpdateForm";


const RootComments = () =>  {

    return (
        <>
        <article className="comment" data-key="id_1">
            <header>

            <VoteButton/>

                <h2 className="author">amyrobson</h2>
                <time className="date">1 month ago</time>

				
                <ReplyButton/>
				<DeleteButton/>
                <EditButton/>
				

            </header>
            <div className="content">
                BASTY COMMENT Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.

                
                <UpdateForm/>

            </div>
        
            <ChildComments/>

            

        
        </article>
        </>
    )
}

export default RootComments;
