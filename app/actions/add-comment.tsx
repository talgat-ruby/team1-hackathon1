'use server'
import { redirect } from 'next/navigation'

export async function addCommentServer(formData) {
  try {
    const response = await fetch(`http://localhost:8081/api/v1/comments?user=${process.env.NEXT_PUBLIC_CURR_USER}`, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: formData.get('content'),
        parentId: formData.get('parentId'),
        addressee: formData.get('addressee')
      }),
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
