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
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoNN}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
        <Container>
      	<h1>CRUD Exemple</h1>
        </Container>
        <Container>
				<User />
        </Container>
        </Container>
      </Navbar>
      <div className="myBody">
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
