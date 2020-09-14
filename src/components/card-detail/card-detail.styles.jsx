import styled from 'styled-components';


export const Container = styled.div`
    margin: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: initial;
    justify-content: center;
    align-items: auto;
    align-content: center;
`;

export const ImageContainer = styled.div`
    flex: 0 0 auto;
    width: 350px;    
    margin-bottom: 10px;       
    padding: 10px 0;
    @media (max-width: 768px) {
        width: 100%;  
    }
`;

export const Content = styled.div`
    flex: 0 0 auto;
    width: 550px;   
    background-color: #1e2a3a;
    box-shadow: 0px 0px 48px 0px rgba(4, 6, 4, 0.08);
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    text-align: initial;    
    padding: 0 25px;
    @media (max-width: 768px) {
        width: 100%;  
    }
    span {        
        font-weight: bold;
    }
`;

export const Genre = styled.div`
    box-sizing: border-box;
    margin: 4px;
    background-color: #111820;
    display: inline;
    border-radius: 8px;
    padding: 5px;
    border-radius: 8px;
`;

export const ImdbRating = styled.h4`        
    margin: 10px 0;
    margin-top: 20px;
`;

export const Title = styled.h1`        
    margin: 40px;
    font-size: 3em;
`;

export const Description = styled.p`
    margin: 10px 0;
`;

export const Button = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
    left: 90%;
    width: 50px;
    box-sizing: border-box;
    margin: 4px;
    background-color: #111820;
    border-radius: 8px;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
`;