import Headline from "components/typography/Headline";
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
import { GRAY20, GRAY80, RED40 } from "styles/colors";
import Member from "components/Member";
import ProductDetail from "./ProductDetail";
import { Fragment } from "react";
import { subtitleBold } from "@/components/typography/Subtitle";
import { bodyRegular } from "@/components/typography/Body";

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
    padding-bottom: 88px;
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

const GroupTitle = styled.div`
  ${subtitleBold}
  color: ${RED40};
  margin-bottom: 14px;
  ${mediaQueriesBiggerThan("sm")} {
    text-align: center;
  }
`
const GroupDescription = styled.div`
  ${bodyRegular}
  color: ${GRAY80};
  margin-bottom: 19px;
  ${mediaQueriesBiggerThan("sm")} {
    text-align: center;
  }
`
const GroupTitleContentDivider = styled.div`
  border: 1px solid ${GRAY20};
`;

const PRODUCT_GROUPS = [
  {
    title: "Organ on a chip",
    description: "Description of organ-on-a-chip",
    products: [
      {
        title: "OrganPrint - C",
        description:
          "3D 바이오프린팅, 바이오잉크, 그리고 미세유체 기술은 에드믹바이오 자체적으로 보유하고 있는 기술입니다. 이러한 기술들을 모두가 가질 수는 없지만 연구자들이 원하는 장기칩을 만들 수 있도록 키트의 형태로 제공합니다. 연구자들은 본인이 원하는 세포는 키운 뒤, OrganPrint-C 장기칩 제작 키트를 사용하여 원하는 장기칩을 제작할 수 있습니다.",
        images: ["/images/product/product_sample_image.png"],
      },
      {
        title: "OrganPrint - C",
        description:
          "3D 바이오프린팅, 바이오잉크, 그리고 미세유체 기술은 에드믹바이오 자체적으로 보유하고 있는 기술입니다. 이러한 기술들을 모두가 가질 수는 없지만 연구자들이 원하는 장기칩을 만들 수 있도록 키트의 형태로 제공합니다. 연구자들은 본인이 원하는 세포는 키운 뒤, OrganPrint-C 장기칩 제작 키트를 사용하여 원하는 장기칩을 제작할 수 있습니다.",
        images: ["/images/product/product_sample_image.png"],
      },
    ],
  },
];

const Product = () => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Product</Headline>
            <Divider />
          </Header>
        </Col>
        {PRODUCT_GROUPS.map((group) => (
          <Col key={group.title} span={24}>
            <GroupTitle>{group.title}</GroupTitle>
            <GroupDescription>{group.description}</GroupDescription>
            <GroupTitleContentDivider />
            <Row gutter={30} style={{justifyContent: "center"}}>
            {group.products.map((product) => (
              <Col xs={12} sm={{span: 8}}>
              <ProductDetail
                title={product.title}
                description={product.description}
                images={product.images}
              />
              </Col>
            ))}
            </Row>
          </Col>
        ))}
      </Row>
    </ComponentContainer>
  );
};

export default Product;
