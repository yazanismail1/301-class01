import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {
    if (this.props.HornNums.horns === "1"){
        const arr = this.props.data.filter(element => element.horns === 1);
        return arr.map((element) => (
            <HornedBeast
              key={element._id}
              id={element._id}
              title={element.title}
              img={element.image_url}
              horns={element.horns}
              description={element.description}
              showModal={this.props.showModal}
            />
          ));
    } else if (this.props.HornNums.horns === "2"){
        const arr = this.props.data.filter(element => element.horns === 2);
        return arr.map((element) => (
            <HornedBeast
              key={element._id}
              id={element._id}
              title={element.title}
              img={element.image_url}
              horns={element.horns}
              description={element.description}
              showModal={this.props.showModal}
            />
          ));
    
    } else if(this.props.HornNums.horns === "3") {
        const arr = this.props.data.filter(element => element.horns === 3);
        return arr.map((element) => (
            <HornedBeast
              key={element._id}
              id={element._id}
              title={element.title}
              img={element.image_url}
              horns={element.horns}
              description={element.description}
              showModal={this.props.showModal}
            />
          ));
    } else if(this.props.HornNums.horns === "100") {
        const arr = this.props.data.filter(element => element.horns === 100);
        return arr.map((element) => (
            <HornedBeast
              key={element._id}
              id={element._id}
              title={element.title}
              img={element.image_url}
              horns={element.horns}
              description={element.description}
              showModal={this.props.showModal}
            />
          ));
    } else {
        return this.props.data.map((element) => (
            <HornedBeast
              key={element._id}
              id={element._id}
              title={element.title}
              img={element.image_url}
              horns={element.horns}
              description={element.description}
              showModal={this.props.showModal}
            />
          ));
    }
  }
}

export default Main;
