// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// import React from 'react';
import SearchForm from '../components/SearchForm';

export default class News extends React.Component{
  
//Use constructor ro get the props and set state
  constructor(props){
    super(props)
    //State variables
    this.state = {
      newsSource: "",
      articles: []
    }
  }

  async componentDidUpdate(prevProps,prevSate){
    console.log(`update news: ${this.state.source}`);
    if(this.state.source !== prevSate.source) {
      const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
      const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      this.state.articles = data.articles;
      this.setState(this.state);
    }
  }
  formatDate = (input) => {
    let date = new Date(input);
    // 
    return date.toString();
  }

  setNewsSource = (input) => {
    this.setState({
      newsSource: input
    }

    )
  }
  //Method to render the page
  render(){
    //If state.articles is empty then copy value from props
    if(this.state.articles.length == 0){
      this.state.articles = this.props.articles;
    }
  
  

  //Return the page
  return (
    <div>

      <SearchForm setNewsSource={this.setNewsSource}/>
  
    <h3> News from {this.state.newsSource.split("-").join(" ")}</h3>
    <div>
  


    {this.state.articles.map((article,index) => (
      <section key={index}>
      <h3>{article.title}</h3>
      <p className="author">{article.author} {this.formatDate(article.publishedAt)}</p>
      <img src={article.urlToImage} alt="article image" className="img-article"></img>
      <p>{article.description}</p>
      <p>{article.content}</p>
      <p><Link href="/story"><a>Read More</a></Link></p>
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

//Get initial data on server side using an AJAX call
// This will initialise the props for the News page
//Note that getIntialProps() is called before the constructor
static async getInitialProps(){
  //News source
  const source = 'the-lad-bible';
  //(free version) API key from https://newsapi.org/
  const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
  //Build the url which will be used to get the data
  const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(`Show data fetched. Count ${data.articles.length}`);
  return {
    articles: data.articles
  }
}

}

//
 
// //https://newsapi.org/v2/top-headlines?sources=the-lad-bible&apiKey=7b5bfb90c5e5474ba7910d596b4f2114
// 

// // Pass this content as 'props' to child components
// const News = props => (
//     <div>
//         <h2>News from {source.split("-").join(" ")}</h2>
// {props.articles[12].author}
//         <div>
//           {props.articles.map(article, index) => (
//             <section>
//               <h3>{article.title}</h3>
//               <p className="author">{article.author} {this.formatDate(article.publishedAt)}</p>

//           <img src={article.urlToImage} alt="article image" className="img-article"></img>
//               <p>{article.description}</p>
//               <p>{article.content}</p>

//               <p><Link href="/story?index=12">Read More</Link></p>
//             </section>
//           ))}
//         </div>

//    

//   News.getInitialProps = async function() {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(`Show data fetched. Count: ${data.articles.length}`);
//     return {
//       articles: data.articles
//     }
//   }
 
// export default News;


