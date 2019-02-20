let specContext = require.context('../../src', true, /(\.spec)\.js$/);
specContext.keys().forEach(specContext);

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({adapter: new Adapter()});
