// Site Navigation menu
// https://www.sitepoint.com/responsive-fluid-width-variable-item-navigation-css/
// https://www.w3schools.com/Css/css_navbar.asp

import Link from 'next/link';

const Nav = () => (
   <div>
       <nav>
           <ul>
            <li><Link href="/index"><a>Home</a></Link></li>
            <li><Link href="/news"><a>News</a></Link></li>
            <li><Link href="/business"><a>Business</a></Link></li>
            <li><Link href="/sport"><a>Sport</a></Link></li>
            <li><Link href="/music"><a>Music</a></Link></li>
             <li><Link href="/financial"><a>Finance</a></Link></li>
           </ul>
       </nav>
       {/* Define css for this page or component */}
       {/* Note back ticks `` surrounding css are required */}
       <style jsx>{`
body{
    margin-right:40em;
}
        nav {
          
            padding: 5px;
            background: #9775AA;
            border: 1px solid #ccc;
           
            width: 85%;
            float:center;
            margin-left:4em;
            margin-right:40em;
            margin-bottom:3em;
          

        }


        nav ul {
            display: flex;
            flex-direction: row;
            margin:auto;
            padding-right: 4em;
        }

        nav ul li {
            list-style: none;
            float: left;
            flex-grow: 3;

            text-align: center;
            border-left: 1px solid #fff;
            border-right: 1px solid #ccc;
            width: 16.6667%; /* fallback for non-calc() browsers */
            width: calc(100% / 9);
            box-sizing: border-box;
        }

        nav ul li:first-child {
            border-left: none;
            border-right:none;
        }

        nav ul li a {
            font-size: 0.8em;
            display: block;
            text-decoration: none;
            color: black;
            padding: 5px 0;
            font-weight:bold;
        }

        nav ul li:hover {
            background: #764B8E;
        }
        nav ul li a:hover {
            color: white;
        }

        `}</style>

    {/*<div id="tfheader">
        <form id="tfnewsearch" method="get" action="http://www.google.com">
                <input type="text" class="tftextinput" name="q" size="21" maxlength="120"/>
                <input type="submit" value="search" class="tfbutton"/>
        </form>
    <div class="tfclear"></div>
    </div>*/}
   </div> 




)

export default Nav;

