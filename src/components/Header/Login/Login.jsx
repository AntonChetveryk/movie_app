import React from "react";
import AppContextHOC from "../../HOC/AppContextHOC";
import { Modal, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={this.props.showLoginModal}
        >
          Login
        </button>
        <Modal
          isOpen={this.props.isShowModal}
          toggle={this.props.showLoginModal}
        >
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AppContextHOC(Login);
