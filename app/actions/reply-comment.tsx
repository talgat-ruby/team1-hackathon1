'use server'
import { redirect } from 'next/navigation'


export async function replyCommentServer(formData) {



  try {



    let bodyContent = {};


    bodyContent = {
      content: formData.get('content'),
      addressee: formData.get('addressee'),
      parentId: Number(formData.get('parentId'))
    };





    const response = await fetch(`http://localhost:8081/api/v1/comments?user=${process.env.NEXT_PUBLIC_CURR_USER}`, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyContent),
    });

    if (!response.ok) {
      const body = await response.json();
      const err = new Error(body.error.message);
      throw err;
    }
    redirect(`/`)

    return 'Comment posted successfully';
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
}
