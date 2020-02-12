import React from 'react'
import {Helmet} from "react-helmet";

 const Head = ({title,description,canonical}) =>{
        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                
                 {/* <link rel="canonical" href={canonical} /> */}
            </Helmet>
            </div>
        )
  
}
export default  Head;
