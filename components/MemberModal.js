import styled from "styled-components";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Caption2 from "components/typography/Caption2";
import Subtitle from "components/typography/Subtitle";
import { Modal } from "antd";
import { GRAY10, GRAY20, GRAY30, RED30 } from "styles/colors";
import Button from "components/Button";
import { mediaQueriesBiggerThan, gutter, gutter_vertical } from "styles";

const MemberModalContainer = styled.div``;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const EducationContainer = styled.div`
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 18px;
  }
`;
const CareerContainer = styled.div`
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 32px;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${mediaQueriesBiggerThan("sm")} {
    margin-bottom: 18px;
  }
`;
const Divider = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${GRAY20};
  margin-left: 10px;
`;

const PhotoContainer = styled.div`
  flex: 2;
  ${mediaQueriesBiggerThan("sm")} {
    flex: 2;
  }
`;
const Photo = styled.img`
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
  }
`;

const Profile = styled.div`
  margin-left: 16px;
  flex: 4;
  ${mediaQueriesBiggerThan("sm")} {
    margin-left: 30px;
  }
`;
const Name = styled.div`
  width: 100%;
`;
const Position = styled.div`
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 8px;
  }
`;
const DescriptionIn = styled.div`
  width: 100%;
  padding: 14px 20px;
  background-color: ${GRAY10};
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 18px;
    padding: 18px 20px 14px 20px;
    display: flex;
  }
`;

const DescriptionOut = styled.div`
  width: 100%;
  padding: 14px 20px;
  background-color: ${GRAY10};
  display: flex;
  margin-top: 21px;
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;
const MemberModal = ({
  visible,
  setVisible,
  photo,
  name,
  position,
  description,
  education,
  career,
}) => {
  return (
    <Modal
      visible={visible}
      title={null}
      footer={null}
      closable={false}
      width={644}
    >
      <MemberModalContainer>
        <ProfileContainer>
          <PhotoContainer>
            <Photo src={photo} />
          </PhotoContainer>
          <Profile>
            <Name>
              <Subtitle bold>{name}</Subtitle>
            </Name>
            <Position>
              <Body style={{ color: RED30 }}>{position}</Body>
            </Position>
            <DescriptionIn>
              <Caption1>{description}</Caption1>
            </DescriptionIn>
          </Profile>
        </ProfileContainer>
        <DescriptionOut>
          <Caption1>{description}</Caption1>
        </DescriptionOut>
        <EducationContainer>
          <Title>
            <Caption2 style={{ color: GRAY30 }}>Education</Caption2>
            <Divider></Divider>
          </Title>
          <Caption1>{education}</Caption1>
        </EducationContainer>
        <CareerContainer>
          <Title>
            <Caption2 style={{ color: GRAY30 }}>Career</Caption2>
            <Divider></Divider>
          </Title>
          <Caption1>{career}</Caption1>
        </CareerContainer>
        <FooterContainer>
          <Button
            type="primary"
            onClick={(e) => {
              setVisible(false);
            }}
          >
            Close
          </Button>
        </FooterContainer>
      </MemberModalContainer>
    </Modal>
  );
};

export default MemberModal;
