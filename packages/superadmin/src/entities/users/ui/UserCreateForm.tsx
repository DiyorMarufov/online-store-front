import { Button, Form, Input, Select, type FormProps } from "antd";
import { Option } from "antd/es/mentions";
import { memo } from "react";

type FieldType = {
  full_name: string;
  email: string;
  password: string;
  role: "admin" | "merchant";
  is_verified?: boolean;
  status?: "active" | "inactive";
};

const UserCreateForm = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="w-full min-h-[700px] flex justify-center items-center">
      <div className="rounded-md w-[70%]">
        <Form
          name="user-create"
          layout="vertical"
          className="grid grid-cols-2 gap-6"
          initialValues={{
            status: "active",
            is_verified: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div>
            <span className="block mb-2 text-[17px] font-bold text-gray-700">
              Enter Full Name
            </span>
            <Form.Item
              name="full_name"
              rules={[{ required: true, message: "Please input full name!" }]}
            >
              <Input placeholder="Enter full name" className="h-11!" />
            </Form.Item>
          </div>

          <div>
            <span className="block mb-2 text-[17px] font-bold text-gray-700">
              Enter Email Address
            </span>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter email" className="h-11!" />
            </Form.Item>
          </div>

          <div>
            <span className="block mb-2 text-[17px] font-bold text-gray-700">
              Enter Password
            </span>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input password!" }]}
            >
              <Input.Password placeholder="Enter password" className="h-11!" />
            </Form.Item>
          </div>

          <div>
            <span className="block mb-2 text-[17px] font-bold text-gray-700">
              Select Role
            </span>
            <Form.Item
              name="role"
              rules={[{ required: true, message: "Please select a role!" }]}
            >
              <Select placeholder="Select role" className="h-11!">
                <Option value="admin">Admin</Option>
                <Option value="merchant">Merchant</Option>
              </Select>
            </Form.Item>
          </div>

          <div>
            <span className="block mb-2 text-[17px] font-bold text-gray-700">
              Select Verification Status (optional)
            </span>
            <Form.Item name="is_verified">
              <Select
                placeholder="Select verification status"
                className="h-11!"
              >
                <Option value={true}>Verified</Option>
                <Option value={false}>Not Verified</Option>
              </Select>
            </Form.Item>
          </div>

          <div>
            <span className="block mb-2 text-[17px] font-bold text-gray-700">
              Select Account Status (optional)
            </span>
            <Form.Item name="status">
              <Select placeholder="Select status" className="h-11!">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="h-11! w-[150px]"
              >
                Create User
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default memo(UserCreateForm);
