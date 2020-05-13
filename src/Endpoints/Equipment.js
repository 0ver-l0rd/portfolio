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
import { equipmentData } from "../jsonData";

const Equipment = props => {
  return (
    <div>
      <ContentHeader>Equipment</ContentHeader>
      <Resource
        method="GET"
        uri="/jobs/:jobId/equipment2"
        desc="Fetches all Equipment for jobId"
      />
      <br />
      <Resource
        method="POST"
        uri="/jobs/:jobId/equipment2"
        desc="Creates a new Equipment Object"
      />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/equipment2/:equipmentId"
        desc="Updates Equipment Object's connections"
      />
      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId/equipment2/:equipmentId"
        desc="Deletes an equipment object"
      />
      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of Equipment. System Controlled. Will auto-number additonal
            equipment names if the job already has the same equipment product.
          </AttrSection>
          <AttrSection>
            <b>maxConnections</b>, integer
            <br />
            System Controlled. This will inform front-end how many connections
            this controller can have mapped to it.
          </AttrSection>
          <AttrSection>
            <b>dtProductId</b>, string, id
            <br />
            Maps this Equipment object to a <OJ>Product</OJ> object via id.
          </AttrSection>
          <AttrSection>
            <b>controllerType</b>, string
            <br />
            System controlled. Informs front-end what category this equipment
            object should be placed in.
          </AttrSection>
          <AttrSection>
            <b>loads</b>, array
            <br />
            List of <OJ>Load</OJ> ids. Based on the "controllerType" field,
            Add/remove ids to this list to add connections to this controller.
          </AttrSection>
          <AttrSection>
            <b>keypads</b>, array
            <br />
            List of <OJ>Keypad</OJ> ids. Based on the "controllerType" field,
            Add/remove ids to this list to add connections to this controller.
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Equipment Object</CodeHeader>
          <JSONPretty id="json-equip" data={equipmentData} />
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default Equipment;
