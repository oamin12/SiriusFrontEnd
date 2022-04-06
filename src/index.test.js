import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import SideBarFooter from "./components/SideBar/SideBarFooter";
test("testSideBarFooter", ()=>{
    let handleClick = jest.fn();
render(<SideBarFooter handleClick = {handleClick}/>)
const btn = screen.getByRole('button');
fireEvent.click(btn);
expect(handleClick).toBeCalled();
})
test("SideBar", ()=>{
    render(<BrowserRouter>
        <SideBar/>
    </BrowserRouter>)
})