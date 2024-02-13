
"use client";

import { editCommentServer } from '../../actions/edit-comment';

import { useState } from 'react';


const UpdateForm = ({ initialContent, item_id }) => {

    const [content, setContent] = useState(initialContent);
    const [idichnik, setItem_id] = useState(item_id);
    const [submitted, setSubmitted] = useState(false);


    const handleChange = (event) => {
        setContent(event.target.value);

        console.log('handleChange');

    };

    const handleSubmit = async (event) => {
        console.log('handleSubmit');
        setSubmitted(true);       
    };

    return (
        <>
            {!submitted ? (
                <form onSubmit={handleSubmit} action={editCommentServer} className="comment_form_Edit">
                    <textarea onChange={handleChange} name="content" value={content} />
                    <input type="hidden" name="commentId" value={idichnik} />


                    <button type="submit">Update</button>
                </form>
            ) : (
                <div>{content}</div>
            )}
        </>
    )
}

export default UpdateForm;
