import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from "./Data";
import SelectedBeast from "./selectedBeast";


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show : false
        }
    }

    showModal = () => {
        this.setState({
            show: !(this.state.show)
        })
    }

    modalGetId = key => key;
    modalGetTitle = key => key;
    modalGetDesc = key => key;
    modalGetImg = key => key;

    


    render() {
        return(
            <div>
                <Header />
                <div className="cards">   
                    <Main 
                        data={data}
                        showModalCard={this.showModal}
                        toGetId={this.modalGetId}
                        toGetTitle={this.modalGetTitle}
                        toGetDesc={this.modalGetDesc}
                        toGetImg={this.modalGetImg}
                    />
                    <SelectedBeast 
                        show={this.state.show} 
                        hideCard={this.showModal}
                        test={this.modalGetTitle()}
                        // title={this.modalData.title}
                        // imgSrc={this.modalData.img_url}
                        // desc={this.modalData.description}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
