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
  margin: 20px;
`

function Form() {
    const [totalTonsOfSurge, setTotalTonsOfSurge] = useState(localStorage.getItem("totalTonsOfSurge") || "NA");
    const [lastUpdate, setLastUpdate] = useState(localStorage.getItem("lastUpdate") || "NA");
    const [timeUntilEmpty, setTimeUntilEmpty] = useState(0);
    const [data, setData] = useState({
        ton100: 0,
        ton50: 0,
        ton40: 0,
        totalSecTons: 0
    });

    //? add useEffect to update timeUntilEmpty

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setData(data => ({
            ...data,
            [id]: Number(value)
        }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        //set time of last update
        const date = new Date().toLocaleString();
        setLastUpdate(date);

        //save data to localStorage
        localStorage.setItem("lastUpdate", `${date}`);
    }

    return (
        <FormInputs>

            <label htmlFor="AvgSpeed">
                Average Sec. Speed:
                <input id="AvgSpeed" value="500" type="number" step="10" min="0" max="1500" />
            </label>

            <label htmlFor="timeUntilEmpty">
                Time Until Empty:
                <input readOnly id="timeUntilEmpty" value={timeUntilEmpty + " hrs"} />
            </label>

            <label htmlFor="totalTonsOfSurge">
                Runable Tons of Surge:
                <input readOnly id="totalTonsOfSurge" value={totalTonsOfSurge} />
            </label>

            <hr />

            <h4>End of Shift:</h4>

            <label htmlFor="totalSecTons">
                Total Sec. Tons:
                <input onChange={(e) => handleChange(e)} id="totalSecTons" value={data.totalSecTons} type="number" />
            </label>

            <label htmlFor="totalLoadsToJaw">
                Total Loads To The Jaw:
                <label htmlFor="ton100">100 Ton:
                    <input onChange={(e) => handleChange(e)} id="ton100" value={data.ton100} type="number" />
                </label>
                <label onChange={(e) => handleChange(e)} htmlFor="ton50">50 Ton:
                    <input id="ton50" value={data.ton50} type="number" />
                </label>
                <label onChange={(e) => handleChange(e)} htmlFor="ton40">40 Ton:
                    <input id="ton40" value={data.ton40} type="number" />
                </label>
            </label>

            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>

            <p>
                {`Last Updated On: ` + lastUpdate}
            </p>

        </FormInputs>
    );
}

export default Form;