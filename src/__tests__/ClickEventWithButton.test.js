import { fireEvent, render, screen } from "@testing-library/react"
import ClickEventWithButton from "../Components/ClickEventWithButton.js"
import "@testing-library/jest-dom"

test("Data should be updated on the click of the button",()=>{
    render(<ClickEventWithButton/>)
    let button=screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Updated Data")).toBeInTheDocument()
})