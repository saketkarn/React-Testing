import { render, screen } from "@testing-library/react"
import Label from "../Components/Label.js"
import "@testing-library/jest-dom"

test("getByLabelText test case 1",()=>{
    render(<Label/>)
    const input=screen.getByLabelText("Username")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("Saket")
})

test("getByLabelText test case 2",()=>{
    render(<Label/>)
    const checkbox=screen.getByLabelText("Skills")
    expect(checkbox).toBeInTheDocument()
})