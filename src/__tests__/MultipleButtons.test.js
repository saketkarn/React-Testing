import { render, screen } from "@testing-library/react"
import MultipleButtons from "../Components/MultipleButtons.js"
import "@testing-library/jest-dom"

test("Multiple buttons should be rendered on the screen",()=>{
    render(<MultipleButtons/>)
    let button=screen.getAllByRole("button")
    for(let i=0;i<button.length;i++){
        expect(button[i]).toBeInTheDocument()
    }
})