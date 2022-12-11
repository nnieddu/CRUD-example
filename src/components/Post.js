import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost } from "../actions/post.action";
import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
		console.log("e :", e)
    const postData = {
      img: post.img,
      title: e.target[0].value,
      author: user[0].pseudo,
      authorID: user[0].id,
      content: e.target[1].value,
      likes: post.likes,
      id: post.id,
    };
    dispatch(editPost(postData));
    setEditToggle(false);
  };

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img
            onClick={() => setEditToggle(!editToggle)}
            src="./icons/edit.svg"
            alt="edit"
          />
          <img
            onClick={() => {
              dispatch(deletePost(post.id)) && setEditToggle(false);
            }}
            src="./icons/delete.svg"
            alt="delete"
          />
        </div>
      )}
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
						className="titleTxtArea"
            type="text"
            defaultValue={post.title}
          />
          <img src={post.img} className="post-img" alt="img-post" />
          <textarea
            type="text"
            defaultValue={post.content}
          />
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <>
          <h2>{post.title}</h2>
          <img src={post.img} className="post-img" alt="img-post" />
          <p>{post.content}</p>
        </>
      )}
      <div className="author">
        <h5>Auteur : {post.author} </h5>
        (
        <Like post={post} />)
      </div>
    </div>
  );
};

export default Post;
