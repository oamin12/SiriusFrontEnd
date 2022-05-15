import "@testing-library/jest-dom";
import { render, screen, container, fireEvent } from "@testing-library/react";
import UsersCard from "../components/AdminView/UsersCard"
import AdminUser from "../components/AdminView/AdminUser"
import { BrowserRouter } from "react-router-dom";
const MockProfilePage = () => {
  return (
    <BrowserRouter>
      <UsersCard />
    </BrowserRouter>
  );
}; 


describe("Testing buttons and Modals in UserCard",() =>
{
    
    it("Should open Modal for Ban when pressing button Ban" , () => {
        render(<MockProfilePage />);
        const BanButton = screen.queryByTestId("Ban-button");
        //const BanModalElement = screen.queryByTestId("Ban-Modal");
        //const CancelBanButton = screen.queryByTestId("cancel-button");
        expect(BanButton).toBeInTheDocument();
        fireEvent.click(BanButton); 
        const canceltext = screen.getByText(/This can't be undone and you'll ban this user/i);
        
        
        
    }); 
    //Tests opening Ban modal by checking the header of the modal  
    it("Should open Modal for statistics when pressing button Statistics" , () => {
        render(<MockProfilePage />);
        
        const statButton = screen.queryByTestId("stat-button");
        expect(statButton).toBeInTheDocument();
        fireEvent.click(statButton); 
        const Textt = screen.getByText(/User Statistics/i);
        
    }); 
    //Tests opening Ban modal by checking the header of the modal  then closing the modal by cancel button and checking that the header is not availav
    it("Should open Modal for statistics when pressing button Statistics then closing it and checking that no header" , () => {
        render(<MockProfilePage />);
        
        const statButton = screen.queryByTestId("stat-button");
        expect(statButton).toBeInTheDocument();
        fireEvent.click(statButton); 
        const Textt = screen.getByText(/User Statistics/i);
        fireEvent.click(screen.queryByTestId("cancel-stat-Modal")); 
        const HeaderStat = screen.queryByTestId("Header-stat"); 
        expect(HeaderStat).toBeNull();
        
    }); 


   
}
);
