import React, { useState } from "react";

function PostForm({ onSubmit, initialValues }) {
	const [title, setTitle] = useState(initialValues?.title)
	const [body, setBody] = useState(initialValues?.body)

	return (
		<form
			className="ui form"
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit({ title, body })
			}}
		>
			<div className="field">
				<label>Title</label>
				<input
					type="text"
					name="title"
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</div>
			<div className="field">
				<label>Body</label>
				<textarea
					name="body"
					placeholder="Body"
					onChange={(e) => setBody(e.target.value)}
					value={body}
				/>
			</div>
			<button className="ui button" type="submit">Save</button>
		</form>
	)
}

export default PostForm