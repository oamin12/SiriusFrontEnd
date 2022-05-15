import "@testing-library/jest-dom";
import { render, screen, container, fireEvent } from "@testing-library/react";
import Tweet from "../components/Tweet/Tweet";
import IconSchedule from "../components/Home/Icons/schedule/IconSchedule";
import { BrowserRouter } from "react-router-dom";
const MockTweet = () => {
  return (
    <BrowserRouter>
      <Tweet 
            key={1}
            id={1}
            name={"user1"}
            userName={"user1"}
            content={""}
            avatar={""}
            image={""}
            video={''}
            likeCount={1}
            repliesCount={1}
            retweetCount={1}
            
      />
    </BrowserRouter> 
  );
};

const MockSchedule = () => {
    return (
      <BrowserRouter>
        <IconSchedule />
      </BrowserRouter>
    );
  };
  

describe("Testing buttons and Modals in Tweets",() =>
{
    it("Should open PopOver for Tweet when pressing on more gorizon" , () => {
        render(<MockTweet />);
        const MoreTweet = screen.queryByTestId("More-Tweet");
        expect(MoreTweet).toBeInTheDocument();
        fireEvent.click(MoreTweet);

        const Text1 = screen.getByText(/Follow/i); 
        const Text2 = screen.getByText(/Block/i); 
        const Text3 = screen.getByText(/Mute/i); 
        const Text4 = screen.getByText(/Report/i); 
        
    }); 

    it("Should open Modal for schedule in post tweet" , () => {
        render(<MockSchedule />);
        const Schedule = screen.queryByTestId("Schedule-button");
        expect(Schedule).toBeInTheDocument();
        fireEvent.click(Schedule);

        const text = screen.getByText(/Eastern European Standard Time/i);
        const closeButton = screen.queryByTestId("close-button");
        expect(closeButton).toBeInTheDocument();
        fireEvent.click(closeButton);
        const TimeText = screen.queryByTestId("Time-text");
        expect(TimeText).toBeNull(); 
    });  
});