import React from 'react';
import { shallow } from 'enzyme';

import TimelineItem from '../TimelineItem';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <TimelineItem {...props}>
    {children}
  </TimelineItem>
);

describe('<TimelineItem />', () => {
  it('should render TimelineItem', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.timeline-item').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.timeline-item').length).toEqual(1);
    expect(renderedComponent.find('.timeline-marker').length).toEqual(1);
    expect(renderedComponent.find('.timeline-content').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
