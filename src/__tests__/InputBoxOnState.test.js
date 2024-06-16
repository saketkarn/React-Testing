import { fireEvent, render, screen } from "@testing-library/react"
import InputBoxOnState from "../Components/InputBoxOnState.js"

test("On Change event testing",()=>{
    render(<InputBoxOnState/>)
    let input=screen.getByRole("textbox")
    fireEvent.change(input,{target:{value:'a'}})
    expect(input.value).toBe("a")
})