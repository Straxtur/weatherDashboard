import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createRoot } from "react-dom/client"
import App from "./App"
import { CurrentWeatherProvider } from "./context/WeatherContext"
import "./main.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <CurrentWeatherProvider>
      <App />
    </CurrentWeatherProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
