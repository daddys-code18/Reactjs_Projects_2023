import { useState } from "react"
import { styled } from "styled-components"

const RoleDice = ({ currentDice, roleDice }) => {

    return (
        <DicConatainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>
        </DicConatainer>
    )
}

export default RoleDice

const DicConatainer = styled.div`
margin:48px;
display:flex;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
}.dice{
    cursor: pointer;
}`;
