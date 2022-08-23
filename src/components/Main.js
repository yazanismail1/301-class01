import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

    render(){
        return(
            this.props.data.map(element => 
                <HornedBeast 
                    key = {element._id}
                    id = {element._id}
                    title = {element.title}
                    img = {element.image_url}
                    description = {element.description}
                    stateUpdate = {this.props.showModalCard}
                    toGetData = {this.props.toGetData}
                /> 
            )
        )
    }
}

export default Main;
