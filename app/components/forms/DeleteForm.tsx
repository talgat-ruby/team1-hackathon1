
const DeleteForm = () =>  {

    return (
        <>
                        <div className="modalWindowDelete">
                            <form className="comment_form_Delete">
                                <h3>Delete comment</h3>
                                <p className="txt">Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
                                <button type="submit">NO, CANCEL</button>								
                                <button type="submit">YES, DELETE</button>
                            </form>
                        </div>

        </>
    )
}

export default DeleteForm;
