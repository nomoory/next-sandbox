import Headline from "components/typography/Headline";
import ButtonArrowIcon from "components/icons/ButtonArrowIcon";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import styled from "styled-components";
import { Col, Row } from "antd";
import { useState, useRef, useEffect } from "react";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";
import { GRAY50, GRAY20, RED40 } from "styles/colors";
import { withTranslation } from "../../../i18n";

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 64px;
  }
`;

const Header = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 22px;
  }
`;

const Form = styled.form`
  /* Gray 20 */

  border: none;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 0px;
  padding-top: 40px;
  padding-bottom: 20px;

  ${mediaQueriesBiggerThan("sm")} {
    background: #ffffff;
    border: 1px solid #e5e5e6;
    box-sizing: border-box;
    box-shadow: 0px 4px 24px #e5e5e6;
    border-radius: 2px;
    margin-top: 22px;
  }
`;
const InputContainer = styled.div``;
const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border: 1px solid #e5e5e6;
  box-sizing: border-box;
  border-radius: 11px;
  padding: 13px 19px;
  font-size: 16px;
  background-color: rgb(247, 247, 247, 0.5);
  margin-top: 12px;
`;

const Textarea = styled.textarea`
  border: 1px solid #e5e5e6;
  box-sizing: border-box;
  border-radius: 11px;
  padding: 13px 19px;
  font-size: 16px;
  background-color: rgb(247, 247, 247, 0.5);
  margin-top: 12px;
`;

const Button = styled.button`
  background: #c63f34;
  border-radius: 2px;
  padding: 12px 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const InputBox = ({ defaultValue, label, type, placeholder, onChange }) => {
  const [value, setValue] = useState(defaultValue || "");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <InputContainer>
      <InputLabel>
        <Caption1 bold style={{ color: RED40 }}>
          {label}
        </Caption1>
        {type === "textarea" ? (
          <Textarea
            rows="4"
            type={type}
            name={label}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => {
              handleChange(e);
              if (onChange) {
                onChange(e);
              }
            }}
          />
        ) : (
          <Input
            type={type}
            name={label}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => {
              handleChange(e);
              if (onChange) {
                onChange(e);
              }
            }}
          />
        )}
      </InputLabel>
    </InputContainer>
  );
};
const ContactUs = ({ t }) => {
  const formElement = useRef(null);
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 16, offset: 4 }}>
          <Header>
            <Headline bold>Contact Us</Headline>
            <Divider />
          </Header>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 16, offset: 4 }}>
          <Form
            ref={formElement}
            action="mailto:edmicbio@edmicbio.com"
            method="POST"
            enctype="multipart/form-data"
          >
            <Row
              style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
              gutter={[
                gutter,
                {
                  ...gutter_vertical,
                  sm: 12,
                  md: 12,
                  lg: 12,
                },
              ]}
            >
              {/* <Col xs={24} sm={12}>
                <InputBox label="Name" />
              </Col> */}
              <Col xs={24} sm={24}>
                <InputBox label="Email" />
              </Col>
              {/* <Col xs={24} sm={12}>
                <InputBox label="Company" placeholder="Your company" />
              </Col>
              <Col xs={24} sm={12}>
                <InputBox label="Phone number" placeholder="010-1234-5678" />
              </Col>
              <Col xs={24} sm={24}>
                <InputBox label="Subject" placeholder="title" />
              </Col>
              <Col xs={24} sm={24}>
                <InputBox
                  label="Details"
                  type="textarea"
                  placeholder="Please enter your details"
                />
              </Col> */}
              <Col
                xs={24}
                sm={24}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 12,
                }}
              >
                <Button type="submit">
                  {t("write_email")}
                  <ButtonArrowIcon style={{ marginLeft: 8 }} />
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(ContactUs);
