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
import { keypadData, keypadLocationData } from "../jsonData";

const Keypads = props => {
  return (
    <div>
      <ContentHeader>Keypads</ContentHeader>
      <Resource
        method="GET"
        uri="/jobs/:jobId/keypads2"
        desc="Fetches all Keypad Locations for jobId"
      />
      <br />
      <Resource
        method="POST"
        uri="/jobs/:jobId/keypads2"
        desc="Creates a Keypad Location"
      />
      <br />
      <Resource
        method="POST"
        uri="/jobs/:jobId/keypads2/:locationId"
        desc="Creates a Keypad under the location id"
      />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/keypads2/:locationId"
        desc="Update a keypad location"
      />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/keypads2/:locationId/keypad2/:keypadId"
        desc="Update an individual keypad under a location"
      />
      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId/keypads2/:locationId"
        desc="Delete a Location and all keypads within"
      />
      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Keypad Location Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of Keypad Location. 80 chars max.
          </AttrSection>
          <AttrSection>
            <b>roomId</b>, string
            <br />
            Map this location to a specific roomId
          </AttrSection>
          <AttrSection>
            <b>dtProductId</b>, string
            <br />
            Maps a specific <OJ>Product</OJ> to this location
          </AttrSection>
          <AttrSection>
            <b>keypads</b>, array
            <br />
            List of <OJ>Keypad</OJ> objects within this location
          </AttrSection>

          <ContentSubHeader>Keypad Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of Keypad. 80 chars max.
          </AttrSection>
          <AttrSection>
            <b>position</b>, integer
            <br />
            Position of this keypad in the location. 1-4. Depends on the
            associated dtProductId's size.
          </AttrSection>
          <AttrSection>
            <b>loadId</b>, string, id
            <br />
            Maps this keypad to a specific existing load via ID.
          </AttrSection>
          <AttrSection>
            <b>dtProductId</b>, string
            <br />
            Maps a specific <OJ>Product</OJ> to this keypad
          </AttrSection>
          <AttrSection>
            <b>dtEquipmentId</b>, string
            <br />
            Maps a specific <OJ>Equipment</OJ> object to this keypad.
          </AttrSection>
          <AttrSection>
            <b>buttonXtext</b>, string
            <br />
            Depending on the mapped <OJ>Product</OJ> associated to this keypad,
            the "buttonCount" field on the Product determines how many
            buttons/lines are engrave able for this keypad. Attributes ending in
            "2" mean it's the second line of the engrave-able button.
          </AttrSection>
        </AttributesDiv>

        <JsonDiv>
          <CodeHeader>Keypad Location Object</CodeHeader>
          <JSONPretty id="json-keypadLoc" data={keypadLocationData} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CodeHeader>Keypad Object</CodeHeader>
          <JSONPretty id="json-keypadLoc" data={keypadData} />
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default Keypads;
