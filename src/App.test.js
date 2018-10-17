import React from 'react';
import ReactDOM from 'react-dom';
import ReactGallery from './ReactGallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactGallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
