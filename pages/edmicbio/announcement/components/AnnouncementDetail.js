import { useEffect, Fragment } from "react";
import Headline from "components/typography/Headline";
import { inject, observer } from "mobx-react";
import Caption2, { caption2Regular } from "components/typography/Caption2";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical
} from "styles";
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

const AnnouncementItem = styled.div`
  width: 100%;
  padding-top: 29px;
  padding-bottom: 27px;
`;
const AnnouncementHeader = styled.div`
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

const AnnouncementDetail = ({ id, announcementStore }) => {
  useEffect(() => {
    announcementStore.loadById(id);
  }, []);
  const { title, content, updatedAt, createdAt } = announcementStore.data || {};
  const { month, date, year } = getTimeComponent(updatedAt);

  console.log({ content });
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col>
          <AnnouncementItem>
            <AnnouncementHeader>
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
                      whiteSpace: "nowrap"
                    }}
                  >
                    {`${month} ${date},${year}`}
                  </Caption2>
                </UpdatedAt>
              )}
            </AnnouncementHeader>
            <ContentContainer>
              <Content>
                {content &&
                  content.split(`\\n`).map(paragraph => (
                    <Fragment key={paragraph}>
                      {paragraph}
                      <br />
                    </Fragment>
                  ))}
              </Content>
            </ContentContainer>
          </AnnouncementItem>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default inject("announcementStore")(observer(AnnouncementDetail));
