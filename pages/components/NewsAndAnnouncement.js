import Body from "components/typography/Body";
import styled from "styled-components";
import { GRAY10, RED40 } from "styles/colors";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
} from "styles";
import Divider from "components/Divider";
import Button from "components/Button";
import { ArrowRightOutlined } from "@ant-design/icons";
import ButtonArrowIcon from "components/icons/ButtonArrowIcon";
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
  }
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY10};

  &:not(:first-child) {
    margin-top: 32px;
  }

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
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
  padding: 24px;
  width: 100%;
`;

export default () => (
  <ComponentContainer>
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
    <ListContainer>
      <ListHeader>
        <Body bold>Announcements</Body>
        <Divider />
      </ListHeader>
      <ListBody></ListBody>
      <ListFooter>
        <Button>
          More
          <ButtonArrowIcon style={{ marginLeft: 8 }} />
        </Button>
      </ListFooter>
    </ListContainer>
  </ComponentContainer>
);
