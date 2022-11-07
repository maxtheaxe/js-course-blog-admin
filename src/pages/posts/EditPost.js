import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../client";
import PostForm from "./components/PostForm";

function EditPost() {
  const navigate = useNavigate()
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState()

  useEffect(() => {
    client.get(`/posts/${params.id}`)
      .then((res) => {
        setPost(res.data)
        setLoading(false)
      })
  }, [params.id])

  const handleSubmit = ({ title, body }) => {
    client.patch(`/posts/${params.id}`, { title, body })
      .then(() => navigate(-1))
  }

  if (loading) {
    return (
      <div className="ui text active loader">Loading</div>
    )
  }

  return (
    <>
      <button
        className="ui button"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <h1 className="ui header">Edit Post</h1>
      <PostForm initialValues={post} onSubmit={handleSubmit} />
    </>
  )
}

export default EditPost