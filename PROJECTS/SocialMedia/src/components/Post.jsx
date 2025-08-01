import { AiFillDelete } from "react-icons/ai";

const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {/* {post.reactions} */}
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          this post hasbeen reacted by {post.reactions} users
        </div>
      </div>
    </div>
  );
};

export default Post;
