import React from 'react';
import ReactDOM from 'react-dom';
import UiComponent from './Components/UiComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UiComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
