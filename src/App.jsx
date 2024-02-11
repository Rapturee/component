import React from "react";
import "./App.css";
import { SlCheck, SlMagicWand, SlBell } from "react-icons/sl";
import { WiCloud, WiDaySunny, WiDayRain } from "react-icons/wi";
import CustomButton from "./Button.jsx";
import CustomAlert from "./Alerts.jsx";
import CustomBadges from "./Badges.jsx";
import CustomCard from "./Cards.jsx";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-3xl text-white mb-8">Awesome Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <h2 className="text-2xl mb-4">Buttons</h2>
          <div className="flex justify-center">
            <CustomButton color="purple" height={100} width={150} disabled={false} />
            <CustomButton color="orange" height={120} width={170} disabled={true} />
            <CustomButton color="blue" height={140} width={190} disabled={false} />
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl mb-4">Alerts</h2>
          <div className="flex justify-center">
            <CustomAlert bgColor="blue" textColor="white" icon={SlCheck} text={"Info Alert!"} />
            <CustomAlert bgColor="yellow" textColor="black" icon={SlMagicWand} text={"Warning Alert!"} />
            <CustomAlert bgColor="pink" textColor="white" icon={SlBell} text={"Error Alert!"} />
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl mb-4">Badges</h2>
          <div className="flex justify-center">
            <CustomBadges color={"#ffc0cb"} height={60} width={110} icon={WiCloud} iconColor={"#CB214E"} />
            <CustomBadges color={"#F88CAE"} height={50} width={100} icon={WiDaySunny} iconColor={"#7F1734"} />
            <CustomBadges color={"#997379"} height={40} width={90} icon={WiDayRain} iconColor={"#3a2300"} />
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl mb-4">Cards</h2>
          <div className="flex justify-center">
            <CustomCard
              color={"#b2d582"}
              size={100}
              imgSrc="/src/assets/bilder/bobr.jpg"
              imgAlt="Image of Bobr"
              href="https://www.google.com/search?q=bobr+kurwa&tbm=isch"
              className="m-2 mt-8 mb-10"
            >
              <p>Bobr</p>
            </CustomCard>
            <CustomCard
              color={"#b2d582"}
              size={100}
              imgSrc="/src/assets/bilder/bobr.jpg"
              imgAlt="Image of Bobr"
              href="https://www.google.com/search?q=bobr+kurwa&tbm=isch"
              className="m-2 mt-8 mb-10"
            >
              <p>Bobr</p>
            </CustomCard>
            <CustomCard
              color={"#b2d582"}
              size={100}
              imgSrc="/src/assets/bilder/bobr.jpg"
              imgAlt="Image of Bobr"
              href="https://www.google.com/search?q=bobr+kurwa&tbm=isch"
              className="m-2 mt-8 mb-10"
            >
              <p>Bobr</p>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
}
