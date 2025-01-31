import { render,screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCKS_DATA from "../mocks/resCardMocks.json"
import "@testing-library/jest-dom";

it("should render restauantcard component with props data",()=>{
  render(<ResturantCard resData={MOCKS_DATA}/>)
  const name = screen.getByText("Home Plate by EatFit");
  expect(name).toBeInTheDocument();
});