
import ChildComments from "./ChildComments";

import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";
import UpdateForm from "../components/forms/UpdateForm";


const getData = async () => {
    try {

      const response = await fetch('http://localhost:8081/api/v1/comments?user=amyrobson');

      if(!response.ok){
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      return data.data; 


    } catch (error) {
      console.error('Error fetching:', error);
    }
  };



  export default async function RootComments()   {

    const loaderData = await getData();

    return (
        <>

        {loaderData.map((item) => (

        <article className="comment" data-key={item.id} key={item.id}>
            <header>

            <VoteButton votes={item.likes}/>

                <img src={item.avatarUrl} className="avatar" />

                <h2 className="author">{item.author}</h2>
                <time className="date">{item.duration}</time>

				
                <ReplyButton/>
				        <DeleteButton/>
                <EditButton/>
				

            </header>
            <div className="content">
                    {item.content}
                
                <UpdateForm/>

            </div>
        
            <ChildComments item_replies={item.replies} />

            

        
        </article>

        ))}

        </>
    )
}