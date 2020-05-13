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
  AttrSection
} from "../utlities";
import { jobData } from "../jsonData";

const Jobs = props => {
  return (
    <div>
      <ContentHeader>JOBS</ContentHeader>
      <Resource
        method="POST"
        uri="/jobs"
        desc="Creates a job under the user's account"
      />
      <br />
      <Resource
        method="PUT"
        uri="/jobs/:jobId"
        desc="Edit the name or default values for a job"
      />
      <br />
      <Resource
        method="GET"
        uri="/jobs"
        desc="Fetch list of jobs without detailed data"
      />
      <br />
      <Resource
        method="GET"
        uri="/jobs/:jobId"
        desc="Fetch full data for an indiviudal job"
      />
      <br />
      <Resource
        method="DELETE"
        uri="/jobs/:jobId"
        desc="Deletes a specific job"
      />
      <ContentBlock>
        <AttributesDiv>
          <ContentSubHeader>Attributes</ContentSubHeader>
          <AttrSection>
            <b>defaultWireGauge</b>, integer
            <br />
            Can be 12 or 14
          </AttrSection>
          <AttrSection>
            <b>defaultVoltage</b>, string
            <br />
            120v or 240v
          </AttrSection>
          <AttrSection>
            <b>defaultPricing</b>, string
            <br />
            "MSRP", "My Pricing", or "None"
          </AttrSection>
          <AttrSection>
            <b>defaultKeypadFamily</b>, string
            <br />
            "Metropolitan", "Echo", or "Ascend"
          </AttrSection>
          <AttrSection>
            <b>defaultKeypadColor</b>, string
            <br />
            "Black", "Snow White", or "Almond"
          </AttrSection>
          <AttrSection>
            <b>defaultPanelStyle</b>, string
            <br />
            "Homeline" or "QO"
          </AttrSection>
          <AttrSection>
            <b>defaultPanelSize</b>, integer
            <br />
            42, 30, 24, 16, 12, 8, 6
          </AttrSection>
        </AttributesDiv>
        <JsonDiv>
          <CodeHeader>Job Object</CodeHeader>
          <JSONPretty id="json-job" data={jobData}></JSONPretty>
        </JsonDiv>
      </ContentBlock>
    </div>
  );
};
export default Jobs;
