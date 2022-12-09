import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.actions";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      img: post.img,
      title: post.title,
      author: post.author,
      authorID: post.authorID,
      content: post.content,
      likes: ++post.likes,
      id: post.id,
    };
    dispatch(addLike(postData));
    if (post.authorID === user[0].id) {
      const userData = {
        pseudo: user[0].pseudo,
        likes: ++user[0].likes,
        id: user[0].id,
      };
      dispatch(addUserLike(userData));
    }
  };

  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.svg" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
