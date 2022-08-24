import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./Data";
import SelectedBeast from "./selectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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

  render() {
    return (
      <div>
        <Header />
        <div className="cards">
          <Main 
          data={data} 
          showModal={this.showModal} />
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
