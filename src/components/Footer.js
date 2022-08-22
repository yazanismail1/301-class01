import React from 'react';

const year = new Date().getFullYear();

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "Yazan Alfarra"
        }
    }

    changeAuthor = () => {
        let newAuthor = prompt("Enter your name to be the author 😉!");

        if (newAuthor.length > 0){
            this.setState({
                name : newAuthor
            })
        } else {
            this.setState({
                name : this.state.name
            })
        }
    }

    render() {
        return (
            <footer onClick={this.changeAuthor}>
            <p className='footer'>&copy; All rights resevered | {this.state.name} | {year}</p>
            </footer>
        )
    }
}

export default Footer;
