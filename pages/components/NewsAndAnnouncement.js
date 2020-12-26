import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import Body from "components/typography/Body";
import styled from "styled-components";
import { Col, Row } from "antd";
import { GRAY10, GRAY40, GRAY60 } from "styles/colors";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter
} from "styles";
import Divider from "components/Divider";
import Button from "components/Button";
import ButtonArrowIcon from "components/icons/ButtonArrowIcon";
import Caption1 from "@/components/typography/Caption1";
import Caption2 from "@/components/typography/Caption2";
import { getTimeText } from "utils";

const ComponentContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 60px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 100px;
    padding-top: 100px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY10};

  &:not(:first-child) {
    margin-top: 32px;
  }
`;

const ListHeader = styled.div`
  padding: 24px 24px 20px 24px;
  width: 100%;
`;
const ListBody = styled.div``;
const ListFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 24px ${side_padding_mobile}px;
  ${mediaQueriesBiggerThan("sm")} {
    padding: 24px ${side_padding_desktop}px;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  padding-top: 12px;
  padding-bottom: 8px;
  min-height: 87px;
  cursor: pointer;
  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
  }
`;
export const ListItemTitle = styled.div``;
export const ListItemUpdatedAt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ListItem = ({ title, updatedAt, even, onClick }) => {
  return (
    <ListItemContainer
      style={{ backgroundColor: even ? "#E5E5E6" : "none" }}
      onClick={onClick}
    >
      <ListItemTitle>
        <Caption1 style={{ color: even ? GRAY60 : GRAY40 }}>
          {title.length > 70 ? `${title.slice(0, 70)}...` : title}
        </Caption1>
      </ListItemTitle>
      <ListItemUpdatedAt>
        <Caption2 bold style={{ color: even ? GRAY60 : GRAY40 }}>
          {getTimeText(updatedAt, 1)}
        </Caption2>
      </ListItemUpdatedAt>
    </ListItemContainer>
  );
};

const NewsAndAnnouncement = ({ announcementStore }) => {
  useEffect(() => {
    announcementStore.loadAll();
  }, []);
  const router = useRouter();
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[32]}>
        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10, offset: 2 }}>
          <ListContainer>
            <ListHeader>
              <Body bold>News</Body>
              <Divider />
            </ListHeader>
            <ListBody></ListBody>
            <ListFooter>
              <Button type="primary">
                More
                <ButtonArrowIcon style={{ marginLeft: 8 }} />
              </Button>
            </ListFooter>
          </ListContainer>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10 }}>
          <ListContainer>
            <ListHeader>
              <Body bold>Announcements</Body>
              <Divider />
            </ListHeader>
            <ListBody>
              {announcementStore.dataArray.map(
                ({ id, title, updatedAt }, index) => {
                  return (
                    <ListItem
                      key={id}
                      title={title}
                      updatedAt={updatedAt}
                      even={index % 2 == 1}
                      onClick={() => {
                        router.push(`/edmicbio/announcement/${id}`);
                      }}
                    />
                  );
                }
              )}
            </ListBody>
            <ListFooter>
              <Button
                onClick={() => {
                  router.push(`/edmicbio/announcement`);
                }}
              >
                More
                <ButtonArrowIcon style={{ marginLeft: 8 }} />
              </Button>
            </ListFooter>
          </ListContainer>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default inject("announcementStore")(observer(NewsAndAnnouncement));
