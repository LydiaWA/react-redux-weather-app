import React from 'react';
import { searchCityWeather, updateCityInput } from './searchBarActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleCityNameInput = this.handleCityNameInput.bind(this);
        this.handleQuickLink = this.handleQuickLink.bind(this)
    };
    
    handleCityNameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCityInput(value));
    }

    handleSearch(event) {
        event.preventDefault();
        const { input, dispatch } = this.props;

        if (!input) {
            return;
          }

        dispatch(searchCityWeather(input));
        
    }

    handleQuickLink(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { value } = event.target
        dispatch(searchCityWeather(value))
    }
    
    render(){
        const { input } = this.props;
        const { error } = this.props;
     
        return(
            <div>
                <div className="btn-group" role="group" aria-label="Pre selected cities">
                    <button value="San Diego" type="button" className="btn btn-secondary" onClick={this.handleQuickLink}>San Diego</button>
                    <button value="New York" type="button" className="btn btn-secondary" onClick={this.handleQuickLink}>New York</button>
                    <button value="Washington D.C" type="button" className="btn btn-secondary" onClick={this.handleQuickLink}>Washington D.C</button>
                    <button value="London" type="button" className="btn btn-secondary" onClick={this.handleQuickLink}>London</button>
                    <button value="Tokyo" type="button" className="btn btn-secondary" onClick={this.handleQuickLink}>Tokyo</button>
                </div>
            
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="San Diego" 
                        aria-label="cityName" 
                        aria-describedby="button-addon2"
                        value={ input }
                        onChange={ this.handleCityNameInput }
                        />
                    
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            id="button-addon2"
                            onClick={ this.handleSearch }
                            >Go!
                        </button>
                    { error && <p className='error-message'>{ error.message }</p>}
                    </div>
                </div>
            </div> 
        );
    }
}