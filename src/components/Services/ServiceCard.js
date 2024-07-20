import React from "react";
import {
  ServiceCardContent,
  ServiceCardIcon,
  ServiceCardDetails,
  ServiceCardHeader,
  ServiceCardDescription,
  ServiceCardFooter,
  ServiceImg,
} from "./Style";

export default function ServiceCard({ data }) {
  return (
    data && (
      <ServiceCardContent bg={data.background}>
        <ServiceCardIcon>
          <ServiceImg src={data.icon}/>
        </ServiceCardIcon>
        <ServiceCardDetails>
          <ServiceCardHeader>{data.header}</ServiceCardHeader>
          <ServiceCardDescription>{data.description}</ServiceCardDescription>
          <ServiceCardFooter>{data.footer}</ServiceCardFooter>
          <ServiceCardFooter>{data.footer2}</ServiceCardFooter>
          <ServiceCardFooter>{data.footer3}</ServiceCardFooter>
        </ServiceCardDetails>
      </ServiceCardContent>
    )
  );
}
