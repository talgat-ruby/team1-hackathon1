

import CreateForm2 from "../components/forms/CreateForm";

import RootComments from "../components/RootComments";


const CommentsForm = () => {

    return (
        <>

            <section id="comments">
                <div className="wrapper">
                    <RootComments />

                    <CreateForm2 />

                </div>
            </section>

        </>
    )
}

export default CommentsForm;
