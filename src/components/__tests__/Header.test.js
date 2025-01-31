import { fireEvent, render,screen} from "@testing-library/react"; // ✅ Added screen
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router"; // ✅ Correct Import
// import "text-encoding"; // ✅ Ensure TextEncoder is available
import "@testing-library/jest-dom";



test("should render the login button in Header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "login"});
    
//    const loginButton = screen.getByText("login");
    expect(loginButton).toBeInTheDocument();

});


test("should render the login button in Header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "login"});
    fireEvent.click(loginButton)
    

    const logoutButton = screen.getByText("logout");
    fireEvent.click(logoutButton);
    
   
    expect(logoutButton).toBeInTheDocument();
});

test("should render the cart in Header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartLink = screen.getByText(/cart \(0 items\)/i);
expect(cartLink).toBeInTheDocument();

});