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
  DescContainer,
  OJ,
  AttrSection,
  DescText,
  ObjectContainer,
  ObjectHeader
} from "../utlities";
import { Container, Row, Col } from "react-bootstrap";
import { panelData, moduleData, circuitData } from "../jsonData";

const Panels = props => {
  return (
    <div>
      <ContentHeader>Panels</ContentHeader>
      <DescContainer>
        <DescText>
          The <OJ>Panel</OJ> object represents a single lighting panel within a
          shared room in the job.
        </DescText>
        <Resource
          method="GET"
          uri="/jobs/:jobId/panels2"
          desc="Fetches all panels"
        />
        <br />
        <Resource
          method="GET"
          uri="/jobs/:jobId/panels2/:panelId"
          desc="Fetches a single panel via panelId"
        />
        <br />
        <Resource
          method="POST"
          uri="/jobs/:jobId/panels2"
          desc="Creates a new panel under this jobId"
        />
        <br />
        <Resource
          method="PUT"
          uri="/jobs/:jobId/panels2/:panelId"
          desc="Update the attrs/modules/circuits"
        />
        <br />
        <Resource
          method="DELETE"
          uri="/jobs/:jobId/panels2/:panelId"
          desc="Deletes the panel"
        />
      </DescContainer>
      <ObjectContainer>
        <ObjectHeader>Panel Object</ObjectHeader>
        <Row>
          <Col sm={6}>
            <ContentSubHeader>Attributes</ContentSubHeader>
            <AttrSection>
              <b>name</b>, string
              <br />
              Name of Panel. 80 chars max.
            </AttrSection>
            <AttrSection>
              <b>roomId</b>, string, id
              <br />
              Maps this panel to a <OJ>Room</OJ>. Associated roomId must have
              "isShared" == TRUE.
            </AttrSection>
            <AttrSection>
              <b>panelType</b>, string, picklist
              <br />
              Determines the type of panel. This affects auto-complete logic, as
              well as what Module Types are available for selection within this
              panel.
              <br />
              Avaliable Options: "QO" or "Homeline"
            </AttrSection>
            <AttrSection>
              <b>panelSize</b>, integer, picklist
              <br />
              Determines how many slots this panel has.
              <br />
              Available Options: 42, 30, 24, 16, 12, 8, 6
            </AttrSection>
            <AttrSection>
              <b>modules</b>, array, object
              <br />
              List of <OJ>Module</OJ> objects mapped to this panel
            </AttrSection>
            <AttrSection>
              <b>circuits</b>, array, object
              <br />
              List of <OJ>Circuit</OJ> objects mapped to this panel
            </AttrSection>
          </Col>
          <Col sm={6}>
            <JsonDiv>
              <CodeHeader>JSON</CodeHeader>
              <JSONPretty id="json-panel" data={panelData} />
            </JsonDiv>
          </Col>
        </Row>
      </ObjectContainer>

      <ObjectContainer style={{ marginTop: 30 }}>
        <ObjectHeader>Module Object</ObjectHeader>
        <Row>
          <Col sm={6}>
            <ContentSubHeader>Attributes</ContentSubHeader>
            <AttrSection>
              <b>name</b>, string
              <br />
              Name of Module. Auto-populated by system based on "dtProductId".
            </AttrSection>
            <AttrSection>
              <b>dtProductId</b>, string, id, REQUIRED
              <br />
              Maps to a <OJ>Product</OJ> object's "id" field.
            </AttrSection>
            <AttrSection>
              <b>size</b>, integer
              <br />
              Determines how many "slots" this module occupies on the panel. Can
              be 1 or 2. System controlled via "dtProductId"
            </AttrSection>
            <AttrSection>
              <b>image</b>, string, url
              <br />
              Image url based on associated "dtProductId".
            </AttrSection>
            <AttrSection>
              <b>panelSlot</b>, integer
              <br />
              Determines which slot on the panel this module occupies. Use this
              and "size" to determine placement on Panel UI.
              <br /> Eg. A Module with panelSlot === 1 and size === 2, would
              take up the top left 2 "slots" on the panel. To insert a size===2
              module directly below it, you would insert a module with a
              panelSlot == 3. Another below that would be panelSlot===5
            </AttrSection>
            <AttrSection>
              <b>capacityTotal</b>, Integer
              <br />
              Total capacity (In watts) that this module can support. System
              controlled via combining both "output_A_capacity" +
              "output_B_capacity".
            </AttrSection>
            <AttrSection>
              <b>capacityUse</b>, integer
              <br />
              Total wattage capacity currently in use. System controlled via
              combining both "output_X_loadId"'s mapped "fixtureId"'s wattage.
            </AttrSection>
            <AttrSection>
              <b>output_A_loadId</b>, string, id
              <br />
              Maps a <OJ>Load</OJ> object to this module's A output (top).
            </AttrSection>
            <AttrSection>
              <b>output_B_loadId</b>, string, id
              <br />
              Maps a <OJ>Load</OJ> object to this module's B output (bottom).
            </AttrSection>
            <AttrSection>
              <b>output_A_circuitId</b>, string, id
              <br />
              Maps a <OJ>Circuit</OJ> object to this module's A output (top).
            </AttrSection>
            <AttrSection>
              <b>output_B_circuitId</b>, string, id
              <br />
              Maps a <OJ>Circuit</OJ> object to this module's B output (bottom).
            </AttrSection>
            <AttrSection>
              <b>voltage</b>, integer
              <br />
              Max voltage this module supports. System controlled via
              "dtProductId"
            </AttrSection>
            <AttrSection>
              <b>panelId</b>, string, Id
              <br />
              Maps this module to a parent <OJ>Panel</OJ> object.
            </AttrSection>
          </Col>
          <Col sm={6}>
            <JsonDiv>
              <CodeHeader>JSON</CodeHeader>
              <JSONPretty id="json-module" data={moduleData} />
            </JsonDiv>
          </Col>
        </Row>
      </ObjectContainer>

      <ObjectContainer style={{ marginTop: 30 }}>
        <ObjectHeader>Circuit Object</ObjectHeader>
        <Row>
          <Col sm={6}>
            <ContentSubHeader>Attributes</ContentSubHeader>
            <AttrSection>
              <b>name</b>, string
              <br />
              Name of Circuit. 80 chars max.
            </AttrSection>
            <AttrSection>
              <b>dtProductId</b>, string, id, REQUIRED
              <br />
              Maps to a <OJ>Product</OJ> object's "id" field. This product must
              have a type == "Breaker".
            </AttrSection>
            <AttrSection>
              <b>panelSlot</b>, integer
              <br />
              Determines which slot on the panel this circuit's breaker
              occupies. Use this and "size" to determine placement on Panel UI.
              <br /> Eg. A breaker with panelSlot === 1 and size === 1, would
              take up the top left "slot" on the panel.
            </AttrSection>
            <AttrSection>
              <b>size</b>, integer
              <br />
              Determines how many "slots" this circuit's breaker occupies on the
              panel. Can be 1 or 2 (Phase 1 will only have 1). System controlled
              via "dtProductId"
            </AttrSection>
            <AttrSection>
              <b>image</b>, string, url
              <br />
              Image url based on associated "dtProductId".
            </AttrSection>
            <AttrSection>
              <b>color</b>, string
              <br />
              Hex or RGB value saved for this circuit.
            </AttrSection>
            <AttrSection>
              <b>powerCapacity</b>, integer
              <br />
              Maximum watts this circuit can support based on the "dtProductId"
              mapped breaker product.
            </AttrSection>
            <AttrSection>
              <b>capacityUse</b>, integer
              <br />
              Total watts in use based on all loads mapped to this circuit.
            </AttrSection>
            <AttrSection>
              <b>amperage</b>, integer
              <br />
              Total amps for this circuit's breaker.
            </AttrSection>
            <AttrSection>
              <b>voltage</b>, integer
              <br />
              Total voltage for this circuit's breaker.
            </AttrSection>
            <AttrSection>
              <b>loads</b>, array of strings
              <br />
              List of ALL loadIds that are mapped to this circuit. Determines
              capacityUse
            </AttrSection>
          </Col>
          <Col sm={6}>
            <JsonDiv>
              <CodeHeader>JSON</CodeHeader>
              <JSONPretty id="json-circuit" data={circuitData} />
            </JsonDiv>
          </Col>
        </Row>
      </ObjectContainer>
    </div>
  );
};

export default Panels;
