# Prueba Técnica - React Native - Sebastian Narvaez

## Tres Astronautas

### Descripción del Proyecto
Esta aplicación móvil muestra un listado de planetas del sistema solar, obtenidos desde una API REST pública. Incluye funcionalidades como búsqueda, ordenamiento y marcado de planetas favoritos. También se agrego el tema claro y oscuro como plus

### Tecnologías Utilizadas

Las siguientes librerías fueron utilizadas para el desarrollo de la aplicación:

- **@d11/react-native-fast-image**: Para manejo eficiente de imágenes.
- **@react-native-async-storage/async-storage**: Para almacenamiento local de favoritos.
- **@react-navigation/bottom-tabs**: Para la navegación mediante tabs.
- **@react-navigation/native** y **@react-navigation/stack**: Para estructurar la navegación de la app.
- **@shopify/flash-list**: Para optimizar el renderizado del listado de planetas.
- **@tanstack/react-query**: Para la gestión de consultas y caché de datos.
- **axios**: Para realizar llamadas HTTP a la API.
- **zustand**: Para la gestión del estado global de la aplicación.

### Instalación y Ejecución

1. Clona el repositorio:
   ```sh
   git clone https://github.com/SebastianNarvaez11/PlanetsApp.git
   cd repositorio
   ```
2. Instala las dependencias:
   ```sh
   yarn install
   cd ios
   pod install
   cd ..
   ```
3. Inicia la aplicación en un emulador o dispositivo:
   ```sh
   yarn android 
   yarn ios    
   ```
### Decisiones Técnicas

- **FlashList en lugar de FlatList**: Mejora el rendimiento del renderizado de listas grandes.
- **React Query para el manejo de datos**: Permite caching y revalidación automática de las consultas a la API.
- **Zustand para la gestión de estado**: Estado simple y eficiente sin necesidad de Redux.
- **FastImage para optimización de imágenes**: Reduce el tiempo de carga y mejora el rendimiento.

### API Utilizada
Como no encontré una API pública que proporcionara el listado de planetas con imágenes, decidí crear mi propia API en Supabase. https://hfuheokmqgrfjvppexaf.supabase.co


¡Gracias por revisar este proyecto! 🚀

