import React from 'react';
import { shallow } from 'enzyme';

import Column from '../Column';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Column {...props}>
    {children}
  </Column>
);

describe('<Column />', () => {
  it('should render Column', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.column').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      isHiddenTouch: true,
      isNarrow: true,
      isSidebar: true,
      offset: '1',
      span: '1',
    });
    expect(renderedComponent.find('.column').length).toEqual(1);
    expect(renderedComponent.find('.is-hidden-touch').length).toEqual(1);
    expect(renderedComponent.find('.is-narrow').length).toEqual(1);
    expect(renderedComponent.find('.is-sidebar').length).toEqual(1);
    expect(renderedComponent.find('.is-offset-1').length).toEqual(1);
    expect(renderedComponent.find('.is-1').length).toEqual(1);
  });

  it('should have style', () => {
    const renderedComponent = renderComponent({
      isNarrow: true,
      width: '200',
    });
    expect(renderedComponent.find('.column').prop('style')).toHaveProperty('width', '200px');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
