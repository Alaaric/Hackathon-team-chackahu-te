import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [contentComment, setContentComment] = useState("");
  const [titleComment, setTitleComment] = useState("");
  const { users } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  }, [showComment]);

  const postComment = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`, {
        title: titleComment,
        content: contentComment,
        user_id: users.id,
      })
      .catch((err) => console.error(err));
    e.target.reset();
    setShowComment(false);
  };

  return (
    <div className="comments-container-global">
      <h1>Commentaires</h1>
      <div className="comments-container">
        {comments.map((comment) => (
          <div className="comment-information" key={comment.id}>
            <h2>{comment.title}</h2>
            <p>
              {comment.content} <br />
              <br />
              {comment.fullname}
            </p>
          </div>
        ))}
      </div>
      <div className="div-container">
        {showComment ? (
          <form className="post-comment" onSubmit={postComment}>
            <label htmlFor="comment-title">Titre du commentiare</label>
            <input
              type="text"
              name="firstName"
              placeholder="Insérez votre prénom"
              onChange={(e) => setTitleComment(e.target.value)}
              required
            />
            <label htmlFor="comment-content">Mon commentaire:</label>
            <textarea
              name="comment-content"
              id="comment-content"
              onChange={(e) => setContentComment(e.target.value)}
            />

            <button type="submit">Poster mon commentaire</button>
          </form>
        ) : (
          <button type="button" onClick={setShowComment}>
            Poster un commentaire
          </button>
        )}
      </div>
    </div>
  );
}
