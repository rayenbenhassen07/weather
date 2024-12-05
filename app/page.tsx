"use client";
import React, { useState } from "react";
import Current from "./components/Current";
import Input from "./components/Input";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import Footer from "./components/Footer";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=7018ce9612064573bf8180457240512&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to the Weather App
        </h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col px-10 py-10 items-center justify-between mt-0 ">
          <Current data={data} />
          <div className="z-10">
            <WeekForecast data={data} />
          </div>
        </div>
        <div className="z-10">
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-900 to-blue-800 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit px-10 pt-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center z-10 bg-blue-50/70 py-1 px-2 rounded-lg ">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-blue-600 text-2xl py-2 px-4 rounded-xl italic font-bold ">
            Weather App.
          </h1>
        </div>
        {content}
      </div>

      <Footer />
    </div>
  );
}
