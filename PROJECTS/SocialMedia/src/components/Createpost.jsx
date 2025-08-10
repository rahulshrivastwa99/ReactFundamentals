import { useState, useContext } from "react";
import { PostList } from "../store/post-list-store";

const Createpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reactions, setReactions] = useState(0);
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState("");

  const { addPost } = useContext(PostList);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      reactions: parseInt(reactions) || 0,
      userId: userId || "user-" + Math.floor(Math.random() * 1000),
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    addPost(newPost);

    // Show alert when post is created
    // alert("Post is created successfully!");

    // Reset form
    setTitle("");
    setContent("");
    setReactions(0);
    setUserId("");
    setTags("");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell us more about it"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Initial Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          value={reactions}
          onChange={(e) => setReactions(e.target.value)}
          placeholder="0"
          min="0"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID (optional)"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="tag1, tag2, tag3"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};

export default Createpost;
