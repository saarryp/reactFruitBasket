import React, {useState} from "react";

function CountingFruit({fruitName, count, setCount}) {


const decreaseCount = () => {
    if (count >0) {setCount(count - 1);
}
};
const increaseCount = () => {
setCount(count + 1)}


return (
    <fieldset>
        <label>
            <h2>{fruitName}</h2>
            <div id="bestelling">
                <button type="button" onClick={decreaseCount}>-</button>
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}/>
                <button type="button" onClick={increaseCount}>+</button>
            </div>
        </label>
    </fieldset>
);
}


export default CountingFruit;