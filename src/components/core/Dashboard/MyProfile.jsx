import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-10">
        <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 flex flex-col items-center sm:w-1/3">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover mb-4"
          />
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
          <br />
          <br />
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex flex-col gap-y-10 sm:w-2/3">
          <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-semibold text-richblack-5">About</p>
              <IconBtn
                text="Edit"
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              >
                <RiEditBoxLine />
              </IconBtn>
            </div>
            <p
              className={`${
                user?.additionalDetails?.about
                  ? "text-richblack-5"
                  : "text-richblack-400"
              } text-sm font-medium`}
            >
              {user?.additionalDetails?.about ??
                "Write Something About Yourself"}
            </p>
          </div>
          <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-semibold text-richblack-5">
                Personal Details
              </p>
              <IconBtn
                text="Edit"
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              >
                <RiEditBoxLine />
              </IconBtn>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">First Name</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.firstName}
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div>
                    <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                    <p className="text-sm font-medium text-richblack-5">
                      {user?.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-richblack-600">
                      Phone Number
                    </p>
                    <p className="text-sm font-medium text-richblack-5">
                      {user?.additionalDetails?.contactNumber ??
                        "Add Contact Number"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-richblack-600">
                      Date Of Birth
                    </p>
                    <p className="text-sm font-medium text-richblack-5">
                      {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                        "Add Date Of Birth"}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Email</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm text-richblack-600">Gender</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
