import { memo } from "react";
import logo from "../../../shared/assets/logo/logo1.svg";
import { Button, Form, Input, type FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../api/useAuth/authApi";
import type { IAuthUser } from "../../../shared/lib/types";
import { useDispatch } from "react-redux";
import { setToken } from "../model/authSlice";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signInUser } = useAuth();
  const onFinish: FormProps<FieldType>["onFinish"] = (values: IAuthUser) => {
    signInUser.mutate(values, {
      onSuccess: (res) => {
        dispatch(setToken(res?.data?.accessToken));
        navigate("/");
      },
    });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo: any
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-1/2 flex flex-col mt-50">
        <div className="flex justify-center">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="mt-10 px-50 pb-8">
          <h1 className="font-bold text-[24px] text-[#141414]">
            Sign into your Account
          </h1>
          <p className="font-light text-[16px] text-[#242424]">
            Sign into your account to continue using same-day shopper
          </p>
        </div>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="px-50">
            <span className="text-[#242424] font-bold text-[15px]">Email</span>
            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Enter email" className="h-11" />
            </Form.Item>

            <span className="text-[#242424] font-bold text-[15px]">
              Password
            </span>
            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter password" className="h-11" />
            </Form.Item>

            <Form.Item label={null}>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-11! bg-bg-sy! mt-4"
                loading={signInUser.isPending}
                disabled={signInUser.isPending}
              >
                Sign in
              </Button>
            </Form.Item>

            <div className="flex justify-center">
              <span className="cursor-pointer select-none text-bg-sy hover:underline">
                Forgot Password?
              </span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default memo(LoginForm);
