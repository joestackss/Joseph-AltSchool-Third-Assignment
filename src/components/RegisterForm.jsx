import Button from "../shared/Button";
import { activityLevelData } from "../constants";

const RegisterForm = () => {
  return (
    <form className="flex justify-between items-center space-y-4 w-[892px] p-8 shadow-2xl  h-full  ">
      {/* Section One */}
      <div className=" flex flex-wrap w-[60%]">
        {" "}
        <p>Checkout</p>
        {/* First Name */}
        <div className="rounded-md w-full sm:w-[45%]">
          <label
            htmlFor="firstname"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            First Name
          </label>

          <div className="pt-1 rounded-md">
            <input
              required
              id="firstname"
              type="text"
              placeholder="Enter first name"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6] sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/* Lastname */}
        <div className="rounded-md w-full sm:w-[45%]">
          <label
            htmlFor="lastname"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Last Name
          </label>

          <div className="pt-1 rounded-md">
            <input
              id="lastname"
              type="text"
              placeholder="Enter last name"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/* Gender */}
        <div className="rounded-md w-full sm:w-[45%]">
          <label
            htmlFor="gender"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Gender
          </label>

          <div className="pt-1 rounded-md">
            <select
              required
              id="gender"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            >
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {/* Date of Birth */}
        <div className="rounded-md w-full sm:w-[45%]">
          <label
            htmlFor="dob"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Date of Birth
          </label>

          <div className="pt-1 rounded-md">
            <input
              required
              id="dob"
              type="date"
              placeholder="Enter your date of birth"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/* Weight */}
        <div className="rounded-md w-full sm:w-[45%]">
          <label
            htmlFor=" weight"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Weight (KG)
          </label>

          <div className="pt-1 rounded-md">
            <input
              required
              id="weight"
              type="text"
              placeholder=" Enter Weight"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/* Height */}
        <div className="rounded-md w-full sm:w-[45%]">
          <label
            htmlFor=" height"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Height (CM)
          </label>

          <div className="pt-1 rounded-md">
            <input
              required
              id="height"
              type="text"
              placeholder=" Enter Height Here"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/* Activity Level */}
        <div className="rounded-md w-full sm:w-[100%]">
          <label
            htmlFor="country"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Activity Level
          </label>

          <div className="pt-1 rounded-md">
            <select
              required
              id="country"
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            >
              <option value="" disabled selected className="text-[#737373]">
                Select here
              </option>

              {activityLevelData.map((activity) => (
                <option value={activity.value} key={activity.value}>
                  {activity.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Password */}
        <div className="rounded-md w-full sm:w-[100%]">
          <label
            htmlFor="password"
            className="text-[14px] font-[600] text-[#011C34] leading-normal"
          >
            Password
          </label>

          <div className="pt-1 rounded-md">
            <input
              id="password"
              type="password"
              placeholder=""
              className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-[#2EC4B6]  sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {/* Agree to terms and condition */}
        <div>
          <p className="text-[#000000] text-[14px] font-[500]">
            By clicking Register, you agree to our{" "}
            <span className="text-[#2EC4B6] font-semibold"> Terms of Use </span>{" "}
            and our{" "}
            <span className="text-[#2EC4B6] font-semibold">
              {" "}
              Privacy Policy.{" "}
            </span>{" "}
          </p>
        </div>
        {/* Button */}
        <div className="w-full">
          <button
            type="submit"
            text="Register"
            className="w-full bg-[#2EC4B6] text-white h-[48px]"
          >
            Register
          </button>
        </div>
      </div>

      {/* Section Two */}
      <div className="w-[35%] flex flex-col justify-between h-full bg-[#1179BF] space-y-4 px-4">
        <p className="text-[20px] font-[700] leading-normal">Freelancer</p>

        <div className="flex justify-start items-start ">
          <p className="text-[60px] font-[300] leading-normal flex items-center">
            <span className="text-[24px] font-[700]">$</span>
            99
            <span className="text-[18px] font-[700]"> / year</span>
          </p>
        </div>

        <p className="text-[16px] italic font-[400]">
          Automatically renews after 1 year
        </p>

        <div className="space-y-4">
          <p className="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                fill="#B9F5FF"
              />
            </svg>
            Use on 5 client{" "}
          </p>
          <p className="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                fill="#B9F5FF"
              />
            </svg>
            Private repositories{" "}
          </p>
          <p className="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                fill="#B9F5FF"
              />
            </svg>
            Email support{" "}
          </p>
        </div>

        <div>
          <p className="text-[16px] font-[400]">
            Need <span className="font-[700]">20</span> client sites?
          </p>
          <span className="font-[700] italic">Switch to the Agency plan.</span>
        </div>

        <div className=" gap-2">
          <p className="text-[16px] font-[400]">
            FTP is horrible to deal with.
          </p>
          <span className="font-[700]">WP Pusher </span> solves that issue, and
          the customer support is awesome!
        </div>

        <div>
          <p>Kirk Beard</p>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
