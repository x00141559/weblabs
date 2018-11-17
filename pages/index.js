// This is the Link API
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

// Pass this content as 'props' to child components
const Index = props => (
 


  <div>
  <h1>All The News</h1>

    <ul>
            <li><Link href="/index"><a>Home</a></Link></li>
            <li><Link href="/news"><a>News</a></Link></li>
            <li><Link href="/business"><a>Business</a></Link></li>
            <li><Link href="/sport"><a>Sport</a></Link></li>
            <li><Link   href="/music"><a>Music</a></Link></li>

           </ul>




        <style jsx>{`
       
        h1{

            padding-left:9em;
            color:#582A72;
          }
          li {
            font-style: italic;
            font-size: 2em;
            font-weight: bold;

            width: 300px;
            border: 25px solid #9775AA;
            padding: 25px;
            margin: 25px;
            float:left;
            list-style: none;
            text-decoration:none;
          }
          .img-article
          {
            max-width: 50%;
          }
        `}</style>
  </div>

        

);

// see https://nextjs.org/learn/basics/fetching-data-for-pages

// Index.getInitialProps = async function() {

//   const url = 'https://api.tvmaze.com/search/shows?q=batman';

//   const res = await fetch(url)
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

export default Index