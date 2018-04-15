import React from 'react';
import { shallow } from 'enzyme';

import CardContent from '../CardContent';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <CardContent {...props}>
    {children}
  </CardContent>
);

describe('<CardContent />', () => {
  it('should render CardContent', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.media-content').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.media-content').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
