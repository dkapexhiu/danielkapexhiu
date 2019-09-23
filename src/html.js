import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"

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
    <Helmet>
    <script>
		{` 
		 var _foxpush = _foxpush || []; 
		 _foxpush.push(['_setDomain', 'danielkapexhiucom']); 
		 (function(){ 
		 var foxscript = document.createElement('script'); 
		 foxscript.src = '//cdn.foxpush.net/sdk/foxpush_SDK_min.js'; 
		 foxscript.type = 'text/javascript'; 
		 foxscript.async = 'true'; 
		 var fox_s = document.getElementsByTagName('script')[0]; 
		 fox_s.parentNode.insertBefore(foxscript, fox_s);})(); 
		 `}
    </script>
</Helmet>
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
