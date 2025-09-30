/** @type {import('next').NextConfig} */
module.exports = {
	async redirects() {
		return [
			{
			   source: '/blog/:slug*',
			   destination: 
'https://reppards-blog.vercel.app/:slug*',
			  permanent: true,
			},
		  ]
		},
	   }
