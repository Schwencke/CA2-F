import { useState } from "react";
export default function CreateUser({ facade }) {
    const init = { username: "", password: "" };
    const [credentials, setCredentials] = useState(init);
   
    const createUsr = (evt) => {
      evt.preventDefault();
      facade.createUser(credentials.username, credentials.password);
    }
    const onChange = (evt) => {
      setCredentials({ ...credentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <div>
        <form onChange={onChange} >
          <input className="login-input"  placeholder="User Name" id="username" />
          <input className="login-input"  type="password" placeholder="Password" id="password" />
          <button className="login-btn" onClick={createUsr}>Create</button>
        </form>
      </div>
    )
   
  }