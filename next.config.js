const composePlugins = require('next-compose-plugins');
const mdxEnhanced = require('next-mdx-enhanced');
const optimizedImages = require('next-optimized-images');


module.exports = composePlugins([
    mdxEnhanced({
        layoutPath: './layouts'
    }),
    optimizedImages, {
        optimizeImagesInDev: true,
        imagesPublicPath: `/nextsite/_next/static/images/`,
    }
], {
    /* Normal JS Config*/
    basePath: '/nextsite',
    images: {
        domains: ["github.com"],
    },
})