import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleName : "Horned Beasts"
        }
    }

    changeTitle = () => {
        if (this.state.titleName === "Horned Beasts") {
            this.setState({
                titleName : "🤨 YOU SHOULD PRESS ON THE IMGS 🤨"
            })
        } else {
            this.setState({
                titleName : "Horned Beasts"
            })
        }
    }

    render() {
        return (
            <header onClick={this.changeTitle}>
                <h1 className='header'>{this.state.titleName}</h1>
            </header>
        )
    }
}

export default Header;
