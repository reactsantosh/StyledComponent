import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
color: #f0aeaa;
align: center;
`

const Section = styled.div`
    background-color: #f0d1aa;
    dispaly:flex;
    justify-content: center;
    flex-direction: column;
    color: #f0aeaa;
    border-radius: 15px;
    `

const Button = styled.button`
    background-color: red;
    dispaly:flex;
    justify-content: center;
    padding:5px;
    margin:5px;
    border-radius:15px;
    `

const Content= () => {
    return(
        <Section >
            <Title> 💅 section</Title>
            <Button>Click me</Button>
            <Button>Click me 2</Button>
        </Section>
    )
}

export default Content;