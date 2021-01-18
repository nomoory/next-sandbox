import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";
import { GRAY50, GRAY20 } from "styles/colors";
import { withTranslation } from "../../../../i18n";

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 200px;
  }
`;

const Header = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 22px;
  }
`;

const FirstImage = styled.img`
  width: 100%;
  margin-top: 20px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 38px;
  }
`;

const TextContainer = styled.div`
  margin-top: 24px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

const BrOnDesktop = styled.br`
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    display: initial;
  }
`;
const BrOnMobile = styled.br`
  display: initial;
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY20};
  text-align: center;
  ${mediaQueriesBiggerThan("sm")} {
    padding-bottom: 26px;
  }
`;

const Bioink = ({ t }) => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Bioink</Headline>
            <Divider />
            <DescriptionContainer>
              <Body>{t("bioink_1")}</Body>
            </DescriptionContainer>
          </Header>
        </Col>
        <Col xs={24}>
          <FirstImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fbioink%2Fbioink.jpg?alt=media&token=ab6d1e7d-a6c4-4d06-a06a-126168ee9139" />
        </Col>
        <Col xs={24}>
          <TextContainer>
            <Caption1 style={{ color: GRAY50 }}>
              {t("bioink_2")}
              <br />
              <BrOnMobile />
              {t("bioink_3")}
            </Caption1>
          </TextContainer>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(Bioink);
