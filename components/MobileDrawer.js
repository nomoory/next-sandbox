import Body from "components/typography/Body";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { header_height_mobile } from "styles";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

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
const CloseDrawerButton = styled.button``;

const BUTTONS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "EDmicBio",
    href: "/edmicbio",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const MobileDrawer = ({ visible, closeDrawer }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const mainPath = pathname.split("/")[1];
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={closeDrawer}
      visible={visible}
      bodyStyle={{ padding: 0 }}
    >
      <DrawerContainer>
        <BoxContainer>
          <CloseDrawerButton onClick={closeDrawer}>
            <ArrowRightIcon width={32} height={32} />
          </CloseDrawerButton>
        </BoxContainer>
        {BUTTONS.map(({ name, href }) => (
          <Link key={href} href={href}>
            <BoxContainer>
              <Body bold={`/${mainPath}` === href}>{name}</Body>
            </BoxContainer>
          </Link>
        ))}
      </DrawerContainer>
    </Drawer>
  );
};

export default MobileDrawer;
