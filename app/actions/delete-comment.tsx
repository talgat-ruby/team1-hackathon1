"use server";

export async function deleteCommentServer() {
  console.log("deleted");
  /*
  try {
    const response = await fetch(`ENDPOINT`, {
            method: 'POST',
            body: {},
        });

        if(!response.ok){
            throw new Error("Failed to fetch");
          }
        const data = await response.json();
        console.log(data);

        return data.data; 


} catch (error) {
    console.error('Error post fetch vote down:', error);
  }
  */
  return "you deleted your comment";
}
