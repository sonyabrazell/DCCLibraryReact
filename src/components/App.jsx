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

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                <div className="col-md-4">
                    {/*Button here to move to the previous book viewed*/}
                </div>
                <div className="col-md-4">
                    {/*Display book with cover here*/}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                </div>
                <div className="col-md-4">
                    {/*Button here to move to the next book viewed*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;