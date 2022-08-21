import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main'

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="cards">   
                <Main />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;