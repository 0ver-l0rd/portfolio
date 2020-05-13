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
import { roomData } from "../jsonData";

const Rooms = props => {
  return (
    <div>
      <ContentHeader>Rooms</ContentHeader>
      <Resource
        method="GET"
        uri="/jobs/:jobId/rooms2"
        desc="Fetches all Rooms for jobId"
      />
      <br />
      <Resource method="POST" uri="/jobs/:jobId/rooms2" desc="Creates a Room" />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId/rooms2/:roomId"
        desc="Update name/sequence/group of a room"
      />
      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId/rooms2/:roomId"
        desc="Deletes a room"
      />
      <br />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>name</b>, string
            <br />
            Name of the room. 80 chars max.
          </AttrSection>
          <AttrSection>
            <b>sequence</b>, integer
            <br />
            Positive integer value. Determines how this room is ordered.
          </AttrSection>
          <AttrSection>
            <b>roomCode</b>, string
            <br />
            Alpha-numeric room code.
          </AttrSection>
          <AttrSection>
            <b>isShared</b>, boolean
            <br />
            Set room as shared
          </AttrSection>
          <AttrSection>
            <b>roomGroupId</b>, string, id
            <br />
            Maps this room to specified roomGroup
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Room Object</CodeHeader>
          <JSONPretty id="json-room" data={roomData}></JSONPretty>
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};

export default Rooms;
