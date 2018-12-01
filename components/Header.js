import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Header = () => (
    <div>
        <h1 className="title">Daily News Feed     <FontAwesomeIcon icon="newspaper" /></h1>
           <div>

  </div>
        <style jsx>{`
            icon{
                padding-left:7em;
                color: purple;
            }

           .body{
               color: #B8B3E9;
               background:#B8B3E9;
            }
            h1.title {

                font-family: "Arial";

                float: center;
                color: #3D1255;
                padding: 5px;
                padding-left:400px;
                background:#B8B3E9;
                margin-bottom:0;
                padding-bottom:1em;
                padding-top:1em;
                margin-left:2em;
                margin-right:5em;
            }


        `}</style>
    </div> 
 )
 
 export default Header;