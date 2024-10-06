import { useState, useEffect } from "react";
import CardDiv from "../../atoms/card_div/BasicCardDiv";
import TextInput from "../../atoms/input/TextInput";
import RegistrationCard from "./RegistrationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"; // Axios to make API calls

const LoginCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState(""); // To store CSRF token
  const [error, setError] = useState(null);

  // Toggle the registration modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Fetch CSRF token on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("http://localhost:5000/csrf-token", {
          credentials: "include", // Include credentials (cookies)
        });
        const data = await response.json();
        setCsrfToken(data.csrfToken); // Save CSRF token to state
      } catch (err) {
        console.error("Error fetching CSRF token", err);
      }
    };

    fetchCsrfToken();
  }, []);

  console.log("Form Data:", { emailPhone, password });

  // Handle form submission using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken, // Send the CSRF token in the headers
        },
        body: JSON.stringify({ emailPhone, password }),
        credentials: "include", // Include credentials (cookies)
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Handle success: Store JWT token and redirect or perform other actions
      const token = data.token;
      localStorage.setItem("jwt", token); // Store JWT token in local storage
      alert("Login successful!");
    } catch (err) {
      console.error("Login error", err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <>
      <CardDiv>
        <form
          className="flex flex-col justify-between h-full p-4"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="flex flex-col gap-4">
              <TextInput
                type="text"
                name="emailPhone"
                placeholder="Email address or phone number"
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
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
            <hr />
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
