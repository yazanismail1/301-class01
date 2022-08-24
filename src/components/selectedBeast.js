import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{this.props.selectedBeastData.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.selectedBeastData.img}
            alt={this.props.selectedBeastData.title}
          />
          <p>{this.props.selectedBeastData.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
