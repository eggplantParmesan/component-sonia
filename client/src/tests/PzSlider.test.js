import React from 'react';
import { shallow } from 'enzyme';
import PzSlider from '../PzSlider.jsx';

const items = [{
  id: 4, productName: 'Sleek Fresh Tuna', productDescription: 'Enim odio vitae. Vel dignissimos omnis cum aut quibusdam.', color: 'yellow', price: 231, imageURL: 'https://s3-us-west-1.amazonaws.com/pictures-hrsf/download+(7).jpeg', rating: 4, reviewNumber: 186, isPrime: 1,
}];

describe('PzSlider', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PzSlider debug />);
    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<PzSlider item={items} />);
    expect(component).toMatchSnapshot();
  });
  it('renders PzElement component', () => {
    const wrapper = shallow(
      <PzSlider item={items} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
