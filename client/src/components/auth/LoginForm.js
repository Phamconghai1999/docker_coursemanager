import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
  //context
  const { loginUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  const { username, password } = loginForm;
  const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async event => {
    event.preventDefault();
    const loginData = await loginUser(loginForm);
    console.log(loginData);

  }

  return (
    <>
      <Form className="my-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            className="form-control"
            value={username}
            onchange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            value={password}
            onchange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <button type="submit" className="btn btn-outline-success mt-3">
          Login
        </button>
      </Form>
      <p>Don't have account ?
        <Link to="/register">
          <Button type="button" className="btn btn-info ml-2">Register</Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
