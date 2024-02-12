
import ChildComments from "./ChildComments";
import styles from '../styles/comment.module.css';

import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";
import UpdateForm from "../components/forms/UpdateForm";


const getData = async () => {
  try {

    const response = await fetch(`http://localhost:8081/api/v1/comments?user=${process.env.CURR_USER}`, {
      cache: 'no-store'
    }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data.data;


  } catch (error) {
    console.error('Error fetching:', error);
  }
};



export default async function RootComments() {

  const loaderData = await getData();

  return (
    <>

      {loaderData.map((item) => (

        <article className={styles.comment} data-key={item.id} key={item.id}>
          <header className={styles.header}>

            <img src={item.avatarUrl} className={styles.avatar} />
            <h2 className={styles.author}>{item.author}</h2>

            {process.env.CURR_USER === item.author ? <div className={styles.you}>you</div> : ''}

            <time className={styles.date}>{item.duration}</time>

          </header>
          <div className={styles.content}>
            {item.content}

            {//<UpdateForm/>
            }

          </div>

          <div className={styles.box_collection}>
            <VoteButton votes={item.likes} commentId={item.id} />

            <div className={styles.box_method}>
              {process.env.CURR_USER === item.author ? <DeleteButton /> : ''}

              {process.env.CURR_USER === item.author ? <EditButton /> : ''}
              {process.env.CURR_USER !== item.author ? <ReplyButton /> : ''}


            </div>
          </div>
          {//<ChildComments item_replies={item.replies} />
          }



        </article>

      ))}

    </>
  )
}