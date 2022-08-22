import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            voteNum : ""
        }
    }

    increaseVotes = () => {
        this.setState({
            voteNum : this.state.voteNum + "🦄"
        })
    }

    render() {
        return(
            // <div className="beast-card">
            //     <h2 className="beast-title">{this.props.title}</h2>
            //     <img className="beast-img" src={this.props.img} alt={this.props.title} title={this.props.title} onClick={this.increaseVotes} />
            //     <p className="beast-description">{this.props.description}</p>
            //     <p className="beast-description">Votes:</p>
            //     <p className="beast-description">{this.state.voteNum}</p>
            // </div>
            <Card style={{ width: '18rem' }} className="beast-card">
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} onClick={this.increaseVotes}/>
              <Card.Text className="desc">
              {this.props.description}
              </Card.Text>
              <Card.Text className="vote">
              Votes
              </Card.Text>
              <Card.Text>
              {this.state.voteNum}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default HornedBeast;
