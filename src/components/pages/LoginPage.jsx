import React, { Component } from "react";
import "./LoginPage.css";
import LoginCard from "../organisms/form/LoginCard";

class LoginPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div class="w-screen bg-green-50 flex items-center justify-center h-screen">
          <div class="flex w-2/3 h-3/5 gap-6">
            <div className="flex w-3/5 h-full mt-14">
              <div>
                <p className="text-left font-extrabold text-6xl pb-4">mmmmmm</p>
                <p className="text-left text-3xl">
                  Most productive social media ever made on the surface of the
                  world.
                </p>
              </div>
            </div>

            <div className="w-2/5 h-full">
              <LoginCard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
