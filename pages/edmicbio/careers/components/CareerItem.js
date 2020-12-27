import Headline from "components/typography/Headline";
import Caption2 from "components/typography/Caption2";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { mediaQueriesBiggerThan } from "styles";
import { GRAY20, GRAY30, GRAY60, GRAY90 } from "styles/colors";
import ArrowRightIcon from "components/icons/ArrowRightIcon";
import { getTimeText } from "utils";

const CareerItemContainer = styled.div`
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
const CareerInfoContainer = styled.div`
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
            {getTimeText(updatedAt)}
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
      </CareerInfoContainer>
      <HoverButtonContainer>
        <HoverButton>
          <ArrowRightIcon color={hovered ? GRAY90 : GRAY20} />
        </HoverButton>
      </HoverButtonContainer>
    </CareerItemContainer>
  );
};

export default CareerItem;
