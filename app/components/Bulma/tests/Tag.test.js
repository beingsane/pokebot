import React from 'react';
import { shallow } from 'enzyme';

import Tag from '../Tag';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Tag {...props}>
    {children}
  </Tag>
);

describe('<Tag />', () => {
  it('should render Tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.tag').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      isBlack: true,
      isDark: true,
      isLight: true,
      isWhite: true,
      isPrimary: true,
      isLink: true,
      isInfo: true,
      isSuccess: true,
      isWarning: true,
      isDanger: true,
      isMedium: true,
      isLarge: true,
    });
    expect(renderedComponent.find('.tag').length).toEqual(1);
    expect(renderedComponent.find('.is-black').length).toEqual(1);
    expect(renderedComponent.find('.is-dark').length).toEqual(1);
    expect(renderedComponent.find('.is-light').length).toEqual(1);
    expect(renderedComponent.find('.is-white').length).toEqual(1);
    expect(renderedComponent.find('.is-primary').length).toEqual(1);
    expect(renderedComponent.find('.is-link').length).toEqual(1);
    expect(renderedComponent.find('.is-info').length).toEqual(1);
    expect(renderedComponent.find('.is-success').length).toEqual(1);
    expect(renderedComponent.find('.is-warning').length).toEqual(1);
    expect(renderedComponent.find('.is-danger').length).toEqual(1);
    expect(renderedComponent.find('.is-medium').length).toEqual(1);
    expect(renderedComponent.find('.is-large').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
