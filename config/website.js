const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Daniel Kapexhiu - Web Developer', // Navigation and Site Title
  siteTitleAlt: 'Daniel Kapexhiu', // Alternative Site title for SEO
  siteTitleShort: 'Daniel', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazingly fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://danielkapexhiu.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Daniel Kapexhiu. Mobile Web Specialist and Web Developer creating useful mobile web designs',
  author: 'Daniel', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@danielkapexhiu', // Twitter Username
  ogSiteName: 'daniel kapexhiu', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-136011478-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.blue,
  backgroundColor: tailwind.colors.blue,
}
