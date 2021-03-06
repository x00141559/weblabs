
import React, {Component} from 'react';
import Select from 'react-select';
import SearchForm from '../components/SearchForm';
const options = [
  { value: 'the-irish-times', label: 'Irish News' },
  { value: 'mtv-news', label: 'Mtv Music' },
  { value: 'nfl-news', label: 'Sport news' },
  { value: 'crypto-coins-news', label: 'Crypto News'},
  { value: 'bbc-news', label: 'BBC News'}
];

export default class SearchFormSelect extends Component{
  
constructor(props){
   super(props);
      this.handleChange= this.handleChange.bind(this);

   this.state = {
	selectedOption: {
		value: "mtv-news"
	}
    


     };
       }

  formSubmitted = event => {
    // Validate input value
    if (event.target.newsSource.value != "") {
     
      this.props.setNewsSource(event.target.newsSource.value);
    }
    // prevent page reload (prevent submit)
    event.preventDefault();
  };


  handleChange = (selectedOption) => {
 
      this.setState({selectedOption});
      this.props.setNewsSource(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  
};

  render() {
         const {selectedOption} = this.state.selectedOption;

    return (
    	  <div id="search">
       
    
    	
    	   <form onSubmit={this.formSubmitted}>
      <Select
        value={selectedOption}
        onChange={this.handleChange.bind(this)}
        options={options}
        form={SearchForm}
        onSubmit={this.formSubmitted}
      />
      </form>
   
   

         <style jsx>{`
         
          button
          {
          	background-color:white;
            color: #B8B3E9;
            float: center;
            margin-left:10em;
            width:40%;
          }
            h3{
                float: center;
          }
          background-color: #E0E2DB;
          text:white;
          margin-left:4em;
          margin-right: 10em;
          margin-bottom:0em;
          padding-bottom:0em;
          font-style:new-times-roman;
          font-size:1em;
            padding: 5px 0;
            }
         form{
          float: center;
          background-color: cream;
          text:white;
          margin-left:5em;
          margin-right: 10em;
          margin-bottom:0em;
          margin-top:0em;
          padding-bottom:0em;
          padding-top:3em;
          font-style:new-times-roman;
          font-size:1em;
            padding: 5px 0;
            width:30%
           }
           li{
               list-style-type: none;
            }
           /* unvisited link */
          a:link {
              color: white;
          }

          /* visited link */
          a:visited {
              color: white;
          }

          /* mouse over link */
          a:hover {
              color: purple;
          }

          /* selected link */
          a:active {
              color: purple;
          }

       body{
        margin-left: 20em;
        margin-right: 20em;
        margin-top: auto;
       }
       h2{
        font-size:3em;
        float:center;
        color:#774E90;
        padding-left: 4em;
       }
          section{

             width: 80%;
             float:left;
            border: 1px solid #774E90;
            background-color: #BFA6CC;
            padding: 2em;
            margin: 4em;
          }
          .author {
            font-style: italic;
            font-size: 1em;

          }
          .img-article
          {
            max-width: 50%;
            
          }
        `}</style>
            </div>
    );
  }
}





SearchFormSelect.defaultProps = {
  SelectedOption: {
    value: "",
    label: "",
  
  }
};











