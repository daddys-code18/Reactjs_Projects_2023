import { styled } from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import { useState } from "react"
import RoleDice from "./RoleDice"
import Button from "../styled/Button"
import Roles from "./Roles"

const GamePlay = () => {
    const [score, SetScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, SetCurrentDice] = useState(1);
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const genrateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have Not Selected any Number")
            return;
        }
        const randomNumber = genrateRandomNumber(1, 7);
        SetCurrentDice((prev) => randomNumber);
        if (selectedNumber === randomNumber) {
            SetScore((prev) => prev + randomNumber)
        } else {
            SetScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
    };
    const resetScore = () => {
        SetScore(0);
    };
    return (
        <MainContainer>

            <div className="top-section">
                <TotalScore score={score} />
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                {/* <outlineButton>Reset Score</outlineButton> */}
                {/* <outlineButton></outlineButton> */}
                <Button onClick={resetScore}> Reset Score</Button>
                <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Roles />}

        </MainContainer>


    )
}

export default GamePlay
const MainContainer = styled.main`
padding-top: 70px;
.top-section{
    display: flex;
    justify-content: space-around;
    align-items:end;
}
.btns{
    margin-top: 40px;
     display: flex ;
     flex-direction: column;
     justify-content: center;
 align-items: center;
 gap: 10px
 ;

}`;