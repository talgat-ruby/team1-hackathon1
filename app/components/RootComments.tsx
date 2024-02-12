
"use server";

import Commentslist from "./Commentslist";




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


  return <Commentslist data={loaderData} CURR_USER={process.env.NEXT_PUBLIC_CURR_USER}/>;

}