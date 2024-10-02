import CardDiv from "../../atoms/card_div/CardDiv";
import TextInput from "../../atoms/input/TextInput";

const RegistrationCard = () => {
  return (
    <CardDiv>
      <form className="flex flex-col justify-between h-full p-4">
        <div className="flex flex-col gap-4">
          <TextInput type="text" name="fullname" placeholder="Full name" />
          <div className="flex">
            <TextInput type="radio" name="gender" value="male" label="Male" />
            <TextInput
              type="radio"
              name="gender"
              value="female"
              label="Female"
            />
            <TextInput type="date" name="birthday" placeholder="Birthday" />
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
