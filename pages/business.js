// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import React from 'react';



const source = 'business-insider-uk';
const apiKey  = '7b5bfb90c5e5474ba7910d596b4f2114';
//https://Newsapi.org/v2/top-headlines?sources=the-lad-bible&apiKey=7b5bfb90c5e5474ba7910d596b4f2114
const url = `https://Newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

// Pass this content as 'props' to child components
const Business = props => (
    <div>
        <h2>Business from {source.split("-").join(" ")}</h2>


        <div>
          {props.articles.map(article => (
            <section>
              <h3>{article.title}</h3>
              <p className="author">{article.author} {article.publishedAt}</p>
              <img src={article.urlToImage} alt="article image" className="img-article"></img>
              var dateS = {article.publishedAt};
              <p>{article.description}</p>
              <p>{article.content}</p>
              <p><Link href="http://uk.businessinsider.com/">Read More</Link></p>
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

  Business.getInitialProps = async function() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.articles.length}`);
  
    return {
      articles: data.articles
      //`${d.toDateString()} at `${d.toLocaleTimeString()}`;

    }
  }
 
export default Business;


