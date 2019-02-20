// We use the context method on `require` which Webpack created
// in order to signify which files we actually want to require or import.
// Below, `context` will be a/an function/object with file names as keys.
// Using that regex, we scan within `src/app` and target
// all files ending with `.spec.js` and trace its path.
// By passing in true, we permit this process to occur recursively.
let mockContext = require.context('../../src', true, /(\.mock)\.js$/);
let specContext = require.context('../../src', true, /(\.spec)\.js$/);

// Get all files, for each file, call the context function
// that will require the file and load it here. Context will
// loop and require those spec files here.
mockContext.keys().forEach(mockContext);
specContext.keys().forEach(specContext);

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({adapter: new Adapter()});
