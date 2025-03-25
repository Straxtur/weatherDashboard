# Weather Dashboard

Este proyecto es un **dashboard del clima** que permite visualizar información meteorológica actual y pronósticos, utilizando una interfaz moderna y responsiva.

## 🚀 Funcionalidades

- Visualización del clima actual y pronósticos por hora y día.
- Gráficos interactivos para mostrar datos meteorológicos.
- Navegación entre ubicaciones y días de pronóstico.
- Animaciones suaves y diseño con efecto de "glassmorphism".
- Soporte para múltiples ubicaciones.

## 🛠️ Herramientas y Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz.
- **TypeScript**: Tipado estático para mayor robustez y mantenimiento.
- **TailwindCSS**: Framework CSS para estilos rápidos y responsivos.
- **Chart.js**: Librería para gráficos interactivos.
- **React-Chartjs-2**: Wrapper para integrar Chart.js con React.
- **Motion**: Animaciones suaves y personalizables.
- **Context API**: Manejo de estado global para compartir datos meteorológicos.
- **Vite**: Herramienta de construcción rápida para proyectos React.

## ⚙️ Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Instala las dependencias**:

   ```bash
   pnpm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API para el servicio meteorológico:

   ```
   VITE_WEATHER_API_KEY=tu_clave_api
   VITE_WEATHER_BASE_URL="https://api.weatherapi.com/v1"
   ```

4. **Inicia el servidor de desarrollo**:

   ```bash
   pnpm dev
   ```

5. **Abre el proyecto en tu navegador**:
   Ve a [http://localhost:5173](http://localhost:5173).

## 🧩 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── WeatherList/  # Lista de ubicaciones y tarjetas del clima
│   ├── WeatherChart/ # Gráficos meteorológicos
│   ├── shared/       # Componentes compartidos (Modal, Clock, etc.)
├── context/          # Context API para manejo de estado global
├── services/         # Consultas a la API del clima
├── types/            # Definiciones de tipos TypeScript
├── utils/            # Funciones auxiliares (formateo, helpers, etc.)
└── main.css          # Estilos globales
```

## 🛡️ Cómo Funciona el Proyecto

1. **Consulta de datos meteorológicos**:

   - El proyecto utiliza una API externa para obtener datos del clima.
   - Los datos se almacenan en el estado global mediante Context API.

2. **Visualización de datos**:

   - Los datos se muestran en componentes como `WeatherList`, `WeatherCard` y `WeatherChart`.
   - Los gráficos interactivos permiten explorar los datos de manera visual.

3. **Interacción del usuario**:
   - Los usuarios pueden agregar ubicaciones, navegar entre días de pronóstico y ver detalles específicos del clima.

## 📦 Despliegue

Para construir el proyecto para producción, ejecuta:

```bash
pnpm build
```

Esto generará una carpeta `dist/` con los archivos optimizados para producción.

## 📚 Recursos Adicionales

- [Documentación de React](https://reactjs.org/)
- [Documentación de TailwindCSS](https://tailwindcss.com/)
- [Documentación de Chart.js](https://www.chartjs.org/)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ por Straxtur**
