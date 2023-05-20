import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // making variable using state to hold received data from database so that we could print on screen through map function.
  const [users, setUsers] = useState([]);

  const userHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  //this function runs to send  data into database on clicking a button on a screen.
  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };

    setUsername("");
    setPassword("");

     await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    userdata() ;
  };

//making a function inside which we can fetch data from database.
const userdata = async () => {
  const get_data_response = await fetch("http://localhost:8080/demo", {
    method: "GET",
  });
  const get_data = await get_data_response.json();
  setUsers(get_data); //setting fetched data into a variable made with state.
};

//calling a data fetching function inside useEffect.
useEffect(() => {
  userdata();
}, []);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={userHandler}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={passwordHandler}
        />
        <button type="submit">log in</button>
      </form>

      <ul>
        {
        users.map((user) => (
          <li key = {user._id} >{user.username},{user.password}</li>
        ))
        }
      </ul>
    </div>
  );
};

export default App;
