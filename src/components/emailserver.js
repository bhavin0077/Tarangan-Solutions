
import { Form, Input, Button, Card, Row } from "antd";
import EmailService  from "../services/email";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const server = () => {
  const onFinish = (values) => {
    console.log(values);
    EmailService.sendEmail(values)
  };

  return (
    <Row>
      <Card title="Email" style={{ width: 500 }}>
        <Form layout="vertical" name="nest-messages" onFinish={onFinish}>
          <Form.Item name="from_name" label="name">
            <Input />
          </Form.Item>

          {/* <Form.Item name="to_name" label="To name">
            <Input />
          </Form.Item> */}

          <Form.Item
            name="to_email"
            label=" email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="message" label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Send email
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default server;