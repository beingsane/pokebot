import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../Modal';

const children = <p>Paragraph</p>;
const renderComponent = (props) => shallow(
  <Modal {...props}>
    {children}
  </Modal>
);

describe('<Modal />', () => {
  it('should render Modal', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.modal').length).toEqual(1);
  });

  it('should have classnames', () => {
    const renderedComponent = renderComponent({
      isActive: true,
    });
    expect(renderedComponent.find('.modal').length).toEqual(1);
    expect(renderedComponent.find('.modal-background').length).toEqual(1);
    expect(renderedComponent.find('.modal-card').length).toEqual(1);
    expect(renderedComponent.find('.message').length).toEqual(1);
    expect(renderedComponent.find('.message-body').length).toEqual(1);
    expect(renderedComponent.find('.is-active').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
