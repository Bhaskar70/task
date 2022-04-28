import React from "react";
import "./App.css";
function Form() {
    return (
        <form>
            <label>
                firstName:
                <input type="text" name="fname" />
            </label><br />
            <label>
                userName:
                <input type="text" name="uname" />
            </label><br />
            <label>
                date of birth:
                <input type="date" name="dob" />
            </label><br />
            <label>
                phone number:
                <input type="number" name="phone number" />
            </label><br />
            <label>
                Email:
                <input type="email" name="email" />
            </label><br />
            <label>
                country:
                <input type="text" name="country" />
            </label><br />
            <label>
                state:
                <input type="text" name="state" />
            </label><br />
            <label>
                city:
                <input type="text" name="city" />
            </label><br />

           <input type="submit" value="Submit" />

        </form>
    )
}
export default Form;