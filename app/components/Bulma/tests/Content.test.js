import React from 'react';
import { shallow } from 'enzyme';

import Content from '../Content';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Content {...props}>
    {children}
  </Content>
);

describe('<Content />', () => {
  it('should render Content', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.content').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      isSmall: true,
      isMedium: true,
      isLarge: true,
    });
    expect(renderedComponent.find('.content').length).toEqual(1);
    expect(renderedComponent.find('.is-small').length).toEqual(1);
    expect(renderedComponent.find('.is-medium').length).toEqual(1);
    expect(renderedComponent.find('.is-large').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
