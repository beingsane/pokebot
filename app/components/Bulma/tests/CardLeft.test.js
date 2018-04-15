import React from 'react';
import { shallow } from 'enzyme';

import CardLeft from '../CardLeft';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <CardLeft {...props}>
    {children}
  </CardLeft>
);

describe('<CardLeft />', () => {
  it('should render CardLeft', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.media-left').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.media-left').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
