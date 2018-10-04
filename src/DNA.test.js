import React from 'react';
import ReactDOM from 'react-dom';
import DNA from './DNA';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DNA />, div);
  ReactDOM.unmountComponentAtNode(div);
});
