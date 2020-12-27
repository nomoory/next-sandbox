import { headlineRegular } from "components/typography/Headline";
import Caption2 from "components/typography/Caption2";
import { bodyRegular } from "components/typography/Body";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { mediaQueriesBiggerThan } from "styles";
import { GRAY20, GRAY30, GRAY60, GRAY90, RED40 } from "styles/colors";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

const PItemContainer = styled.div`
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
const NewsInfoContainer = styled.div`
  width: 100%;
  flex: 4;
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
  ${bodyRegular}
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 2px;
    ${headlineRegular}
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
const PItem = ({
  id,
  title = "",
  media = "",
  updatedAt,
  createdAt,
  content = "",
  link
}) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  return (
    <PItemContainer
      key={title}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        if (typeof window !== "undefined") {
          const win = window.open(link, "_blank");
          win.focus();
        }
      }}
    >
      <NewsInfoContainer>
        <Title style={{ color: GRAY90 }}>
          {title.slice(0, 60)}
          {title.length > 60 ? "..." : ""}
        </Title>
        {content && (
          <Content>
            <Caption2 style={{ color: GRAY60 }}>
              {content.slice(0, 200)}
              {content.length > 200 ? "..." : ""}
            </Caption2>
          </Content>
        )}
      </NewsInfoContainer>
      <HoverButtonContainer>
        <HoverButton>
          <ArrowRightIcon color={hovered ? GRAY90 : GRAY20} />
        </HoverButton>
      </HoverButtonContainer>
    </PItemContainer>
  );
};

export default PItem;
