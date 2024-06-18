import { render, screen } from "@testing-library/react"
import MultipleLabelAndCheckboxes from "../Components/MultipleLabelAndCheckboxes"
import "@testing-library/jest-dom"

test("multipleLabelsAndTextboxes",()=>{
    render(<MultipleLabelAndCheckboxes/>)
    const inputs = screen.getAllByLabelText("UserName")
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})


test("multipleLabelsAndCheckboxes",()=>{
    render(<MultipleLabelAndCheckboxes/>)
    const checkbox = screen.getAllByLabelText("User-Name")
    for(let i=0;i<checkbox.length;i++){
        expect(checkbox[i]).toBeInTheDocument()
        expect(checkbox[i]).toBeChecked(true)
    }
})