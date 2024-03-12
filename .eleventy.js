// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("getImage", function() {
    return `
    <div x-data="{picture: $fetchjson('https://dummyjson.com/products/1', jsonItem='thumbnail')}">
      <img alt="image1" x-bind:src="picture">
    </div>
    <div x-data>
      <span x-text="await $fetchjson('https://dummyjson.com/products/1', jsonItem='category')"></span>
    </div>
    `
  })
};