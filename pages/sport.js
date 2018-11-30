// This is the Link API


import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
var dateFormat = require('dateformat');
// import React from 'react';
import SearchForm from '../components/SearchForm';

const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
const defaultNewsSource = 'nfl-news';

async function getNews(url) {

  // try fetch and catch any errors
  try {
    // Make async call
    const res = await fetch(url);
    // get json data when it arrives
    const data = await res.json();
    // return json data
    return (data);
  } catch (error) {
    // return error if it occurs
    return (error);
  }
}
export default class Sport extends React.Component{
 

//Use constructor ro get the props and set state
  constructor(props){
    super(props)
    //State variables
    this.state = {
      newsSource: "",
      url: "",
      articles: []
    }
  }

  setNewsSource = (input) => {
    this.setState = ({
      newsSource: input,
      url: `https://newsapi.org/v2/top-headlines?sources=${input}&apiKey=${apiKey}`
    })
  }

  searchNewsAPI = (event) => {
    // set state values - this will trigger an update and componentDidUpdate
    this.setState({
      // Get the link text
      newsSource: `${event.target.innerText}`,
      // Build the search URL using the link name
      url: `https://newsapi.org/v2/${event.target.name}&apiKey=${apiKey}`
    })
    console.log(this.state.url);
  }


  render() {

       // if state.articles is empty copy props to it
       if (this.state.articles.length == 0) {
        this.state.articles = this.props.articles;
      }

      return (
   
        <div>
            { /* Add the SearchForm component */}
        { /* Pass the setNewsSource function as a prop with the same name*/}
        <SearchForm setNewsSource={this.setNewsSource} />
        { /* Example search links - note using name attribute for parameters(!!) */}
        <ul className="newsMenu">
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?country=ie">Top Headlines Ireland</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?country=ie&category=business">Business News Ireland</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="everything?q=technology">Technology News</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?country=ie&category=weather">Weather in Ireland</a></li>
        </ul>
        
             { /* Display a title based on source */}
        <h3>{this.state.newsSource.split("-").join(" ")}</h3>
        <div>
          { /* Iterate through articles using Array map) */}
          { /* Display author, publishedAt, image, description, and content */}
          { /* for each story. Also a link for more.. */}
          {this.state.articles.map((article, index) => (
            <section key={index}>
              <h3>{article.title}</h3>
             {/*Wrapping the formatdate method arounf article.published*/}
              <p className="author">{article.author} {this.formatDate(article.publishedAt)}</p>
              <img src={article.urlToImage} alt="article image" className="img-article"></img>
              <p>{article.description}</p>
              <p>{article.content}</p>
                {/*A simple method of acessing the full url*/}
             <p><Link href={article.url}>Read More</Link></p>
             
            </section>
          ))}
        </div>

           <style jsx>{`
        .newsMenu{
          float: center;
          background-color: #BFA6CC;
          text:white;
          margin-left:4em;
          margin-right: 10em;
          display:flex;
          font-style:new-times-roman;
          font-size:1em;
          margin-top:0em;
            padding: 5px 0;
            text-align: center;
            border-left: 1px solid #fff;
            border-right: 1px solid #ccc;
       
            box-sizing: border-box;

           }
           li{
               list-style-type: none;
                     font-size: 0.8em;
            display: block;
            text-decoration: none;
            color: black;
            padding: 5px 0;
            font-weight:bold;
           
            padding-right:1em;
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

  //
  // Get initial data on server side using an AJAX call
  // This will initialise the 'props' for the News page
  //    
  static async getInitialProps(response) {

    // Build the url which will be used to get the data
    // See https://newsapi.org/s/the-irish-times-api
    const defaultUrl = `https://newsapi.org/v2/top-headlines?sources=${defaultNewsSource}&apiKey=${apiKey}`;

    // Get news data from the api url
    const data = await getNews(defaultUrl);

    // If the result contains and articles array then it is good so return articles
    if (Array.isArray(data.articles)) {
      return {
        articles: data.articles
      }
    }
    // Otherwise it contains an error, log and redirect to error page (status code 400)
    else {
      console.error(data)
      if (response) {
        response.statusCode = 400
        response.end(data.message);
      }
    }
  }

  // componentDidUpdate is called when the page state or props re updated
  // It can be over-ridden to perform other functions when an update occurs
  // Here it fetches new data using this.state.newsSource as the source
  async componentDidUpdate(prevProps, prevState) {

    // Check if newsSource url has changed to avoid unecessary updates 
    if (this.state.url !== prevState.url) {

      // Use api url (from state) to fetch data and call getNews()
      const data = await getNews(this.state.url);

      // If the result contains and articles array then it is good so update articles
      if (Array.isArray(data.articles)) {
        // Store articles in state
        this.state.articles = data.articles;
        // Force page update by changing state (make sure it happens!)
        this.setState(this.state);
      }
      // Otherwise it contains an error, log and redirect to error page (status code 400)
      else {
        console.error(data)
        if (response) {
          response.statusCode = 400
          response.end(data.message);
        }
      }
    }
  } // End componentDidUpdate


  formatDate = (input) => {
    let date = new Date(input);
    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November', 'December');
    var day  = week[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hours = date.getHours();
    let mins = date.getMinutes().toString().padStart(2,'0');
    let secs = date.getSeconds();
   
    let output =  `${day} ${month} ${year} ${hours}:${mins} ${secs}s`;

   
   return output.toString();
  }



}  