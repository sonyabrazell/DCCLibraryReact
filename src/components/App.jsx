import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';


class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "An Ember in the Ashes", author: "Sabaa Tahir"},
            {title: "Throne of Glass", author: "Sarah J. Maas"},
            {title: "An Heir Comes to Rise", author: "C.C. Peñaranda"},
            {title: "Sky in the Deep", author: "Adrienne Young"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length) {
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        )
    }
}

export default App;