import { Sum } from "../Components/Sum"

test("Test the sum component for two numbers",()=>{
    let result=Sum(5,6)
    expect(result).toBe(11)
})