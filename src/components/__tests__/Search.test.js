import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestrolist.json";
import { act } from "react";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});


it("should render the data from searching", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: /search/i });
  const searchInput = screen.getByTestId("searchInput");


  fireEvent.change(searchInput, { target: { value: "cafe" } });

  fireEvent.click(searchBtn);

  await waitFor(() => {
    const cards = screen.getAllByTestId("searchInput");
    // Assert 
    expect(cards.length).toBeGreaterThan(0);

    cards.forEach((card) => {
      expect(card).toHaveTextContent("cafe");
    });
  });
});


it("should render the top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardBeforeFilter = screen.getAllByTestId("rescard");
     expect(cardBeforeFilter.length).tobe(8);

     const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurant"});
     fireEvent.click(topRatedBtn);
     const cardsAfterFilter = screen.getAllByTestId("rescard");
     expect(cardsAfterFilter.length).tobe(4);
  });
  