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
  ContentHeader,
  AttrSection,
  OJ
} from "../utlities";
import { fixtureData } from "../jsonData";

const Fixtures = props => {
  return (
    <div>
      <ContentHeader>Fixtures</ContentHeader>
      <Resource
        method="GET"
        uri="/jobs/:jobId/fixtures"
        desc="Fetches all Fixtures for jobId"
      />
      <br />
      <Resource
        method="POST"
        uri="/jobs/:jobId/fixtures"
        desc="Creates a fixture"
      />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/fixtures2/:fixtureId"
        desc="Updates a fixture"
      />
      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId/fixtures2/:fixtureId"
        desc="Deletes a fixture"
      />
      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of fixture. 80 chars max.
          </AttrSection>
          <AttrSection>
            <b>wattage</b>, integer
            <br />
            Wattage of fixture.
          </AttrSection>
          <AttrSection>
            <b>partNumber</b>, string
            <br />
            User entered string.
          </AttrSection>
          <AttrSection>
            <b>manufacturer</b>, string
            <br />
            User entered string.
          </AttrSection>
          <AttrSection>
            <b>controlType</b>, string, picklist
            <br />
            Allowed: "Adaptive Phase", "Forward Phase", "None"
          </AttrSection>
          <AttrSection>
            <b>controlTypeLV</b>, string, picklist
            <br />
            Allowed: "None", "0-10v", "BLE", "DMX"
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Fixture Object</CodeHeader>
          <JSONPretty id="json-fixture" data={fixtureData}></JSONPretty>
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default Fixtures;
