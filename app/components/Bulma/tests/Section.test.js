import React from 'react';
import { shallow } from 'enzyme';

import Section from '../Section';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Section {...props}>
    {children}
  </Section>
);

describe('<Section />', () => {
  it('should render Section', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.section').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      hasTextCentered: true,
      isFluid: true,
      isFullHD: true,
      isFullWidth: true,
    });
    expect(renderedComponent.find('.section').length).toEqual(1);
    expect(renderedComponent.find('.has-text-centered').length).toEqual(1);
    expect(renderedComponent.find('.is-fluid').length).toEqual(1);
    expect(renderedComponent.find('.is-fullhd').length).toEqual(1);
    expect(renderedComponent.find('.is-fullwidth').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
