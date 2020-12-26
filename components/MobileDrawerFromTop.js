import Body from "components/typography/Body";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { header_height_mobile } from "styles";
import ArrowRightIcon from "components/icons/ArrowRightIcon";
import { getSubCategoryIdsByCategoryid } from "components/Navigation";
const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  height: ${header_height_mobile}px;
  box-shadow: 0px 1px 0px #f4f4f4;
`;

const MobileDrawerFromTop = ({ visible, closeDrawer }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [nothing, mainPath, subPath] = pathname.split("/");
  const buttons = getSubCategoryIdsByCategoryid(mainPath).map(key => ({
    name: key
      .split("")
      .map((char, j) => (j === 0 ? char.toLocaleUpperCase() : char))
      .join("")
      .split("-")
      .join(" "),
    href: `/${mainPath}/${key}`
  }));
  return (
    <Drawer
      placement="top"
      closable={false}
      onClose={closeDrawer}
      visible={visible}
      bodyStyle={{ padding: 0 }}
      zIndex={12}
      height={(2 + buttons.length) * header_height_mobile}
    >
      <DrawerContainer>
        <BoxContainer></BoxContainer>
        <BoxContainer></BoxContainer>

        {buttons.map(({ name, href }) => (
          <Link key={href} href={href}>
            <BoxContainer>
              <Body bold={subPath && href.includes(`/${subPath}`)}>{name}</Body>
            </BoxContainer>
          </Link>
        ))}
      </DrawerContainer>
    </Drawer>
  );
};

export default MobileDrawerFromTop;
