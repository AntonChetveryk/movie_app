import React from "react";
import { withAuth } from "../../../hoc/withAuth";
import { Modal, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  render() {
    const { auth, authActions } = this.props;
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={authActions.showLoginModal}
        >
          Login
        </button>
        <Modal isOpen={auth.isShowModal} toggle={authActions.showLoginModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default withAuth(Login);
