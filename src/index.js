import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//create a new component which should produce some HTML.

const API_KEY = 'AIzaSyBLlheKMfJbooRZVK7DwdaYOzKQVGpjuJU';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// tke the component and put it into the page.
ReactDOM.render(<App />, document.querySelector('.container'));