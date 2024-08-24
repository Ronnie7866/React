import Post from "./Post.jsx";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list.jsx";

export default function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
