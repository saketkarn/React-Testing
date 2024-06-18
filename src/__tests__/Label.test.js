import { render, screen } from "@testing-library/react"
import Label from "../Components/Label.js"
import "@testing-library/jest-dom"

test("getByLabelText",()=>{
    render(<Label/>)
    const input=screen.getByLabelText("Username")
    expect(input).toBeInTheDocument()
})