import React from 'react';
import { shallow } from 'enzyme';

import Figure from '../Figure';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Figure {...props}>
    {children}
  </Figure>
);

describe('<Figure />', () => {
  it('should render Figure', () => {
    const renderedComponent = renderComponent({
      src: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
    });
    expect(renderedComponent.find('.image').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      is16: true,
      is24: true,
      is32: true,
      is48: true,
      is64: true,
      is96: true,
      is128: true,
      isRounded: true,
      src: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
    });
    expect(renderedComponent.find('.image').length).toEqual(1);
    expect(renderedComponent.find('.is-16x16').length).toEqual(1);
    expect(renderedComponent.find('.is-24x24').length).toEqual(1);
    expect(renderedComponent.find('.is-32x32').length).toEqual(1);
    expect(renderedComponent.find('.is-48x48').length).toEqual(1);
    expect(renderedComponent.find('.is-64x64').length).toEqual(1);
    expect(renderedComponent.find('.is-96x96').length).toEqual(1);
    expect(renderedComponent.find('.is-128x128').length).toEqual(1);
    expect(renderedComponent.find('.is-rounded').length).toEqual(1);
  });
});
