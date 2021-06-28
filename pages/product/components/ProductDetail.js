import { useState } from "react";
import styled from "styled-components";
import Subtitle from "components/typography/Subtitle";
import Caption2 from "components/typography/Caption2";
import { mediaQueriesBiggerThan } from "styles";
import { RED40, GRAY10 } from "styles/colors";
import ProductModal from "./ProductModal";
import CartIcon from "components/icons/CartIcon";

const ProductContainer = styled.div`
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
  cursor: pointer;
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
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDetail = ({ title, description, images = [] }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ProductContainer>
      <PhotoContainer
        onClick={(e) => {
          setVisible(true);
        }}
      >
        <Photo src={images ? images[0] : ""} />
        <ButtonContainer>
          <MoreButton>
            <Subtitle style={{ color: GRAY10 }}>{title}</Subtitle>
            <CartIcon style={{ marginTop: 20 }} />
          </MoreButton>
        </ButtonContainer>
      </PhotoContainer>
      <ProductModal
        visible={visible}
        setVisible={setVisible}
        title={title}
        description={description}
        images={images}
      />
    </ProductContainer>
  );
};

export default ProductDetail;
