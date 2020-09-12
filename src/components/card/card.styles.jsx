import styled from 'styled-components';

export const Container = styled.div`
    flex: 0 0 auto;
    margin: 20px;
    width: 350px;
    height: 550px;
    background-color: #1e2a3a;
    box-shadow: 0px 0px 48px 0px rgba(4, 6, 4, 0.08);
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    cursor: pointer;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 80%;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    height: 20%;    
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;

export const Title = styled.h2`
    display: initial;
    font-size: 1.5em;
    font-weight: bold;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

export const Year = styled.p`
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;