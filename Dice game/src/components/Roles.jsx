import styled from "styled-components";


const Roles = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>select any number</p>
                <p>click on disc image</p>
                <p> After click on dice if selected number is equal to dice number you will get same point as dice("")</p>
                <p> if you get wrong guess then 2 point will be dedcuted</p>
            </div>


        </RulesContainer>
    )
}

export default Roles

const RulesContainer = styled.div`
background-color: #fbf1f1;
max-width: 800px;
    margin: 0  auto;
padding: 20px;
margin-top:40px;

h2{font-size:24px;
   
    border-radius: 10px;


}.text{
    margin-top: 24px;
}
`;