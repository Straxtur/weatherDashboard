import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Analytics } from "@vercel/analytics/react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { CurrentWeatherProvider } from "./context/WeatherContext"
import "./main.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <CurrentWeatherProvider>
      <App />
      <Analytics />
    </CurrentWeatherProvider>
    {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryClientProvider>
)
