import React from 'react';
import { shallow } from 'enzyme';

import Heading from '../Heading';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Heading {...props}>
    {children}
  </Heading>
);

describe('<Heading />', () => {
  it('should render Heading', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.heading').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.heading').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
