import React from 'react';
import { shallow } from 'enzyme';

import Container from '../Container';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Container {...props}>
    {children}
  </Container>
);

describe('<Container />', () => {
  it('should render Container', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.container').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      hasTextCentered: true,
      isFluid: true,
      isFullHD: true,
      isFullWidth: true,
    });
    expect(renderedComponent.find('.container').length).toEqual(1);
    expect(renderedComponent.find('.has-text-centered').length).toEqual(1);
    expect(renderedComponent.find('.is-fluid').length).toEqual(1);
    expect(renderedComponent.find('.is-fullhd').length).toEqual(1);
    expect(renderedComponent.find('.is-fullwidth').length).toEqual(1);
  });

  it('should have style', () => {
    const renderedComponent = renderComponent({
      isFullHeight: true,
    });
    expect(renderedComponent.find('.container').prop('style')).toHaveProperty('height', '100%');
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
