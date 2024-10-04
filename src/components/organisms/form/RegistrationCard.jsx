import { useState } from "react";
import CardDiv from "../../atoms/card_div/BasicCardDiv";
import TextInput from "../../atoms/input/TextInput";
import YearInput from "../../atoms/input/YearInput";

const RegistrationCard = () => {
  const [selectGender, setSelectGender] = useState(null);

  return (
    <CardDiv>
      <div className="p-2">
        <h1 className="text-3xl font-bold text-start m-2">Sign up</h1>
      </div>
      <hr className="w-full" />
      <form className="flex flex-col justify-between h-full p-4">
        <div className="flex flex-col gap-4">
          <TextInput type="text" name="fullname" placeholder="Full name" />
          <div className="flex gap-4">
            <div className="flex">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectGender("male");
                }}
                className={`px-4 py-2 rounded-bl-md rounded-tl-md font-semibold ${
                  selectGender === "male"
                    ? "bg-green-400 text-white"
                    : "border border-gray-300"
                }`}
              >
                Male
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectGender("female");
                }}
                className={`px-4 py-2 rounded-br-md rounded-tr-md font-semibold ${
                  selectGender === "female"
                    ? "bg-green-400 text-white"
                    : "border border-gray-300"
                }`}
              >
                Female
              </button>
            </div>
            <YearInput name="birthYear" start={1950} onChange={(e) => console.log(e.target.value)} />
          </div>
          <TextInput
            type="text"
            name="email-phone"
            placeholder="Email address or phone number"
          />
          <TextInput type="password" name="password" placeholder="password" />
          <button
            type="submit"
            className="bg-green-400 rounded-md p-2 text-2xl font-semibold"
          >
            Sign up
          </button>
        </div>
      </form>
    </CardDiv>
  );
};

export default RegistrationCard;
