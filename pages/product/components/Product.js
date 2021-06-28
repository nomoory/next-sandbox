import { inject, observer } from "mobx-react";
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
import { Fragment, useEffect } from "react";
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
`;
const GroupDescription = styled.div`
  ${bodyRegular}
  color: ${GRAY80};
  margin-bottom: 19px;
  ${mediaQueriesBiggerThan("sm")} {
    text-align: center;
  }
`;
const GroupTitleContentDivider = styled.div`
  border: 1px solid ${GRAY20};
`;

const Product = ({ productStore }) => {
  useEffect(() => {
    productStore.loadAll();
  }, []);

  const productGroups = productStore.formattedDataArray || [];

  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Product</Headline>
            <Divider />
          </Header>
        </Col>
        {productGroups.map(
          (group) =>
            group.productList.length !== 0 && (
              <>
                <div id={group.title.split(" ").join("_")} />
                <Col
                  key={group.title}
                  xs={{ span: 24, offset: 0 }}
                  sm={{ span: 18, offset: 3 }}
                  xl={{ span: 14, offset: 5 }}
                  style={{ marginBottom: 80 }}
                >
                  <GroupTitle>{group.title}</GroupTitle>
                  <GroupDescription>{group.description}</GroupDescription>
                  <GroupTitleContentDivider />
                  <Row gutter={30} style={{ justifyContent: "center" }}>
                    {group.productList.map((product, index) => (
                      <Col key={product.title + index} xs={12} sm={{ span: 8 }}>
                        <ProductDetail
                          title={product.title}
                          description={product.description}
                          images={product.images}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </>
            )
        )}
      </Row>
    </ComponentContainer>
  );
};

export default inject("productStore")(observer(Product));
