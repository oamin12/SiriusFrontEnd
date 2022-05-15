import "@testing-library/jest-dom";
import { render, screen, container, fireEvent } from "@testing-library/react";
import ProfileData from "../components/Profile/ProfileData";
import { BrowserRouter } from "react-router-dom";
const MockProfilePage = () => {
    return (
      <BrowserRouter>
        <ProfileData
        key={1}
        coverphoto={""}
        profilepic={""}
        name={"user1"}
        username={"user1"}
        bio={""}
        location={""}
        website={""}
        birthdate={""}
        joineddate={""}
        followersCount={0}
        followingCount={0}
        isMe={false}
         />
      </BrowserRouter>
    );
  };
  
  describe("Testing buttons and Modals in Profile", () => {
    it("Check that follow button is in profile when its not my profile", () => {
      render(<MockProfilePage />);
      const FOllowButton = screen.queryByTestId("Follow-button");
      fireEvent.click(FOllowButton);

      
    });
    it("Check that onfollow button is clicked showing the modal", () => {
      render(<MockProfilePage />);
      const FOllowButton = screen.queryByTestId("Follow-button");
      fireEvent.click(FOllowButton);

      const FOllowingButton = screen.queryByTestId("Following-Unfollow-button");
      expect(FOllowingButton).toBeInTheDocument();
      fireEvent.click(FOllowingButton);
      const Text1 = screen.getByText(/Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected./i);
    });
  });