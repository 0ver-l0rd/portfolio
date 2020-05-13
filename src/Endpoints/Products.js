import React from "react";
import styled from "styled-components";
import JSONPretty from "react-json-pretty";
import ReactJson from "react-json-view";
import "react-json-pretty/themes/monikai.css";
import {
  Resource,
  ContentBlock,
  CodeHeader,
  ContentSubHeader,
  AttributesDiv,
  JsonDiv,
  ContentHeader,
  AttrSection,
  OJ
} from "../utlities";
import { productData, fullProductData } from "../jsonData";

const Products = props => {
  return (
    <div>
      <ContentHeader>Products</ContentHeader>
      <Resource
        method="GET"
        uri="/products"
        desc="Fetches list of all Product objects by type"
      />
      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Friendly Product name.
          </AttrSection>
          <AttrSection>
            <b>type</b>, string
            <br />
            Possible Values: Keypad, Faceplate, Module, Equipment
          </AttrSection>
          <AttrSection>
            <b>image</b>, string, url
            <br />
            Product imagery
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Product Object</CodeHeader>
          <JSONPretty id="json-product" data={productData} />
        </JsonDiv>
      </ContentBlock>
      <div style={{ marginTop: 30 }}>
        <ContentSubHeader>Reference: Full Product Fetch JSON</ContentSubHeader>
        <ReactJson src={fullProductData} theme="twilight" collapsed />
      </div>
    </div>
  );
};

export default Products;
