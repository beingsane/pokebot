import React from 'react';
import { shallow } from 'enzyme';

import Timeline from '../Timeline';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Timeline {...props}>
    {children}
  </Timeline>
);

describe('<Timeline />', () => {
  it('should render Timeline', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.timeline').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.timeline').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
