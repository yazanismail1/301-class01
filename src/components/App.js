import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./Data";
import SelectedBeast from "./selectedBeast";
import FilterForm from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      horns: "",
      title: "",
      img: "",
      desc: "",
    };
  }

  showModal = (title, img, desc) => {
    this.setState({
      show: true,
      title: title,
      img: img,
      desc: desc,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  HornNums = (e) => {
    this.setState({
        horns : e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <FilterForm 
            HornNums={this.HornNums}
        />
        <div className="cards">
          <Main 
          data={data} 
          showModal={this.showModal}
          HornNums={this.state}
          />
          <SelectedBeast
            show={this.state.show}
            selectedBeastData={this.state}
            closeModal={this.closeModal}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
