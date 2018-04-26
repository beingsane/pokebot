import React from 'react';
import { shallow } from 'enzyme';

import Field from '../Field';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Field {...props}>
    {children}
  </Field>
);

describe('<Field />', () => {
  it('should render Field', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.field').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      hasAddons: true,
    });
    expect(renderedComponent.find('.field').length).toEqual(1);
    expect(renderedComponent.find('.has-addons').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
