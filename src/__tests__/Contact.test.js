import Contact from "../Components/Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Should load heading from the contact page",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading")

    //Assertion
    expect(heading).toBeInTheDocument()
})

test("Should load button inside contact page",()=>{
    render(<Contact/>)
    // const button=screen.getByRole("button")
    const button=screen.getByText("Submit")

    //Assertion
    expect(button).toBeInTheDocument()
})

test("Should load the input from from the contact component",()=>{
    render(<Contact/>)
    const name=screen.getByPlaceholderText("name")
    expect(name).toBeInTheDocument()
})

test("Should load 2 input boxes in contact page",()=>{
    render(<Contact/>)

    //Querying
    const inputBoxes=screen.getAllByRole("textbox")

    //Assertion
    expect(inputBoxes.length).toBe(2)
})