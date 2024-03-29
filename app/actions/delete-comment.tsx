'use server'
import { redirect } from 'next/navigation'

export async function deleteCommentServer(formData) {
  try {

    const comid = formData.get('commentId');
    console.log('delete comment:', comid);

    const response = await fetch(`http://localhost:8081/api/v1/comments/${comid}?user=${process.env.NEXT_PUBLIC_CURR_USER}`, {
      cache: 'no-store',
      method: 'DELETE'
    });

    if (!response.ok) {
      const body = await response.json();
      const err = new Error(body.error.message);
      throw err;
    }
    redirect(`/`)

    return 'Comment delete successfully';
  } catch (error) {
    console.error('Error delete comment:', error);
    throw error;
  }
}
