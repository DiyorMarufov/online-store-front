import { memo } from "react";
import logo from "../../../shared/assets/logo/logo1.svg";
import { Button, Form, Input, type FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../api/useAuth/authApi";
import type { IAuthUser } from "../../../shared/lib/types";
import { useDispatch } from "react-redux";
import { setToken } from "../model/authSlice";
import { useApiNotification } from "../../../shared/hooks/useApiNotification";
import { jwtDecode } from "jwt-decode";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signInUser } = useAuth();
  const { handleApiError } = useApiNotification();
  const onFinish: FormProps<FieldType>["onFinish"] = (values: IAuthUser) => {
    signInUser.mutate(values, {
      onSuccess: (res) => {
        const accessToken = res?.data?.accessToken;
        const decoded: any = jwtDecode(accessToken);
        const role = decoded?.role;
        if (role !== "superadmin") {
          handleApiError("Superadmin huquqiga ega emassiz", "top");
          return;
        }
        dispatch(setToken(accessToken));
        navigate("/");
      },
      onError: (err: any) => {
        let errorName = err?.response?.data?.message;
        let errorMsg: any;

        switch (true) {
          case errorName === "Email or password incorrect":
            errorMsg = "Telefon raqam yoki parol noto'g'ri";
            break;
          default:
            errorMsg = "Server nosozlik";
            break;
        }
        handleApiError(errorMsg, "top");
      },
    });
  };

  return (
    <div className="h-screen flex items-center justify-center px-5">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-lg ">
        <div className="flex justify-center">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="mt-5 pb-8">
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
          autoComplete="off"
        >
          <span className="text-[#242424] font-bold text-[15px]">Email</span>
          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input placeholder="Enter email" className="h-11" />
          </Form.Item>

          <span className="text-[#242424] font-bold text-[15px]">Password</span>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter password" className="h-11" />
          </Form.Item>

          <Form.Item>
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
        </Form>
      </div>
    </div>
  );
};

export default memo(LoginForm);
