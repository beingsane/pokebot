import React from 'react';
import { shallow } from 'enzyme';

import MenuList from '../MenuList';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <MenuList {...props}>
    {children}
  </MenuList>
);

describe('<MenuList />', () => {
  it('should render MenuList', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.menu-list').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.menu-list').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
