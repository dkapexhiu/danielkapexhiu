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
	  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
	  <Helmet>
	  {`<script>
	          var OneSignal = window.OneSignal || [];
		  OneSignal.push(function() {
		    OneSignal.init({
		      appId: "ba2d8c27-2734-4ea0-a307-a0b139094493",
		      notifyButton: {
			enable: true,
		      },
		    });
		  });
		</script>`}
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
