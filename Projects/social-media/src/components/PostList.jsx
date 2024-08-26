import Post from "./Post.jsx";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store.jsx";
import WelcomeMessage from "../components/WelcomeMessage.jsx";

export default function PostList() {
  const { postList, addInitialPost } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
