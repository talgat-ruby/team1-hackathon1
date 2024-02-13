"use client";
import styles from '../styles/comment.module.css';

import DeleteButton from "../components/buttons/DeleteButton";
import ReplyButton from "../components/buttons/ReplyButton";
import EditButton from "../components/buttons/EditButton";
import VoteButton from "../components/buttons/VoteButton";
import UpdateForm from "../components/forms/UpdateForm";
import DeleteForm from "../components/forms/DeleteForm";



import { useState } from 'react';


const ClientChildComments = ({ data, CURR_USER }) => {

	console.log(data);

	const [editingCommentId, setEditingCommentId] = useState(null);
	const [deletingCommentId, setDeletingCommentId] = useState(null);


	const handleEditClick = (commentId) => {

		console.log('handleEditClick');
		setEditingCommentId(commentId);

	};

	const handleDeleteClick = (commentId) => {

		console.log('handleDeleteClick');
		setDeletingCommentId(commentId);

	};

	return (
		<>
			{data.map((item) => (
				<article className={styles.comment} data-key={item.id} key={item.id}>
					<header className={styles.header}>

						<img src={item.avatarUrl} className={styles.avatar} />
						<h2 className={styles.author}>{item.author}</h2>

						{CURR_USER === item.author ? <div className={styles.you}>you</div> : ''}

						<time className={styles.date}>{item.duration}</time>

					</header>


					<div className={styles.content}>

						{editingCommentId === item.id ? (
							<UpdateForm
								initialContent={item.content} item_id={item.id}

							/>
						) : (
							item.content
						)}

					</div>


					<div className={styles.box_collection}>
						<VoteButton votes={item.likes} commentId={item.id} />


						<div className={styles.box_method}>


							{CURR_USER === item.author ? (
								<DeleteButton onClickerDelete={() => handleDeleteClick(item.id)} />
							) : (
								''
							)}

							{deletingCommentId === item.id ? (
								<DeleteForm
									item_id={item.id}

								/>
							) : (
								'')}

							{CURR_USER === item.author ? (
								<EditButton onClickerEdit={() => handleEditClick(item.id)} />
							) : (
								''
							)}

							{CURR_USER !== item.author ? <ReplyButton /> : ''}


						</div>
					</div>
					




				</article>
			))}

		</>

	);
};

export default ClientChildComments;