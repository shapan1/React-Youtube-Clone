import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//create a new component which should produce some HTML.

const API_KEY = 'AIzaSyBLlheKMfJbooRZVK7DwdaYOzKQVGpjuJU';

YTSearch ({key : API_KEY, term: 'wakeboards'}, function(data){
    console.log(data);
});

class App extends Component {
    render() {
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}

// tke the component and put it into the page.
ReactDOM.render(<App />, document.querySelector('.container'));