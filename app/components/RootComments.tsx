
import ChildComments from "./ChildComments";

import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";
import UpdateForm from "../components/forms/UpdateForm";


const getData = async () => {
    try {
        // https://api.stackexchange.com/docs/advanced-search#order=desc&sort=activity&title=next.js&filter=!6WPIomqlomSf5&site=stackoverflow&run=true
      const response = await fetch('https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow');

      if(!response.ok){
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      return data.items; 


    } catch (error) {
      console.error('Error fetching:', error);
    }
  };



  export default async function RootComments()   {

    const loaderData = await getData();

    return (
        <>

        {loaderData.map((item) => (

        <article className="comment" data-key={item.question_id} key={item.question_id}>
            <header>

            <VoteButton votes={item.score}/>

                <h2 className="author">{item.owner.display_name}</h2>
                <time className="date">{item.creation_date}</time>

				
                <ReplyButton/>
				<DeleteButton/>
                <EditButton/>
				

            </header>
            <div className="content">
                    {item.title}
                
                <UpdateForm/>

            </div>
        
            <ChildComments answer_count={item.answer_count} comment_id={item.question_id}/>

            

        
        </article>

        ))}

        </>
    )
}