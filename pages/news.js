// This is the Link API


import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
var dateFormat = require('dateformat');
// import React from 'react';
import SearchForm from '../components/SearchForm';

const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
const defaultNewsSource = 'the-lad-bible';

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
export default class News extends React.Component{
 

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
      url: `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
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
              <p className="author">{article.author} {article.publishedAt}</p>
              <img src={article.urlToImage} alt="article image" className="img-article"></img>
              <p>{article.description}</p>
              <p>{article.content}</p>
  
             <p><Link href={article.url}>Read More</Link></p>
              <p onClick={this.test}>click..</p>
            </section>
          ))}
        </div>
       <style jsx>{`
       
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

        
  // async componentDidUpdate(prevProps,prevSate){
  //   console.log(`update news: ${this.state.source}`);
  //   if(this.state.source !== prevSate.source) {
  //     const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
  //     const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     this.state.articles = data.articles;
  //     this.setState(this.state);
  //   }
  // }



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
  // setNewsSource = (input) => {
  //   this.setState({
  //     newsSource: input
  //   }

  //   )
  // }
  //Method to render the page
  // render(){
  //   //If state.articles is empty then copy value from props
  //   if(this.state.articles.length == 0){
  //     this.state.articles = this.props.articles;
  //   }
  
  

  // //Return the page
  // return (
  //   <div>

  //     <SearchForm setNewsSource={this.setNewsSource}/>
  
  //   <h3> News from {this.state.newsSource.split("-").join(" ")}</h3>
  //   <div>
  


  //   {this.state.articles.map((article,index) => (
  //     <section key={index}>
  //     <h3>{article.title}</h3>
  //     <p className="author">{article.author} {this.formatDate(article.publishedAt)}</p>
  //     <img src={article.urlToImage} alt="article image" className="img-article"></img>
  //     <p>{article.description}</p>
  //     <p>{article.content}</p>
  //     <p><Link href="/story"><a>Read More</a></Link></p>
  //     </section>
  //   ))}
  //   </div>
  //   
                
// } */}

// {/* //Get initial data on server side using an AJAX call
// // This will initialise the props for the News page
// //Note that getIntialProps() is called before the constructor
// static async getInitialProps(){
//   //News source
//   const source = 'the-lad-bible';
//   //(free version) API key from https://newsapi.org/
//   const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
//   //Build the url which will be used to get the data
//   const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
//   const res = await fetch(url);
//   const data = await res.json();

//   console.log(`Show data fetched. Count ${data.articles.length}`);
//   return {
//     articles: data.articles
//   }
// }

// }

//
 
// //https://newsapi.org/v2/top-headlines?sources=the-lad-bible&apiKey=7b5bfb90c5e5474ba7910d596b4f2114
// 

// // Pass this content as 'props' to child components
// const News = props => (
//     <div>
//         <h2>News from {source.split("-").join(" ")}</h2>
// {props.articles[12].author}
//         <div>
//           {props.articles.map(article, index) => ( */}
{/* //             <section>
//               <h3>{article.title}</h3>
//               <p className="author">{article.author} {this.formatDate(article.publishedAt)}</p>

//           <img src={article.urlToImage} alt="article image" className="img-article"></img>
//               <p>{article.description}</p>
//               <p>{article.content}</p>

//               <p><Link href="/story?index=12">Read More</Link></p>
//             </section>
//           ))}
//         </div> */}

{/* //    

//   News.getInitialProps = async function() { */}
{/* //     const res = await fetch(url);
//     const data = await res.json();
//     console.log(`Show data fetched. Count: ${data.articles.length}`); */}
{/* //     return { */}
{/* //       articles: data.articles
//     }
//   }
 
// export default News; */}

