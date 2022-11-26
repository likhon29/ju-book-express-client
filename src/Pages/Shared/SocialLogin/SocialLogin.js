import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSIgnIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          role: "buyer",
        };
        saveUser(userInfo);
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  const saveUser = (user) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(data.email);
        console.log(data);
        navigate("/");
      });
  };
  return (
    <div className="btn btn-outline w-full">
      <p className="text-center">
        <button onClick={handleGoogleSIgnIn} className="btn btn-ghost">
          Continue with Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
