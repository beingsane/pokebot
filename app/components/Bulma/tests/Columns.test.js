import React from 'react';
import { shallow } from 'enzyme';

import Columns from '../Columns';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Columns {...props}>
    {children}
  </Columns>
);

describe('<Columns />', () => {
  it('should render Columns', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.columns').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      isGapless: true,
      isMobile: true,
      isMultiline: true,
      isWrapper: true,
    });
    expect(renderedComponent.find('.columns').length).toEqual(1);
    expect(renderedComponent.find('.is-gapless').length).toEqual(1);
    expect(renderedComponent.find('.is-mobile').length).toEqual(1);
    expect(renderedComponent.find('.is-multiline').length).toEqual(1);
    expect(renderedComponent.find('.is-wrapper').length).toEqual(1);
  });

  it('should have style', () => {
    const renderedComponent = renderComponent({
      isFullHeight: true,
    });
    expect(renderedComponent.find('.columns').prop('style')).toHaveProperty('height', '100%');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
