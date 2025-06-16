const { siteConfig } = require('./src/config/site.config');
/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: siteConfig.baseUrl,
	generateRobotsTxt: true,
	exclude: ['/polityka-prywatnosci'], 
};
