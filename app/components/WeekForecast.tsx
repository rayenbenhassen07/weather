import WeatherCard from "./WeatherCard";

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f: number;
    mintemp_f: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  if (!data.forecast) {
    return (
      <p className="text-white text-center">No forecast data available.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full p-4">
      {data.forecast.forecastday.map((day, index) => (
        <WeatherCard
          key={index}
          degree={parseFloat(
            ((day.day.maxtemp_f + day.day.mintemp_f) / 2).toFixed()
          )}
          image={day.day.condition.text}
          day={new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          highDegree={parseFloat(day.day.maxtemp_f.toFixed())}
          lowDegree={parseFloat(day.day.mintemp_f.toFixed())}
        />
      ))}
    </div>
  );
};

export default WeekForecast;
