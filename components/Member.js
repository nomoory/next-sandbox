import { useState } from "react";
import styled from "styled-components";
import Body from "components/typography/Body";
import Caption2 from "components/typography/Caption2";
import Subtitle from "components/typography/Subtitle";
import { mediaQueriesBiggerThan } from "styles";
import { RED40, GRAY10 } from "styles/colors";
import MemberModal from "components/MemberModal";

const MemberContainer = styled.div`
  width: 100%;
`;
const Photo = styled.img`
  width: 100%;
  margin-top: 20px;
  ${mediaQueriesBiggerThan("sm")} {
  }
`;
const PhotoContainer = styled.div`
  position: relative;
`;
const NameContainer = styled.div`
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 24px;
  }
  margin-top: 12px;
`;
const PositionContainer = styled.div`
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 8px;
  }
  margin-top: 4px;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(6, 6, 6, 0.6);
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const MoreButton = styled.button`
  width: 91px;
  height: 48px;

  border: 1px solid ${GRAY10};
  box-sizing: border-box;
  border-radius: 2px;
`;

const Member = ({
  name,
  position,
  positionSub,
  photo,
  education,
  description,
  career,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <MemberContainer>
      <PhotoContainer>
        <Photo src={photo} />
        <ButtonContainer>
          <MoreButton
            onClick={(e) => {
              setVisible(true);
            }}
          >
            <Body style={{ color: GRAY10 }}>More</Body>
          </MoreButton>
          <MemberModal
            visible={visible}
            setVisible={setVisible}
            name={name}
            position={position}
            photo={photo}
            education={education}
            career={career}
            description={description}
          />
        </ButtonContainer>
      </PhotoContainer>
      <NameContainer>
        <Subtitle bold>{name}</Subtitle>
      </NameContainer>
      <PositionContainer>
        <Body style={{ color: RED40 }}>{position}</Body>
        {positionSub ? (
          <Caption2 style={{ color: RED40 }}> {positionSub}</Caption2>
        ) : (
          ""
        )}
      </PositionContainer>
    </MemberContainer>
  );
};

export default Member;
