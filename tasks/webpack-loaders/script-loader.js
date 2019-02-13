module.exports = () => {
  const { src } = require("../build-config");

  let rule = {
    test: /\.(js|jsx)$/,
    include: [src.appPath],
    use: ["babel-loader"]
  };

  return rule;
};
