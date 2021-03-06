import React from "react"
import styled from 'styled-components'

const UnitOne = styled.section`
    padding: 8rem 1rem;
    width: 100%;

    @media (max-width: 680px) {
        padding: 2rem 1rem;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    margin: 0 auto;
    text-align: center;
    width: 80%;

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
        padding: 2rem 0;

    }
`

const Sub = styled.h2`
    font-size: 1.5rem;
`

const Promo = styled.p`
    font-size: 1.1rem;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
`

const Unit = () => {
    return (
        <Grid>
            <UnitOne>
                <Sub>Build access, build trust.</Sub>
                <Promo>Create tools together, deepen the value of politics reporting.</Promo>
            </UnitOne>
            <UnitOne>
                <Sub>Collaborate with other media outlets.</Sub>
                <Promo>Create tools together, deepen the value of politics reporting.</Promo>
            </UnitOne>
            <UnitOne>
                <Sub>Build trust.</Sub>
                <Promo>Create tools together, deepen the value of politics reporting.</Promo>
            </UnitOne>
        </Grid>
    )
}

export default Unit