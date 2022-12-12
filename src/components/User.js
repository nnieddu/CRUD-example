import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
// import pp from "../assets/pp.png";
import ppReal from "../assets/ppr.png";

const User = () => {
  const user = useSelector((state) => state.userReducer);

	// const today = new Date();
  // const birthDate = new Date("1994/06/06");
  // var age = today.getFullYear() - birthDate.getFullYear();
  // const month = today.getMonth() - birthDate.getMonth();

  // if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  //   age--;
  // }

  return (
      <div className="user">
        <img src={ppReal} alt="pp" />
        <h4>{!isEmpty(user[0]) && user[0].pseudo}</h4>
        {/* <p>Age : {age} ans</p> */}
        <p>
          Like{!isEmpty(user[0]) && user[0].likes > 1 ? "s" : null} :{" "}
          {!isEmpty(user[0]) && user[0].likes}
        </p>
      </div>
  );
};

export default User;
