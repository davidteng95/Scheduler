import React from "react";
import { render, cleanup } from "@testing-library/react";
import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("does something it is supposed to do", () => {
    // ...
  });

  it("does something else it is supposed to do", () => {
    // ...
  });

  test("does something it is supposed to do", () => {
    // test code here...
  });

  //skipping tests
  xit("does something it is supposed to do", () => {
    // ...
  });
  
  //skipping tests
  // or if using test
  test.skip("does something it is supposed to do", () => {
    // ...
  });
});