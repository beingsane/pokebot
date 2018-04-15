import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../Menu';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Menu {...props}>
    {children}
  </Menu>
);

describe('<Menu />', () => {
  it('should render Menu', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.menu').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.menu').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
