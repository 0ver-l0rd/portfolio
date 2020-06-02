import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const divStyle = {
  display: "grid",
  gridTemplateColumns: "10% 40% 50%",
  border: "1px solid #3f3f3f",
  borderRadius: 4,
  alignItems: "center",
  lineHeight: "normal",
  fontSize: 12,
  cursor: "pointer"
};

const postStyle = {
  backgroundColor: "#4cd964",
  color: "#fff",
  textAlign: "center",
  lineHeight: "36px"
};
const putStyle = {
  backgroundColor: "#FF7F33",
  color: "#fff",
  textAlign: "center",
  lineHeight: "36px"
};
const getStyle = {
  backgroundColor: "#00C7CC",
  color: "#fff",
  textAlign: "center",
  lineHeight: "36px"
};
const deleteStyle = {
  backgroundColor: "#D0021B",
  color: "#fff",
  textAlign: "center",
  lineHeight: "36px"
};

const uriStyle = {
  padding: 10
};
const descStyle = {
  padding: 10,
  textAlign: "right"
};

const renderMethod = method => {
  if (method === "POST") {
    return <div style={postStyle}>{method}</div>;
  }
  if (method === "PUT") {
    return <div style={putStyle}>{method}</div>;
  }
  if (method === "GET") {
    return <div style={getStyle}>{method}</div>;
  }
  if (method === "DELETE") {
    return <div style={deleteStyle}>{method}</div>;
  }
  return null;
};

export const Resource = props => {
  const { uri, desc, method } = props;
  return (
    <div style={divStyle}>
      {renderMethod(method)}
      <div style={uriStyle}>{uri}</div>
      <div style={descStyle}>{desc}</div>
    </div>
  );
};

export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  color: #dbd9d6;
  margin: 30px 0px;
`;

export const ContentHeader = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
  background: #3f3f3f;
  padding: 20px;
  color: #dbd9d6;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ContentSubHeader = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
  background: rgb(63, 63, 63, 0.5);
  padding: 10px;
  color: #dbd9d6;
  font-weight: bold;
  text-transform: uppercase;
`;

export const AttributesDiv = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;
export const JsonDiv = styled.div`
  overflow-: scroll;
  maxheight: 500;
  border: 1px solid #000;
  border-radius: 8px;
`;

export const CodeHeader = styled.div`
  font-size: 12px;
  color: #dbd9d6;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #3f3f3f;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const AttrSection = styled.div`
  padding: 15px 0px;
  border-top: 1px solid #3f3f3f;
  border-bottom: 1px solid #3f3f3f;
  margin-bottom: -1px;
  font-size: 12px;
`;

export const OJ = styled.span`
  color: #ff5f00;
  background-color: #3f3f3f;
  padding: 1px 3px;
  border: 1px solid #3f3f3f;
  border-radius: 6px;
  font-weight: bold;
`;

export const DescContainer = styled(Container)`
  font-size: 12px;
  margin-bottom: 30px;
`;
export const DescText = styled.div`
  margin-bottom: 30px;
`;
export const ObjectContainer = styled(Container)`
  border: 1px solid #3f3f3f;
  border-radius: 2px;
`;

export const ObjectHeader = styled.div`
  font-size: 12px;
  margin: 0px -15px 30px -15px;
  background: rgb(63, 63, 63, 0.5);
  padding: 10px;
  color: #dbd9d6;
  font-weight: bold;
  text-transform: uppercase;
`;
