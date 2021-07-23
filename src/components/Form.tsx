import { useState } from 'react';
import styled from 'styled-components'

const FormInputs = styled.form`
  background: white;
  padding: 20px;
  border-radius: 5px;

  label {
      display: block;
      padding: 5px;
  }
  input {
      margin-left: 10px;
      width: 50px;
      text-align: center;
  }
`

const Button = styled.button`
  background: #0055a5;
  color: white;
  border: 2px solid #0055a5;
  border-radius: 5px;
`

function Form() {
    const [totalTonsOfSurge, setTotalTonsOfSurge] = useState(localStorage.getItem("totalTonsOfSurge") || "NA");
    const [timeUntilEmpty, setTimeUntilEmpty] = useState(localStorage.getItem("timeUntilEmpty") || "NA");
    const [totalLoadsToJaw, setTotalLoadsToJaw] = useState(localStorage.getItem("totalLoadsToJaw") || 0);
    const [totalSecTons, setTotalSecTons] = useState(localStorage.getItem("totalSecTons") || 0);
    const [lastUpdate, setLastUpdate] = useState(`Last Updated On: ` + (localStorage.getItem("lastUpdate") || "NA"));

    const handleTotalTonsOfSurge = () => {
        // localStorage.setItem("totalTonsOfSurge", `${totalTonsOfSurge}`);
    }

    const handleSubmit = (e: any) => {
        //? handle Submit
        e.preventDefault();
    }

    return (
        <FormInputs>
            <label htmlFor="AvgSpeed">
                Average Sec. Speed:
                <input id="AvgSpeed" defaultValue="500" type="number" step="10" min="0" max="1500" />
            </label>
            <label htmlFor="timeUntilEmpty">
                Time Until Empty:
                <input readOnly id="timeUntilEmpty" defaultValue={timeUntilEmpty} />
            </label>
            <label htmlFor="totalTonsOfSurge">
                Runable Tons of Surge:
                <input readOnly id="totalTonsOfSurge" defaultValue={totalTonsOfSurge} />
            </label>
            <hr />
            <h4>End of Shift:</h4>
            <label htmlFor="totalLoadsToJaw">
                Total Loads To The Jaw:
                <input id="totalLoadsToJaw" defaultValue={totalLoadsToJaw} type="number" />
            </label>
            <label htmlFor="totalSecTons">
                Total Sec. Tons:
                <input id="totalSecTons" defaultValue={totalSecTons} type="number" />
            </label>
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
            <p>
                {lastUpdate}
            </p>
        </FormInputs>
    );
}

export default Form;