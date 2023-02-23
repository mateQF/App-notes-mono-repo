import styled from 'styled-components'

export const Button = styled.button`
    background: dodgerblue;
    color: white;
    cursor: pointer;
    font-size: 1em;
    margin-top: 1em;
    padding: 4px 12px;
    border: 1px solid #09f;
    border-radius: 5px;
    transition: all .5s;

    &:hover {
        background-color: white;
        color: dodgerblue;
    }
`
