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
import { loadData } from "../jsonData";

const Loads = props => {
  return (
    <div>
      <ContentHeader>Loads</ContentHeader>
      <Resource
        method="GET"
        uri="/jobs/:jobId/loads2"
        desc="Fetches all Loads for jobId"
      />
      <br />
      <Resource method="POST" uri="/jobs/:jobId/loads2" desc="Creates a Load" />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/loads2/:loadId"
        desc="Updates a load"
      />
      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId/loads2/:loadId"
        desc="Deletes a load"
      />
      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of Load. 80 chars max.
          </AttrSection>
          <AttrSection>
            <b>roomId</b>, string, id
            <br />
            Maps this load to the specified <OJ>Room</OJ>.
          </AttrSection>
          <AttrSection>
            <b>loadNumber</b>, string
            <br />
            User entered string
          </AttrSection>
          <AttrSection>
            <b>fixtureId</b>, string, id
            <br />
            Maps a this load to a the specified <OJ>Fixture</OJ>
          </AttrSection>
          <AttrSection>
            <b>fixtureQty</b>, integer
            <br />
            User entered integer for amount of fixtures based on fixtureId
            selected.
          </AttrSection>
          <AttrSection>
            <b>moduleDisplayName</b>, string
            <br />
            User entered string for this load to appear on the Panel UI
          </AttrSection>
          <AttrSection>
            <b>connectionHV</b>, string, picklist
            <br />
            Allowed: "Module", "Keypad", "None"
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Load Object</CodeHeader>
          <JSONPretty id="json-load" data={loadData}></JSONPretty>
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default Loads;
