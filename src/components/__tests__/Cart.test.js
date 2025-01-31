import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RestaurantMenu from "../Restaurant";
import MOCK_DATA from "../mocks/mockRestaurantmenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "./Cart";
import Header from "../Header"; // Make sure this is the correct import
import "@testing-library/jest-dom";

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should load Restaurant Menu Component", async () => {
  render(
    <Provider store={appStore}>
      <Header />
      <RestaurantMenu />
      <Cart />
    </Provider>
  );

  // Wait for the menu header to appear
  const accrodianHeader = await screen.findByText("Veg Pizza(14)");
  fireEvent.click(accrodianHeader);

  // Wait for food items to appear after clicking
  await waitFor(() => {
    expect(screen.getAllByTestId("foodItems").length).toBe(14);
  });

  // Check if the cart starts at 0 items
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  // Wait for add buttons to appear and click
  const addBtns = await screen.findAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  // Verify the cart updates correctly
  await waitFor(() => {
    expect(screen.getByText("Cart (1 item)")).toBeInTheDocument();
  });

  fireEvent.click(addBtns[1]);

  await waitFor(() => {
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  });
});
