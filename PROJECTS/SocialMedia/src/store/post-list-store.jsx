import { createContext, useReducer } from "react";
import Postlist from "../components/Postlist";

export const PostList = createContext({
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
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

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

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Post 1",
    content: "Hi Developer",
    reactions: 10,
    userId: "user-9",
    tags: ["Reactjs", "Nodejs"],
  },

  {
    id: 2,
    title: "Post 2",
    content: "Hello Coder",
    reactions: 15,
    userId: "user-11",
    tags: ["DSA", "DynamicProgramming"],
  },
];

export default PostListProvider;
