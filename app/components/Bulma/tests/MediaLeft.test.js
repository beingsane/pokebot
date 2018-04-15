import React from 'react';
import { shallow } from 'enzyme';

import MediaLeft from '../MediaLeft';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <MediaLeft {...props}>
    {children}
  </MediaLeft>
);

describe('<MediaLeft />', () => {
  it('should render MediaLeft', () => {
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
