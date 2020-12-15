import Headline from "components/typography/Headline";
import Caption2 from "components/typography/Caption2";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";
import { GRAY20, GRAY30, GRAY60, GRAY90 } from "styles/colors";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

const AnnouncementItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${GRAY20};
  cursor: pointer;

  ${mediaQueriesBiggerThan("sm")} {
    padding-top: 29px;
    padding-bottom: 27px;
  }
`;
const AnnouncementInfoContainer = styled.div`
  width: 100%;
  flex: 4;
`;
const UpdatedAt = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  margin-top: 12px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 17px;
  }
`;
const Content = styled.div`
  width: 100%;
  margin-top: 10px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 2px;
  }
`;
const HoverButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const HoverButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ANNOUNCEMENTS = [
  {
    id: 123,
    title:
      "Emulate Signs Collaborative Agreement with the FDA to Apply Lung-Chip to Evaluate Safety of COVID-19 Vaccines",
    content: `Minifab joins Emulate’s collaborative community that is working to further develop and validate the Human Emulation System

    Emulate, Inc. and Minifab have formed a strategic manufacturing partnership to accelerate the scaling and commercialization of Emulate’s Organs-on-Chips technology and their Human Emulation System, which is providing researchers with a new standard for predicting how humans may respond to medicines, chemicals, and foods.
    
    With this announcement, Minifab joins Emulate’s growing collaborative community, which is working together to develop and validate the Human Emulation System for use in a wide range of industries that relate to human health, including disease research, drug discovery and development, regulatory sciences, and, ultimately, precision medicine applications for patients. The collaborative agreement allows for Minifab’s team of experts to work closely alongside Emulate biologists, designers, and engineers, and apply their expertise in manufacturing transfer and high-volume manufacturing automation for scaling and commercializing Emulate products.`,
    updatedAt: Date.now(),
    createdAt: 1607905158766,
  },
];

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
  "December",
];

const AnnouncementItem = ({ id, title = "", content = "", updatedAt, createdAt }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const updatedTime = new Date(updatedAt);
  const monthIndex = updatedTime.getMonth();
  const date = updatedTime.getDate();
  const year = updatedTime.getFullYear();
  return (
    <AnnouncementItemContainer
      key={title}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        router.push(`/edmicbio/announcement/${id}`);
      }}
    >
      <AnnouncementInfoContainer>
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
            {`${MONTHES[monthIndex]} ${date},${year}`}
          </Caption2>
        </UpdatedAt>
        <Title>
          <Headline style={{ color: GRAY90 }}>
            {title.slice(0, 60)}
            {title.length > 60 ? "..." : ""}
          </Headline>
        </Title>
        <Content>
          <Caption2 style={{ color: GRAY60 }}>
            {content.slice(0, 200)}
            {content.length > 200 ? "..." : ""}
          </Caption2>
        </Content>
      </AnnouncementInfoContainer>
      <HoverButtonContainer>
        <HoverButton>
          <ArrowRightIcon color={hovered ? GRAY90 : GRAY20} />
        </HoverButton>
      </HoverButtonContainer>
    </AnnouncementItemContainer>
  );
};

export default AnnouncementItem;
