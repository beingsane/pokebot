import React from 'react';
import { shallow } from 'enzyme';

import MenuLabel from '../MenuLabel';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <MenuLabel {...props}>
    {children}
  </MenuLabel>
);

describe('<MenuLabel />', () => {
  it('should render MenuLabel', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.menu-label').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.menu-label').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
