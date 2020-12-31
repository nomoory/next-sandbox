import Caption2 from "components/typography/Caption2";
import Caption1 from "components/typography/Caption1";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { mediaQueriesBiggerThan } from "styles";
import { GRAY20, RED40, GRAY60 } from "styles/colors";

const CareerItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY20};
  cursor: pointer;

  ${mediaQueriesBiggerThan("sm")} {
    padding-top: 29px;
    padding-bottom: 27px;
  }
`;
const CareerInfoContainer = styled.div`
  width: 100%;
  flex: 4;
`;
const Title = styled.div`
  width: 100%;

  ${mediaQueriesBiggerThan("sm")} {
  }
`;
const Content = styled.div`
  width: 100%;
  margin-top: 4px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 2px;
  }
`;

const CareerItem = ({ id, title = "", content = "", updatedAt, createdAt }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  return (
    <CareerItemContainer
      key={title}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        router.push(`/edmicbio/careers/${id}`);
      }}
    >
      <CareerInfoContainer>
        <Title>
          <Caption1 bold style={{ color: RED40 }}>
            {title.slice(0, 60)}
            {title.length > 60 ? "..." : ""}
          </Caption1>
        </Title>
        <Content>
          <Caption2 style={{ color: GRAY60 }}>
            {content.slice(0, 200)}
            {content.length > 200 ? "..." : ""}
          </Caption2>
        </Content>
      </CareerInfoContainer>
    </CareerItemContainer>
  );
};

export default CareerItem;
