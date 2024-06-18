import { render } from "@testing-library/react"
import SnapshotComponent from "../Components/SnapshotComponent.js"

test("Snapshot component should render correctly",()=>{
    const {myContainer}=render(<SnapshotComponent/>)
    expect(myContainer).toMatchSnapshot()
})