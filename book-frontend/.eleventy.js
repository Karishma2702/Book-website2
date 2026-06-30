module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addFilter("upperCase", function(value) {
    return value.toUpperCase();
  });
  eleventyConfig.addFilter("countItems", function(value) {
    return value.length;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};