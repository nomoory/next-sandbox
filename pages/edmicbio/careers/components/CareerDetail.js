import { useEffect, Fragment } from "react";
import Headline from "components/typography/Headline";
import { useRouter } from "next/router";
import { inject, observer } from "mobx-react";
import Caption2, { caption2Regular } from "components/typography/Caption2";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";
import Button from "components/Button";
import ButtonArrowIcon from "components/icons/ButtonArrowIcon";
import { GRAY20, GRAY30, GRAY60, GRAY90 } from "styles/colors";
import { getTimeComponent } from "utils";
const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 84px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 165px;
  }
`;

const CareerItem = styled.div`
  width: 100%;
  padding-top: 29px;
  padding-bottom: 27px;
`;
const CareerHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${GRAY20};
`;
const UpdatedAt = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 20px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
const Title = styled.div`
  width: 100%;
`;
const Content = styled.pre`
  margin-top: 30px;
  width: 100%;
  ${caption2Regular}
  color: ${GRAY60};
  white-space: pre-wrap;
`;
const ContentContainer = styled.div``;

const ContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 24px ${side_padding_mobile}px;
  ${mediaQueriesBiggerThan("sm")} {
    padding: 24px ${side_padding_desktop}px;
  }
`;

const CareerDetail = ({ id, careerStore }) => {
  useEffect(() => {
    careerStore.loadById(id);
    return () => {
      careerStore.initData();
    };
  }, []);
  const { title, content, updatedAt, createdAt } = careerStore.data || {};
  const { month, date, year } = getTimeComponent(updatedAt);
  const router = useRouter();

  console.log({ content });
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col span={24}>
          <CareerItem>
            <CareerHeader>
              <Title>
                <Headline bold style={{ color: GRAY90 }}>
                  {title}
                </Headline>
              </Title>
              {updatedAt && (
                <UpdatedAt>
                  <Caption2
                    bold
                    style={{
                      color: GRAY30,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {`${month} ${date},${year}`}
                  </Caption2>
                </UpdatedAt>
              )}
            </CareerHeader>
            <ContentContainer>
              <Content>
                {content &&
                  content.split(`\\n`).map((paragraph) => (
                    <Fragment key={paragraph}>
                      {paragraph}
                      <br />
                    </Fragment>
                  ))}
              </Content>
            </ContentContainer>
            <ContentFooter>
              <Button
                type="primary"
                onClick={() => {
                  router.push(`/contact-us`);
                }}
              >
                to apply for EDmicBio
                <ButtonArrowIcon style={{ marginLeft: 8 }} />
              </Button>
            </ContentFooter>
          </CareerItem>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default inject("careerStore")(observer(CareerDetail));
