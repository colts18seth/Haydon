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
      width: 50px;
      text-align: center;
  }
`

//? ADD STATE MANAGMENT

function Form() {
    let TotalTonsOfSurge = localStorage.totalTonsOfSurge || 0;
    let TimeUntilEmpty = localStorage.TimeUntilEmpty || "NA";
    let TotalLoadsToJaw = localStorage.TotalLoadsToJaw || 0;
    let TotalSecTons = localStorage.TotalSecTons || 0;
    return (
        <FormInputs>
            <label htmlFor="AvgSpeed">
                Average Sec. Speed:
                <input id="AvgSpeed" defaultValue="500" type="number" step="10" min="0" max="1500" />
            </label>
            <label htmlFor="TimeUntilEmpty">
                Time Until Empty:
                <input readOnly id="TimeUntilEmpty" defaultValue={TimeUntilEmpty} />
            </label>
            <label htmlFor="RunableTonsOfSurge">
                Runable Tons of Surge:
                <input readOnly id="RunableTonsOfSurge" defaultValue={TotalTonsOfSurge} />
            </label>
            <hr />
            <h4>End of Shift:</h4>
            <label htmlFor="TotalLoadsToJaw">
                Total Loads To The Jaw:
                <input id="TotalLoadsToJaw" defaultValue={TotalLoadsToJaw} type="number" />
            </label>
            <label htmlFor="TotalSecTons">
                Total Sec. Tons:
                <input id="TotalSecTons" defaultValue={TotalSecTons} type="number" />
            </label>
        </FormInputs>
    );
}

export default Form;