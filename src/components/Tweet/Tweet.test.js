import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from "./Tweet";
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { fireEvent } from '@testing-library/react';
import { getByTitle } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Tweet/></Router>, div);
});

//   test('when Like is Clicked', () => {
//   let handleLike = jest.fn();
//   render(<IconButton Dummy = {handleLike}/>)
//   const btn = screen.getByTitle('LikeButton');
//   fireEvent.click(btn);
//   expect(handleLike).toBeCalled();
// })
