import React from 'react';
import { Button, Flex } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const App: React.FC = () => (
  <>
  <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
  <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
  <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 94 }} />
  </>
);

export default App;