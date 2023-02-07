const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const wordStats = require('@photogabble/eleventy-plugin-word-stats');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");


module.exports = function(config) {
    config.addPassthroughCopy("./src/img");
    config.addPassthroughCopy("./src/downloads");
    config.addPassthroughCopy("./src/css/");
    config.addPassthroughCopy("./src/js/scripts.js");
    config.addPassthroughCopy("./src/robots.txt");

    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(pluginRss);
    config.addPlugin(wordStats);
    config.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://jbwharr.is/",
        },
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };

};