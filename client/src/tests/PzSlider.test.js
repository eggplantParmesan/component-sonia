// import React from 'react';
// import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';
// import { render } from 'react-dom';
// import PzSlider from '../PzSlider.jsx';

// jest.mock('react-dom');
// const items = {
//   id: 4, productName: 'Sleek Fresh Tuna', productDescription: 'Enim odio vitae. Vel dignissimos omnis cum aut quibusdam.', color: 'yellow', price: 231, imageURL: 'https://s3-us-west-1.amazonaws.com/pictures-hrsf/download+(7).jpeg', rating: 4, reviewNumber: 186, isPrime: 1,
// };

// describe('PzSlider', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<PzSlider debug props={items} />);
//     expect(component).toMatchSnapshot();
//   });
//   it('should render correctly', () => {
//     expect(render).toHaveBeenCalledWith(
//       <PzSlider props={items} />, 'element-node',
//     );
//     expect(render).toHaveBeenCalledTimes(1);
//   });
//   it('should render correctly with no props', () => {
//     const component = shallow(<PzSlider props={items} />);
//     expect(shallowToJson(component)).toMatchSnapshot();
//   });
//   it('renders PzElement component', () => {
//     const wrapper = shallow(
//       <PzSlider item={items} />,
//     );
//     expect(wrapper).toMatchSnapshot();
//   });
// });
