// Import Dependencies
import React, { Component } from "react";
import searchFormSelect from './searchFormSelect';
//
// Define SearchForm Class
//
export default class SearchForm extends Component {
  // constructor accepts props and initialises state
  constructor(props) {
    super(props);

    this.state = {};
  }
  formSubmitted = event => {
    // Validate input value
    if (event.target.newsSource.value != "") {
     
      this.props.setNewsSource(event.target.newsSource);
    }
    // prevent page reload (prevent submit)
    event.preventDefault();
  };
  render() {
    return (
      <div>
        {/* Search Input */}
        <div id="search">
       
          <h3>Enter newsapi.org source</h3>
          {/* Note event handler */}
          <form onSubmit={this.formSubmitted}>
            {/* The input field */}

            <input
              name="options"
              placeholder="News Source name"
              type="Select"
              select="options"
             
            />
            {/* Button click will trigger submit */}
            <button>Update News</button>
            <options/>
          </form>
        </div>
          <style jsx>{`
            h3{
                float: center;
          background-color: #BFA6CC;
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
          background-color: #BFA6CC;
          text:white;
          margin-left:4em;
          margin-right: 10em;
          margin-bottom:0em;
          padding-bottom:0em;
          font-style:new-times-roman;
          font-size:1em;
            padding: 5px 0;
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