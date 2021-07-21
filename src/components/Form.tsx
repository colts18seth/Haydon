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

function Form() {
    const [totalTonsOfSurge, setTotalTonsOfSurge] = useState(localStorage.totalTonsOfSurge || "NA");
    const [timeUntilEmpty, setTimeUntilEmpty] = useState(localStorage.timeUntilEmpty || "NA");
    const [totalLoadsToJaw, setTotalLoadsToJaw] = useState(localStorage.totalLoadsToJaw || 0);
    const [totalSecTons, setTotalSecTons] = useState(localStorage.totalSecTons || 0);
    const [lastUpdate, setLastUpdate] = useState(`Last Updated On: ` + (localStorage.lastUpdate || "NA"));

    //? handle state changes

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
            <p>
                {lastUpdate}
            </p>
        </FormInputs>
    );
}

export default Form;