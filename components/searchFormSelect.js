
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

  handleChange = (selectedOption) => {
    
      this.props.setState(event.target.selectedOption.value);
    console.log(`Option selected:`, selectedOption.value);
  }
  render() {
         const {selectedOption} = this.state;

    return (
    	
      <Select
        value={selectedOption.value}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
















// render(){
// 		
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];
// 	}

	
//  //return (
//       // <SearchFormSelect setNewsSource={this.setNewsSource}
//       //   value={selectedOption}
//       //   onChange={this.handleChange}
//       //   options={options}
    
//       ///>
//     ///);
//   //}
// }

