import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store.jsx";

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <img
        src={post.imageUrl || "default-image-path.jpg"} // Replace with actual default image path
        className="card-img-top"
        alt={post.title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDeleteForever />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has received the following reactions:
          <ul>
            {Object.entries(post.reactions).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
