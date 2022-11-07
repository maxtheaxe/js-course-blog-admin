import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";

function Posts() {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	const loadPosts = () => {
		setLoading(true);
		client.get("/posts")
			.then((res) => setPosts(res.data))
			.finally(() => setLoading(false));
	}

	useEffect(() => {
		loadPosts()
	}, []);

	const handleDelete = async (id) => {
		if (window.confirm('Are you sure to delete this post?')) {
			await client.delete(`/posts/${id}`)
			loadPosts()
		}
	}

	if (loading) {
		return (
			<div className="ui text active loader">Loading</div>
		)
	}

	return (
		<>
			<Link to={`/posts/new`}>
				<button className="ui primary basic button">New Post</button>
			</Link>
			<table className="ui loading celled table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Created At</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post._id}>
							<td data-label="Title">{post.title}</td>
							<td data-label="Created At">{post.createdAt}</td>
							<td data-label="Actions">
								<Link to={`/posts/${post._id}`}>
									<button className="ui primary basic button">Edit</button>
								</Link>
								<button
									className="ui negative basic button"
									onClick={() => handleDelete(post._id)}
								>
										Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Posts