import React from 'react';
import { shallow } from 'enzyme';

import TimelineHeader from '../TimelineHeader';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <TimelineHeader {...props}>
    {children}
  </TimelineHeader>
);

describe('<TimelineHeader />', () => {
  it('should render TimelineHeader', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.timeline-header').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.timeline-header').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
