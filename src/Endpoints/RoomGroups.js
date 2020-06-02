import React from "react";
import Accordion from "react-bootstrap/Accordion";
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
import { roomGroupData } from "../jsonData";

const RoomGroup = props => {
  return (
    <div>
      <ContentHeader>Room Groups</ContentHeader>
      <Resource
        method="GET"
        uri="/jobs/:jobId/roomgroups"
        desc="Fetches all Room Groups for jobId"
      />
      <br />
      <Resource
        method="POST"
        uri="/jobs/:jobId/roomgroups"
        desc="Creates a new Room Group"
      />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/roomgroups/:roomGroupId"
        desc="Update the name/sequence"
      />
      <br />
      <Accordion>
        <div>
          <Accordion.Toggle eventKey="0" as="div">
            <Resource
              method="PUT"
              uri="/jobs/:jobId/roomgroups/:roomGroupId?bulk=true/false"
              desc="Bulk upsert multiple rooms"
              expandable={true}
            />
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <ContentBlock>
              <AttributesDiv>
                <ContentSubHeader>Description</ContentSubHeader>
                <AttrSection>
                  Pass the entire room group object. SF will perform an upsert
                  on every room object in the <OJ>rooms</OJ> array. If the room
                  does not exist, SF will create a new room with specified
                  values. If it does exist, SF will update the existing room
                  with any changed values.
                </AttrSection>
              </AttributesDiv>
              <JsonDiv>
                <CodeHeader>Room Group Object</CodeHeader>
                <JSONPretty id="json-rg" data={roomGroupData}></JSONPretty>
              </JsonDiv>
            </ContentBlock>
          </Accordion.Collapse>
        </div>
      </Accordion>

      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId/roomgroups/:roomGroupId"
        desc="Deletes Group and all rooms within"
      />

      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of the room group. 80 chars max.
          </AttrSection>
          <AttrSection>
            <b>sequence</b>, integer
            <br />
            Positive integer value. Determines how this room group is ordered.
          </AttrSection>
          <AttrSection>
            <b>rooms</b>, array
            <br />
            List of <OJ>Room</OJ> objects.
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Room Group Object</CodeHeader>
          <JSONPretty id="json-rg" data={roomGroupData}></JSONPretty>
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default RoomGroup;
