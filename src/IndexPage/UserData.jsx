import React from 'react'
import './IndexHome.css'
import {ServiceText,ServicesHeader,ServiceDescription,ServiceWrapper} from '../components/Services/Style.js'
// import Services from "../components/Services/Services";
import { Container } from "../global-styles.js";
import data from "./IndexData.js"
import ServiceCard from '../components/Services/ServiceCard.js';

function UserData() {
  return (
    <Container mt="3rem" id='services'>
      <ServiceText>
      </ServiceText>
      <ServiceWrapper>
        {data ? data.map((el, index) => <ServiceCard data={el} key={ index } />) : null}
      </ServiceWrapper>
    </Container>
  )
}

export default UserData