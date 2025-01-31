import { useContext, useState } from "react";
import {Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import '../css/LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const[redirect,setRedirect]=useState(false);
  const [messageType, setMessageType] = useState("");
  const { setUserInfo } = useContext(UserContext);
  
  // const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo); 
        setMessage("Login Successful");
        setMessageType("success");
        // setTimeout(() => navigate("/"), 2000);
        setRedirect(true); // Use navigate here for better internal routing
      } else {
        setMessage("Invalid username or password");
        setMessageType("error");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setMessage("Login failed. Please try again.");
      setMessageType("error");
    }
  }
  if(redirect){
    console.log("Redirect to home..");
    return <Navigate to="/Home"></Navigate>
  }

  return (
    <form className="login" id="login-form" onSubmit={login}>
      <div>
        {message && (
          <div className={`alert ${messageType}`}>
            {message}
          </div>
        )}
        <fieldset>
  <legend><h2>Login</h2></legend>
  <label>Username:</label>
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(ev) => setUsername(ev.target.value)}
  />
  <label>Password:</label>
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(ev) => setPassword(ev.target.value)}
  />
  <button type="submit">Login</button>
  <pre id='p'>
    Don't have an account? <Link to="/register">Create a new account</Link>
  </pre>
</fieldset>

        </div>
    </form>
  );
}
