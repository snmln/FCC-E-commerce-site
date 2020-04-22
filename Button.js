import styled from "styled-components";
export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--mainDark);
    border-color:${props => props.cart? "var(--mainBlue)":"var(--mainDark)"};
    color:${props => props.cart? "var(--mainBlue)":"var(--mainDark)"};
    border-radius: .5rem;
    padding: .2rem .5rem;
    cursor: pointer;
    margin: .2rem .5rem; 
    transition: all .5s ease-in-out;
    &:hover{
        background: ${props => props.cart? "var(--mainBlue)":"var(--mainDark)"};
        color: var(--mainGrey);
        border: 0.05rem solid var(--mainGrey);
    }
    
    &:focus{
        outline:none;
    }`
