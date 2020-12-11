import { Drawer } from "antd";
import Link from "next/link";
import styled from "styled-components";

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;

`;
export default ({ visible, closeDrawer }) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement="top"
      closable={false}
      onClose={closeDrawer}
      visible={visible}
    >
      <DrawerContainer>
        <Link href="/">Home</Link>
        <Link href="/edmicbio" onClick={closeDrawer}>EDmicBio</Link>
        <Link href="/technology" onClick={closeDrawer}>Technology</Link>
        <Link href="/contact-us" onClick={closeDrawer}>Contact Us</Link>
      </DrawerContainer>
    </Drawer>
  );
};
