import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            show : this.props.show,
            title : "",
            imgSrc : "",
            description : "",
        })
    }

    showCardModal = () => {
        this.setState({
            show : false,
        })
        this.props.hideCard()
        
    }

  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          <h2>{this.props.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image_url} alt={this.props.title}/>
          <p>
          {this.props.desc}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.showCardModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
