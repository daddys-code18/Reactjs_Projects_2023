import styled from "styled-components";

const TotalScore = ({ score }) => {
    return (

        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>

    );
};

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
 
h1{
    font-size: 100px;
    line-height: 100px;
    margin-bottom: 0;
 
}
p{
    margin: 0;
    padding: 0;
    font-size: 24p;
    font-weight: 500px;
}`;