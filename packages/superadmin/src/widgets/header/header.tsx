import { Bell } from "lucide-react";
import { Activity, memo, useState } from "react";
import arrowDown from "../../shared/assets/icons/arrow-down.svg";
import arrowUp from "../../shared/assets/icons/arrow-up.svg";
import { useAuth } from "../../features/auth/api/useAuth/authApi";

const Header = () => {
  const { getUser } = useAuth();
  const { data } = getUser();
  const fullName = data?.data?.full_name;
  const email = data?.data?.email;
  const role = data?.data?.role;

  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow((p) => !p);
  };
  return (
    <header className="p-4.5 shadow-lg flex justify-end relative">
      <div className="flex items-center">
        <div className="flex items-center gap-[19px]">
          <div>
            <Bell />
          </div>
          <div>
            <span className="text-[15px]">{fullName}</span>
            <p className="text-[11px] text-[#8C8C8C]">{role}</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>

        <div
          className="pl-4 pr-2 cursor-pointer hover:opacity-75 transition-all"
          onClick={handleShow}
        >
          {!show ? (
            <img className="w-4 h-4" src={arrowDown} alt="" />
          ) : (
            <img className="w-4 h-4" src={arrowUp} alt="" />
          )}
        </div>

        {
          <Activity mode={show ? "visible" : "hidden"}>
            <div className="absolute top-21 right-5 w-64 bg-white shadow-xl rounded-2xl p-5 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">
                User Info
              </h3>

              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex justify-between">
                  <span className="font-medium text-gray-500">Full name:</span>
                  <span className="text-gray-800">{fullName}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-gray-500">Email:</span>
                  <span className="text-gray-800">{email}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-gray-500">Role:</span>
                  <span className="capitalize text-gray-800">{role}</span>
                </p>
              </div>
            </div>
          </Activity>
        }
      </div>
    </header>
  );
};

export default memo(Header);
