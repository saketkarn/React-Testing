import { render, screen } from "@testing-library/react";
import InputBox from "../Components/InputBox";
import "@testing-library/jest-dom"

test("The input box from the InputBox component should load correctly",()=>{
    render(<InputBox/>)
    let ip=screen.getByRole("textbox")
    let ipPlaceholder=screen.getByPlaceholderText("Enter User Name")
    expect(ip).toBeInTheDocument()
    expect(ipPlaceholder).toBeInTheDocument()
    expect(ip).toHaveAttribute("name","username_textbox")
    expect(ip).toHaveAttribute("type","text")
})