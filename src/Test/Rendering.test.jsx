import { render, screen } from "@testing-library/react";
import SideBar from "../components/SideBar/SideBar";
import ProfileData from "../components/Profile/ProfileData";
import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import AdminView from "../components/AdminView/AdminView";
import AdminUser from "../components/AdminView/AdminUser";

test("renders without crashing", () => {
  render(
    <Router>
      <SideBar />
    </Router>
  );
});

test("renders Profile Data without crashing", () => {
  render(
    <Router>
      <ProfileData />
    </Router>
  );
});

test("renders Admin View without crashing", () => {
  render(
    <Router>
      <AdminView />
    </Router>
  );
});

test("renders Admin User without crashing", () => {
  render(
    <Router>
      <AdminUser />
    </Router>
  );
});
