import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from "./components/Utils";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoNN from "../src/assets/logoNN.svg";

const App = () => {
  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand style={{marginLeft: "20px"}}>
            <img
              alt="pp"
              src={logoNN}
              width="50"
              height="50"
            />
          </Navbar.Brand>
      	<h1>CRUD</h1>
				<User />
        </Container>
      </Navbar>
      <div className="body">
        <PostForm />
        <div className="content">
          <div className="post-container">
            {!isEmpty(posts) &&
              posts.map((post, index) => <Post post={post} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
