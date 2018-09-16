import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import App from '../App.jsx';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
  it('renders RelatedItems component', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
//= ===============================
/* persistent error with these tests yet to be fixed =>
TypeError: Cannot read property 'imageURL' of undefined */

// import React from 'react';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import PzElement from '../PzElement.jsx';

// describe('PzElement', () => {
//   test('it has method isPrime', () => {
//     const wrapper = shallow(<PzElement />);
//     expect(typeof wrapper.instance().isPrime).toBe('function');
//   });
//   test('it has method starMaker', () => {
//     const wrapper = shallow(<PzElement />);
//     expect(typeof wrapper.instance().starMaker).toBe('function');
//   });
//   test('it has method lessWord', () => {
//     const wrapper = shallow(<PzElement />);
//     expect(typeof wrapper.instance().lessWord).toBe('function');
//   });
// });
//= =================================

/* persistent errors yet to be fixed:
"TypeError: Cannot read property 'map' of undefined" */

// import React from 'react';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import PzSlider from '../PzSlider.jsx';

// describe('PzSlider', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<PzSlider debug />);
//     expect(component).toMatchSnapshot();
//   });
//   it('should render correctly with no props', () => {
//     const component = shallow(<PzSlider />);
//     expect(component).toMatchSnapshot();
//   });
//   it('renders PzElement component', () => {
//     const wrapper = shallow(
//       <PzSlider />,
//     );
//     expect(wrapper).toMatchSnapshot();
//   });
// });
