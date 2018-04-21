// in app/src/setupTests.js file
import Enzyme from 'enzyme';
// this is where we reference the adapter package we installed  
// earlier
import Adapter from 'enzyme-adapter-react-15';
// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new Adapter() });
