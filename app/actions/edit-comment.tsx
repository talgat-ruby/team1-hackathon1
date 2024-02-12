'use server'
import { redirect } from 'next/navigation'

export async function editCommentServer(formData) {
  try {

    const comid = formData.get('commentId');
    console.log('Eupdate comment:', comid);

    const response = await fetch(`http://localhost:8081/api/v1/comments/${comid}?user=${process.env.NEXT_PUBLIC_CURR_USER}`, {
      cache: 'no-store',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: formData.get('content')
      }),
    });

    if (!response.ok) {
      const body = await response.json();
      const err = new Error(body.error.message);
      throw err;
    }

    return 'Comment updated successfully';
  } catch (error) {
    console.error('Error update comment:', error);
    throw error;
  }
}
