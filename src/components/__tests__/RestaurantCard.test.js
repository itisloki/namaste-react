import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import RestaurantCard, { WithPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from '../mocks/resCardMocks.json';

it("Should render restaurant components", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const restaurant = screen.getByText("KFC");

    expect(restaurant).toBeInTheDocument();
})

const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

it("Should render restaurant components", () => {
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);

    const resLabel = screen.getByText("Promoted");

    expect(resLabel).toBeInTheDocument();
})