var plugins = [{
      plugin: require('/home/daniel/Desktop/danielkapexhiu/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/daniel/Desktop/danielkapexhiu/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/daniel/Desktop/danielkapexhiu/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-136011478-1"},
    },{
      plugin: require('/home/daniel/Desktop/danielkapexhiu/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Daniel Kapexhiu - Web Developer","short_name":"Daniel","description":"Daniel Kapexhiu. Mobile Web Specialist and Web Developer creating useful mobile web designs","start_url":"/","background_color":"#a0d8f1","theme_color":"#a0d8f1","display":"standalone","icons":[{"src":"/favicons/android-icon-192x192.png","sizes":"192x192","type":"image/png"}]},
    },{
      plugin: require('/home/daniel/Desktop/danielkapexhiu/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/daniel/Desktop/danielkapexhiu/node_modules/gatsby-plugin-google-adsense/gatsby-ssr'),
      options: {"plugins":[],"publisherId":"ca-pub-4767188844129685"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
