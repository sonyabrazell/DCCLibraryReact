import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer';
import BookCreator from './BookCreator/BookCreator';

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

    createBook = (newBook) => {
        console.log('From the createBook on App component', newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book= {this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>
                <BookCreator createNewBook={this.createBook}/>
                <Footer />
            </div>
        )
    }
}

export default App;