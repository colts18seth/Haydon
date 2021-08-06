import { useState, useEffect } from 'react';
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

    const INITIAL_DATA = {
        ton60: 0,
        ton50: 0,
        ton40: 0,
        totalSecTons: 0,
        avgSpeed: 500
    }

    const [totalTonsOfSurge, setTotalTonsOfSurge] = useState(Number(localStorage.getItem("totalTonsOfSurge") || 10000));
    const [lastUpdate, setLastUpdate] = useState(localStorage.getItem("lastUpdate") || 0);
    const [timeUntilEmpty, setTimeUntilEmpty] = useState(0);
    const [data, setData] = useState(INITIAL_DATA);

    useEffect(() => {
        const findTimeUntilEmpty = () => {
            const timeLeft = Math.round(100 * (totalTonsOfSurge / data.avgSpeed)) / 100;
            setTimeUntilEmpty(timeLeft);
        }
        findTimeUntilEmpty();
    }, [totalTonsOfSurge, data.avgSpeed])

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setData(data => ({
            ...data,
            [id]: Number(value)
        }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        //get total tons for each truck type
        const total60 = data.ton60 * 60;
        const total50 = data.ton50 * 50;
        const total40 = data.ton40 * 40;

        //update totalTonsOfSurge with total
        const total = total60 + total50 + total40;
        setTotalTonsOfSurge(totalTonsOfSurge + total - data.totalSecTons);

        //set time of last update
        const date = new Date().toLocaleString();
        setLastUpdate(date);

        //save data to localStorage
        localStorage.setItem("lastUpdate", `${date}`);
        localStorage.setItem("totalTonsOfSurge", `${totalTonsOfSurge}`);

        setData(INITIAL_DATA);
    }

    return (
        <FormInputs>

            <label htmlFor="avgSpeed">
                Average Sec. Speed:
                <input
                    onChange={(e) => handleChange(e)}
                    id="avgSpeed"
                    value={data.avgSpeed}
                    type="number"
                    step="10"
                    min="0"
                    max="1500"
                />
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
                <label htmlFor="ton100">60 Ton:
                    <input onChange={(e) => handleChange(e)} id="ton60" value={data.ton60} type="number" />
                </label>
                <label htmlFor="ton50">50 Ton:
                    <input onChange={(e) => handleChange(e)} id="ton50" value={data.ton50} type="number" />
                </label>
                <label htmlFor="ton40">40 Ton:
                    <input onChange={(e) => handleChange(e)} id="ton40" value={data.ton40} type="number" />
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