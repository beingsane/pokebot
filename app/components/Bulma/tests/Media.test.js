import React from 'react';
import { shallow } from 'enzyme';

import Media from '../Media';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Media {...props}>
    {children}
  </Media>
);

describe('<Media />', () => {
  it('should render Media', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.media').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.media').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
