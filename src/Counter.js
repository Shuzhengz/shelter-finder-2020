import React, { useState } from 'react'

const Counter = (props) => {

    const [maleCount, setMaleCount] = useState(0)
    const [femaleCount, setFemaleCount] = useState(0)

    function alterCount(shouldIncrement, id) {
        // ID VALUE 0 = Male, 1 = Female
        if (shouldIncrement) {
            switch (id) {
                case 0:
                    setMaleCount(maleCount + 1)
                    break
                case 1:
                    setFemaleCount(femaleCount + 1)
                default:
                    console.log("Switch fell through.")
            }
        } else {
            switch (id) {
                case 0:
                    setMaleCount(maleCount - 1)
                    break
                case 1:
                    setFemaleCount(femaleCount - 1)
                default:
                    console.log("Switch fell through.")
            }
        }
    }

    return (
        <>
            <ul class="flex-container">
                <li class="flex-item">
                    <div class="li-container">
                        <h1 class="counter-title">Male</h1>
                        <div class="counter-container">
                            <button class="flex-button subtract" id="subtractmale" onClick={() => alterCount(false, 0)}>-</button>
                                <span class="counter-total" id="male">{ maleCount }</span>
                            <button class="flex-button" id="addmale" onClick={() => alterCount(true, 0)}>+</button>
                        </div>
                    </div>
                </li>
                <li class="flex-item">
                    <div class="li-container">
                        <h1 class="counter-title">Female</h1>
                        <div class="counter-container">
                            <button class="flex-button subtract" id="subtractfemale" onClick={() => alterCount(false, 1)}>-</button>
                                <span class="counter-total" id="female">{ femaleCount }</span>
                            <button class="flex-button" id="addfemale" onClick={() => alterCount(true, 1)}>+</button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Counter