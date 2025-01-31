import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from "../Contact";

describe("passing every testcase of ContactUs", () => {
 
    beforeAll(()=>{
        console.log("Before All");      //This runs only once , in all test cases.
    });

    beforeEach(()=>{        //This Runs before every test cases
        console.log("Before Each");
    });


  test("Contact us page loading, just wait for a while", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("button is ready to click", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2); // This makes the assertion to check for 2 input boxes
  });

});
