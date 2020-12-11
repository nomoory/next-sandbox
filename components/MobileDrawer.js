import { Drawer, Button, Radio, Space } from 'antd';

export default ({ visible, closeDrawer}) => {

  return (
    <Drawer
      title="Basic Drawer"
      placement="top"
      closable={false}
      onClose={closeDrawer}
      visible={visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>

  )
};
