import React from "react";
import { Container } from "../../global-styles";
import {
  ServiceText,
  ServicesHeader,
  ServiceDescription,
  ServiceWrapper,
} from "./Style";
import ServiceCard from "./ServiceCard";
import data from "../../data/ServiceData";

export default function Services() {
  return (
    <Container mt="3rem" id='services'>
      <ServiceText>
        <ServicesHeader> Our Services</ServicesHeader>
        <ServiceDescription>
          The complete toolkit to turn one-time browsers into long-term
          customers.
        </ServiceDescription>
      </ServiceText>
      <ServiceWrapper>
        {data ? data.map((el, index) => <ServiceCard data={el} key={ index } />) : null}
      </ServiceWrapper>
    </Container>
  );
}
