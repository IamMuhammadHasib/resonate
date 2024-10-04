import { useState } from "react";
import CardDiv from "../../atoms/card_div/BasicCardDiv";
import TextInput from "../../atoms/input/TextInput";
import RegistrationCard from "./RegistrationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const LoginCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <CardDiv>
        <form className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="flex flex-col gap-4">
              <TextInput
                type="text"
                name="email-phone"
                placeholder="Email address or phone number"
              />
              <TextInput
                type="password"
                name="password"
                placeholder="password"
              />
              <button
                type="submit"
                className="bg-green-400 rounded-md p-2 text-2xl font-semibold"
              >
                Log in
              </button>
              <a href="#" className="text-green-600 text-center">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <hr className="" />
          </div>

          <div>
            <div className="flex justify-center">
              <button
                type="button"
                className="border border-green-600 rounded-md pt-2 pb-2 text-xl font-semibold text-center w-2/3"
                onClick={toggleModal}
              >
                Create new account
              </button>
            </div>
          </div>
        </form>
      </CardDiv>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-green-50 bg-opacity-80">
          <div className="relative">
            <RegistrationCard />
            <button
              className="absolute top-0 right-0 mt-4 mr-4 rounded-full p-2"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginCard;
