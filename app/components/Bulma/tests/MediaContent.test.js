import React from 'react';
import { shallow } from 'enzyme';

import MediaContent from '../MediaContent';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <MediaContent {...props}>
    {children}
  </MediaContent>
);

describe('<MediaContent />', () => {
  it('should render MediaContent', () => {
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
