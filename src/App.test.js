import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import SideBarFooter from "./components/SideBar/SideBarFooter";
import React from "react";

import Tweet from "./components/Tweet/Tweet";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";

test("when SideBarFooter is popUphandler function is called", () => {
  let handleClick = jest.fn();
  render(<SideBarFooter handleClick={handleClick} />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(handleClick).toBeCalled();
  screen.debug();
});
test("renders without crashing", () => {
  render(
    <Router>
      <Tweet />
    </Router>
  );
});
test("renders without crashing", () => {
    render(
      <Router>
        <SideBar />
      </Router>
    );
  });
