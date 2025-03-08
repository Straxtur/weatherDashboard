import Weather from "./components/weather/Weather"
import WeatherChart from "./components/WeatherChart/WeatherChart"
import WeatherList from "./components/WeatherList/WeatherList"
import Layout from "./Layouts/Layout"

const App = () => {
  return (
    <Layout>
      <Weather />
      
      <WeatherList />

      <WeatherChart />
    </Layout>
  )
}

export default App
