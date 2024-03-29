module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-136011478-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Daniel Kapexhiu - Web Developer","short_name":"Daniel","description":"Daniel Kapexhiu. Mobile Web Specialist and Web Developer creating useful mobile web designs","start_url":"/","background_color":"#a0d8f1","theme_color":"#a0d8f1","display":"standalone","icons":[{"src":"/favicons/android-icon-192x192.png","sizes":"192x192","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
