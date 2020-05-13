import React from "react";
import styled from "styled-components";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import {
  Resource,
  ContentBlock,
  CodeHeader,
  ContentSubHeader,
  AttributesDiv,
  JsonDiv,
  ContentHeader
} from "../utlities";

const Products = props => {
  return (
    <div>
      <ContentHeader>Products</ContentHeader>
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Product Object</CodeHeader>
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default Products;
