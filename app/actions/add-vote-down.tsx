'use server'

import { error } from "console";


export async function addVoterDownServer(formData) {

  const commentId = formData.get('commentId');
  const rate = formData.get('rate');

  const stri = JSON.stringify({ "rate": Number(rate), "commentId": Number(commentId) });


  try {
    const response = await fetch(`http://localhost:8081/api/v1/likes?user=${process.env.NEXT_PUBLIC_CURR_USER}`, {
      cache: 'no-store',
      method: 'POST',      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "rate": Number(rate), "commentId": Number(commentId) }),
      
    });


    // console.log(response.status, response.statusText );

    if (!response.ok) {
      const body = await response.json();
      const err = new Error(body.error.message);

      await Promise.reject(err);
    }


  } catch (error) {
    console.error('Error post fetch vote down:', error);
  }

  return 'you post vote down'
}