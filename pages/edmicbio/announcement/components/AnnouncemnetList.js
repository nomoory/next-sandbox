import Headline from "components/typography/Headline";
import Caption2 from "components/typography/Caption2";
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
import AnnouncementItem from "./AnnouncementItem";

const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 185px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-top: 16px;
    padding-bottom: 174px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
`;
const PaginationContainer = styled.div`
  width: 100%;
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

const AnnouncementList = () => {
  return (
    <ComponentContainer>
      <ListContainer>
        {ANNOUNCEMENTS.map(({ id, title, content, updatedAt, createdAt }) => (
          <AnnouncementItem 
            key={id}
            id={id}
            title={title}
            content={content}
            updatedAt={updatedAt}
            createdAt={createdAt}
          />
        ))}
      </ListContainer>
      <PaginationContainer></PaginationContainer>
    </ComponentContainer>
  );
};

export default AnnouncementList;
