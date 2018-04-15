import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '../MenuItem';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <MenuItem {...props}>
    {children}
  </MenuItem>
);

describe('<MenuItem />', () => {
  it('should render MenuItem', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('li').length).toEqual(1);
  });

  it('should have link', () => {
    const renderedComponent = renderComponent({ href: 'https://www.google.ca/' });
    expect(renderedComponent.find('a').length).toEqual(1);
    expect(renderedComponent.find('a').prop('href')).toEqual('https://www.google.ca/');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
