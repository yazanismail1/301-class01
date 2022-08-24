import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteNums: "",
    };
  }

  increaseVotes = () => {
    this.setState({
      voteNums: this.state.voteNums + "🦄",
    });
  };

  render() {
    return (
      <Card style={{ width: "18rem" }} className="beast-card">
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={this.increaseVotes}
          />
          <Card.Text className="desc">{this.props.description}</Card.Text>
          <Card.Text className="vote">Votes</Card.Text>
          <Card.Text>{this.state.voteNums}</Card.Text>
          <Button
            onClick={() => {
              this.props.showModal(
                this.props.title,
                this.props.img,
                this.props.description
              );
            }}
          >
            Expand
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
