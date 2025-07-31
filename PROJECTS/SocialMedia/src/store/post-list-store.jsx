import { createContext, useReducer } from "react";
import Postlist from "../components/Postlist";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...currPostList];
    case "DELETE":
      return currPostList.filter((post) => post.id !== action.payload);
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({ type: "ADD", payload: post });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE", payload: postId });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
