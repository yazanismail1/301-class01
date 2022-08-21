import React from "react";

class HornedBeast extends React.Component {
    render() {
        return(
            <div className="beast-card">
                <h2 className="beast-title">{this.props.title}</h2>
                <img className="beast-img" src={this.props.img} alt={this.props.title} title={this.props.title} />
                <p className="beast-description">{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;
