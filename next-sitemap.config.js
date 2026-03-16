/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Use the production domain
  siteUrl: 'https://ramesys.co.uk',
  
  // Automatically generate robots.txt
  generateRobotsTxt: true,
  
  // Set change frequency for sitemap entries
  changefreq: 'weekly',
  
  // Set default priority for sitemap entries
  priority: 0.7,
  
  // Exclude admin or private routes
  exclude: ['/api/*', '/admin*', '/dashboard*'],
  
  // Configuration for robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/admin', '/dashboard'],
      },
    ],
    // Link to the generated sitemap
    additionalSitemaps: [
      'https://ramesys.co.uk/sitemap.xml',
    ],
  },
}
