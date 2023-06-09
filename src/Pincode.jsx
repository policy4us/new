import { useContext } from "react"
import { FormContext } from "./FormContext"

const Pincode = () => {
    const {father,mother} = useContext(FormContext)
  return (
    <div className="container wrap-pin d-flex flex-column justify-content-center">
        <h2 className="text-center mb-5 mt-3">Where do you live</h2>
        <label>Where do you live?</label>
        <input type="text" />
        {father||mother?<><label >Where your parents live</label>
        <input type="text" />
        <label><input type="checkbox"/> Same as mine</label></>:''}
        <label>Where can we reach you</label>
        <input type="text" />
        <button className="btn btn-danger mt-5 mb-3">Continue</button>
    </div>
  )
}

export default Pincode