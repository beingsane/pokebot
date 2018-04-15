import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Card {...props}>
    {children}
  </Card>
);

describe('<Card />', () => {
  it('should render Card', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.card').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      isShadowless: true,
    });
    expect(renderedComponent.find('.card').length).toEqual(1);
    expect(renderedComponent.find('.is-shadowless').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
