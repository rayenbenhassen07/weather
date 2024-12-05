import React from "react";

interface WeatherCardProps {
  degree: number; // Current temperature in degrees
  image: string; // URL or path to the weather image/icon
  day: string; // Day of the week or label (e.g., "Today", "Monday")
  highDegree: number; // Maximum temperature
  lowDegree: number; // Minimum temperature
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  degree,
  image,
  day,
  highDegree,
  lowDegree,
}) => {
  return (
    <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] bg-opacity-80 w-28 h-48 dark:bg-[#22272B] dark:bg-opacity-70 rounded-3xl p-4 hover:w-56 hover:bg-blue-200 hover:bg-opacity-100 hover:dark:bg-[#0C66E4] hover:dark:bg-opacity-100">
      <h3 className="text-xl text-center">{day}</h3>
      <div className="gap-4 relative">
        <img
          src={image}
          alt={`${day} weather`}
          className="w-20 h-20 object-cover mx-auto scale-[110%]"
        />
        <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center group-hover:translate-x-8 group-hover:-translate-y-16 group-hover:scale-150">
          {degree}°
        </h4>
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
        <p className="bg-black/25 px-2 italic rounded-xl text-white mb-2">
          High:{" "}
          <span aria-label={`Maximum temperature: ${highDegree} degrees`}>
            {highDegree}°
          </span>
        </p>
        <p className="bg-black/25 px-2 italic rounded-xl text-white">
          Low:{" "}
          <span aria-label={`Minimum temperature: ${lowDegree} degrees`}>
            {lowDegree}°
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
