
"use client";


import { useState } from 'react';


const UpdateForm = ({ initialContent }) => {

    const [content, setContent] = useState(initialContent);


    const handleChange = (event) => {
        setContent(event.target.value);

        console.log('handleChange');

    };



    return (
        <>
            <form className="comment_form_Edit">
                <textarea onChange={handleChange} value={content}/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default UpdateForm;
