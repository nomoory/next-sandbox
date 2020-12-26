import Headline from "components/typography/Headline";
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
const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  ${caption2Regular}
  color: ${GRAY60};
  white-space: pre-line;
`;
const ContentContainer = styled.div``;

const MONTHES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const ANNOUNCEMENT = {
  title:
    "Emulate Signs Collaborative Agreement with the FDA to Apply Lung-Chip to Evaluate Safety of COVID-19 Vaccines",
  content: `Minifab joins Emulate’s collaborative community that is working to further develop and validate the Human Emulation System\n

    Emulate, Inc. and Minifab have formed a strategic manufacturing partnership to accelerate the scaling and commercialization of Emulate’s Organs-on-Chips technology and their Human Emulation System, which is providing researchers with a new standard for predicting how humans may respond to medicines, chemicals, and foods.\n
    
    With this announcement, Minifab joins Emulate’s growing collaborative community, which is working together to develop and validate the Human Emulation System for use in a wide range of industries that relate to human health, including disease research, drug discovery and development, regulatory sciences, and, ultimately, precision medicine applications for patients. The collaborative agreement allows for Minifab’s team of experts to work closely alongside Emulate biologists, designers, and engineers, and apply their expertise in manufacturing transfer and high-volume manufacturing automation for scaling and commercializing Emulate products.`,
  updatedAt: Date.now(),
  createdAt: 1607905158766
};

const AnnouncementDetail = ({
  title = ANNOUNCEMENT.title,
  content = ANNOUNCEMENT.content,
  updatedAt = ANNOUNCEMENT.updatedAt,
  createdAt
}) => {
  const updatedTime = new Date(updatedAt);
  const monthIndex = updatedTime.getMonth();
  const date = updatedTime.getDate();
  const year = updatedTime.getFullYear();
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
                  {`${MONTHES[monthIndex]} ${date},${year}`}
                </Caption2>
              </UpdatedAt>
            </AnnouncementHeader>
            <ContentContainer>
              <Content>{content}</Content>
            </ContentContainer>
          </AnnouncementItem>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default AnnouncementDetail;
