import "@testing-library/jest-dom";
import { render, screen, container, fireEvent } from "@testing-library/react";
import BookmarksHeader from "../components/Bookmarks/BookmarksHeader";
import { BrowserRouter } from "react-router-dom";

const MockBookmarksHeader = () => {
  return (
    <BrowserRouter>
      <BookmarksHeader />
    </BrowserRouter>
  );
};

describe("Bookmarks Header Button test", () => {
  it("the clear all bookmarks should be found and the clear button should be found", () => {
    render(<MockBookmarksHeader />);
    const moreButtonElement = screen.queryByTestId("more-button");
    expect(moreButtonElement).toBeInTheDocument();
    fireEvent.click(moreButtonElement);
    expect(screen.getByText("Clear all Bookmarks")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Clear all Bookmarks"));
    expect(screen.getByText("clear")).toBeInTheDocument();
  });
  it("when pressing cancel button modal should close", () => {
    render(<MockBookmarksHeader />);
    const moreButtonElement = screen.queryByTestId("more-button");
    fireEvent.click(moreButtonElement);
    fireEvent.click(screen.getByText("Clear all Bookmarks"));
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.queryByTestId("clear-button")).toBeNull();
  });
});
