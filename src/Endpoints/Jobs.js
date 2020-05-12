import React from "react";
import styled from "styled-components";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
const jobData = {
  roomGroups: [
    {
      sequence: 0,
      rooms: [
        {
          sequence: 0,
          roomGroupId: "aBK180000000EArGAM",
          roomCode: null,
          name: "Room 1 API TEST",
          jobId: "a8W180000004jv2EAA",
          isShared: false,
          id: "a8Z18000000TJCqEAO"
        },
        {
          sequence: 1,
          roomGroupId: "aBK180000000EArGAM",
          roomCode: null,
          name: "Equipment Room API",
          jobId: "a8W180000004jv2EAA",
          isShared: true,
          id: "a8Z18000000TJCrEAO"
        }
      ],
      name: "Main Floor",
      jobId: "a8W180000004jv2EAA",
      id: "aBK180000000EArGAM"
    }
  ],
  panels: [],
  name: "test defaults edited 2",
  loads: [
    {
      roomId: "a8Z18000000TJCqEAO",
      panelLocationId: null,
      name: "Load 1 API",
      moduleType: null,
      moduleDisplayName: null,
      loadNumber: null,
      jobId: "a8W180000004jv2EAA",
      id: "a8b180000009wm6AAA",
      fixtureQty: 4,
      fixtureId: "a8c180000002RtlAAE",
      dtEquipmentId: null,
      connectionLV: "BLE",
      connectionHV: "Module"
    },
    {
      roomId: "a8Z18000000TJCqEAO",
      panelLocationId: null,
      name: "Load 2 API",
      moduleType: null,
      moduleDisplayName: null,
      loadNumber: null,
      jobId: "a8W180000004jv2EAA",
      id: "a8b180000009whkAAA",
      fixtureQty: null,
      fixtureId: "a8c180000002RtlAAE",
      dtEquipmentId: "a8e180000001WY5AAM",
      connectionLV: "BLE",
      connectionHV: null
    }
  ],
  keypadLocations: [
    {
      roomId: "a8Z18000000TJCqEAO",
      name: "Bar Lights",
      keypads: [],
      jobId: "a8W180000004jv2EAA",
      id: "a8d1800000014jFAAQ",
      dtProductId: "aBC18000000076lGAA"
    },
    {
      roomId: "a8Z18000000TJCqEAO",
      name: "Keypad 2 test EDITED",
      keypads: [
        {
          position: 3,
          name: "Keypad 2 test EDITED",
          loadId: null,
          keypadLocationId: "a8d1800000014jAAAQ",
          id: "a8k180000001n3FAAQ",
          engProductId: null,
          dtProductId: "aBC180000000793GAA",
          dtEquipmentId: null,
          button4text2: null,
          button4text: null,
          button3text2: null,
          button3text: null,
          button2text2: null,
          button2text: null,
          button1text2: null,
          button1text: null
        },
        {
          position: 1,
          name: "Keypad 1 test",
          loadId: null,
          keypadLocationId: "a8d1800000014jAAAQ",
          id: "a8k180000001n30AAA",
          engProductId: null,
          dtProductId: "aBC180000000793GAA",
          dtEquipmentId: "a8e180000001WY0AAM",
          button4text2: null,
          button4text: null,
          button3text2: null,
          button3text: null,
          button2text2: null,
          button2text: null,
          button1text2: null,
          button1text: null
        }
      ],
      jobId: "a8W180000004jv2EAA",
      id: "a8d1800000014jAAAQ",
      dtProductId: "aBC180000000793GAA"
    }
  ],
  jobType: null,
  jobEquipment: [],
  id: "a8W180000004jv2EAA",
  fixtures: [
    {
      wattage: 120,
      partNumber: "234",
      name: "Nermal's Fixture",
      manufacturer: "USAI",
      jobId: "a8W180000004jv2EAA",
      id: "a8c180000002S4ZAAU",
      controlTypeLV: "BLE",
      controlType: "Forward Phase"
    },
    {
      wattage: 120,
      partNumber: "234",
      name: "D5 Test",
      manufacturer: "USAI",
      jobId: "a8W180000004jv2EAA",
      id: "a8c180000002RtlAAE",
      controlTypeLV: "BLE",
      controlType: "Forward Phase"
    }
  ],
  defaultWireGauge: "14",
  defaultVoltage: "120v",
  defaultPricing: "MSRP",
  defaultPanelStyle: "QO",
  defaultPanelSize: "42",
  defaultMeasurement: "Imperial",
  defaultKeypadFamily: "Metropolitan",
  defaultKeypadColor: "Black",
  created: 1587138531000,
  accId: "0017000000Nk6YKAAZ"
};
const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ContentHeader = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  background-color: #283430;
  padding: 20px;
`;

const jsonStyle = {
  overflowY: "scroll",
  maxHeight: 500,
  border: "1px solid #000",
  borderRadius: 8
};

const CodeHeader = styled.div`
  background-color: #2c384e;
  padding: 10px;
`;

const POST = () => {
  return <span style={{ color: "green" }}>POST</span>;
};
const GET = () => {
  return <span style={{ color: "blue" }}>GET</span>;
};
const PUT = () => {
  return <span style={{ color: "yellow" }}>PUT</span>;
};
const DELETE = () => {
  return <span style={{ color: "red" }}>DELETE</span>;
};

const Jobs = props => {
  return (
    <div>
      <ContentHeader>JOBS</ContentHeader>
      <ContentBlock>
        <div style={{ padding: 10 }}>
          Attributes
          <br />
          <hr />
          <br />
          <b>defaultWireGauge</b>, integer
          <br />
          Can be 12 or 14
          <br />
          <br />
          <b>defaultVoltage</b>, string
          <br />
          120v or 240v
          <br />
          <br />
          <b>defaultPricing</b>, string
          <br />
          "MSRP", "My Pricing", or "None"
          <br />
          <br />
          <b>defaultKeypadFamily</b>, string
          <br />
          "Metropolitan", "Echo", or "Ascend"
          <br />
          <br />
          <b>defaultKeypadColor</b>, string
          <br />
          "Black", "Snow White", or "Almond"
          <br />
          <br />
          <b>defaultPanelStyle</b>, string
          <br />
          "Homeline" or "QO"
          <br />
          <br />
          <b>defaultPanelSize</b>, integer
          <br />
          42, 30, 24, 16, 12, 8, 6
          <br />
          <br />
        </div>
        <div>
          <div style={jsonStyle}>
            <CodeHeader>ENDPOINTS</CodeHeader>
            <div style={{ padding: 10, fontSize: 12, lineHeight: "1.8" }}>
              <POST /> /jobs
              <br />
              <POST /> /jobs/:jobId
              <br />
              <PUT /> /jobs/:jobId
              <br />
              <DELETE /> /jobs/:jobId
              <br />
            </div>
          </div>
          <br />
          <div style={jsonStyle}>
            <CodeHeader>Job Object</CodeHeader>
            <JSONPretty id="json-job" data={jobData}></JSONPretty>
          </div>
        </div>
      </ContentBlock>
    </div>
  );
};
export default Jobs;
