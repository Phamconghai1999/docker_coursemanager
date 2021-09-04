import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <Form className="my-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            class="form-control"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            class="form-control"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            class="form-control"
            required
          />
        </Form.Group>
        <button type="submit" class="btn btn-outline-success mt-3">
          Register
        </button>
      </Form>
      <p>
        Have an account ?
        <Link to="/login">
          <Button type="button" class="btn btn-info ml-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
