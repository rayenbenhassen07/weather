import { useState, useEffect } from "react";
import { getCurrentDate } from "../utils/currentDate";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_f: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const [generalCondition, setGeneralCondition] = useState<string>("");

  useEffect(() => {
    if (data.current) {
      const conditionText = data.current.condition.text.toLowerCase();

      if (conditionText.includes("clear") || conditionText.includes("sunny")) {
        setGeneralCondition("Clear");
      } else if (
        conditionText.includes("cloudy") ||
        conditionText.includes("overcast")
      ) {
        setGeneralCondition("Cloudy");
      } else if (
        conditionText.includes("rain") ||
        conditionText.includes("drizzle") ||
        conditionText.includes("shower")
      ) {
        setGeneralCondition("Rainy");
      } else if (
        conditionText.includes("snow") ||
        conditionText.includes("sleet") ||
        conditionText.includes("blizzard")
      ) {
        setGeneralCondition("Snowy");
      } else {
        setGeneralCondition("Unknown");
      }
    }
    console.log("sasas", generalCondition);
  }, [data]);

  const currentDate = getCurrentDate();

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center   "
        style={{
          backgroundImage: `url(/background/${generalCondition.toLowerCase()}.jpg)`,
        }}
      ></div>
      <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl z-10">
        <div className="flex items-center">
          <div className="">
            <h1 className="text-3xl text-white">Today</h1>
            <p className="text-white">{currentDate}</p>
          </div>
          {data.current && (
            <div>
              <img
                className="w-[50px] object-cover"
                src={`/icon/${generalCondition.toLowerCase()}.gif`}
                alt={`${generalCondition} Icon`}
              />
            </div>
          )}
        </div>
        <div>
          {data.current ? (
            <p className="text-5xl text-white">
              {data.current.temp_f.toFixed()}
              <span>°</span>
            </p>
          ) : null}
          {data.current ? (
            <span className="text-white">{data.current.condition.text}</span>
          ) : null}
        </div>
        <div>
          {data.location ? (
            <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
              <LocationOnIcon />
              <span>
                {data.location.name}, {data.location.region}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Current;
