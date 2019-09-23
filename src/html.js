import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noarchive" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
     <script
     dangerouslySetInnerHTML={{
        __html=`
	    (function(p,u,s,h){
	        p._pcq=p._pcq||[];
	        p._pcq.push(['_currentTime',Date.now()]);
	        s=u.createElement('script');
	        s.type='text/javascript';
	        s.async=true;
	        s.src='https://cdn.pushcrew.com/js/406ee00a82f3f85cfdf73c41ef318bea.js';
	        h=u.getElementsByTagName('script')[0];
	        h.parentNode.insertBefore(s,h);
	    })(window,document);
   	 `
     }}
     />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
