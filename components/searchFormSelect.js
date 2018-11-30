
import React, {Component} from 'react';
import Select from 'react-select';
import SearchForm from '../components/SearchForm';
const options = [
  { value: 'the-irish-times', label: 'Irish News' },
  { value: 'mtv-news', label: 'Mtv Music' },
  { value: 'nfl-sport', label: 'Sport news' }
];

export default class SearchFormSelect extends Component{
  
constructor(props){
   super(props);
   this.state = {
    selectedOption: " "
     };
       }

  formSubmitted = event => {
    // Validate input value
    if (event.target.selectedOption.value != "") {
     
      this.props.setNewsSource(event.target.selectedOption.value);
    }
    // prevent page reload (prevent submit)
    event.preventDefault();
  };
  handleChange = (selectedOption) => {
    
      this.setState(event.target.selectedOption);
    console.log(`Option selected:`, selectedOption);
  }
  render() {
         const {selectedOption} = this.state;

    return (
    	  <div id="search">
       
          <h3>Enter newsapi.org source</h3>
    	
    	   <form onSubmit={this.formSubmitted}>
      <Select
        value={selectedOption.value}
        onChange={this.handleChange}
        options={options}
        form={SearchForm}

      />
      </form>
           <button>Update News</button>
         </div>
    );
  }
}















