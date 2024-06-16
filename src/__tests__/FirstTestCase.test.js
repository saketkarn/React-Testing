import { render, screen } from "@testing-library/react";
import FirstTestCase from "../Components/FirstTestCase";
import "@testing-library/jest-dom"

test("Check whether the p tag is rendered successfully or not",()=>{
    render(<FirstTestCase/>)
    const output=screen.getByText(/First React Test Case/i)  //case insensitive
    const imgTitle=screen.getByTitle('Naruto')
    expect(output).toBeInTheDocument()
    expect(imgTitle).toBeInTheDocument()
})
