import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";

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
            {`(function(d, t) {
                            var g = d.createElement(t),
                            s = d.getElementsByTagName(t)[0];
                            g.src = "https://cdn.pushalert.co/integrate_3e9b24642db9c8a6d094dea1a8ffd9a9.js";
                            s.parentNode.insertBefore(g, s);
              }(document, "script"));`}
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
