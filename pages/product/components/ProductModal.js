import styled from "styled-components";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Caption2 from "components/typography/Caption2";
import Subtitle from "components/typography/Subtitle";
import { Modal } from "antd";
import { GRAY10, GRAY20, GRAY30, RED30, RED40 } from "styles/colors";
import Button from "components/Button";
import { mediaQueriesBiggerThan, gutter, gutter_vertical } from "styles";

const ProductModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ProductInfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EducationContainer = styled.div`
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 18px;
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
  margin-top: 30px;
  display: flex;
  justify-content: center;
  ${mediaQueriesBiggerThan("sm")} {
  }
`;
const Photo = styled.img`
  width: 80%;
  ${mediaQueriesBiggerThan("sm")} {
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductTitle = styled.div``;
const ProductDescription = styled.div`
  width: 100%;
  margin-top: 35px;
  ${mediaQueriesBiggerThan("sm")} {
  }
`;
const ProductModal = ({ visible, setVisible, images = [], title, description }) => {
  return (
    <Modal
      visible={visible}
      title={null}
      footer={null}
      closable={false}
      width={644}
    >
      <ProductModalContainer>
        <ProductInfoContainer>
          <TextInfo>
            <ProductTitle>
              <Subtitle bold style={{ color: RED40 }}>
                {title}
              </Subtitle>
            </ProductTitle>
            <ProductDescription>
              <Body>{description}</Body>
            </ProductDescription>
          </TextInfo>
          <PhotoContainer>
            <Photo src={images[0] || ""} />
          </PhotoContainer>
        </ProductInfoContainer>
        <EducationContainer>
          <Title>
            <Divider></Divider>
          </Title>
        </EducationContainer>
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
      </ProductModalContainer>
    </Modal>
  );
};

export default ProductModal;
