// This is the Link API
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

// Pass this content as 'props' to child components
const Index = props => (
 


  <div>

  <h3>Latest News</h3>

    <ul>
            <li><Link href="/index"><a>Home</a></Link></li>
            <li><Link href="/news"><a>News</a></Link></li>
            <li><Link href="/business"><a>Business</a></Link></li>
            <li><Link href="/sport"><a>Sport</a></Link></li>
            <li><Link   href="/music"><a>Music</a></Link></li>
            <li><Link   href="/financial"><a>Finance</a></Link></li>
           </ul>

  <div>
  
  <ul>
    {props.shows.map(({show}) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>{show.name}</a>
        </Link>
      </li>
    ))}
  </ul>
  </div>




        <style jsx>{`
       
        h3{

            padding-left:9em;
            color:#582A72;
            background-color:#E0E2DB;
            margin-top:0;
            margin-left:3.5em;
            margin-right:8.5em;
            padding-bottom:2em;
          }
          li {
            font-style: 'Arial'
            font-size: 2em;
            font-weight: bold;

            width: 300px;
            border: 2px solid #9775AA;
            padding: 25px;
            margin: 25px;
            float:left;
            list-style: none;
            text-decoration:none;
            background-color:#E0E2DB;
          }
          .img-article
          {
            max-width: 50%;
          }
        `}</style>
  </div>

        

);


Index.getInitialProps = async function() {

  const url = 'https://api.tvmaze.com/search/shows?q=batman';

  const res = await fetch(url)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index