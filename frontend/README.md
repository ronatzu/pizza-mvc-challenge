# Pizza App Frontend

Este proyecto es el Frontend de una aplicación de pedidos de pizza. La aplicación permite a los usuarios ver el catálogo de pizzas (con sus ingredientes y precios), agregar pizzas a su orden y confirmar el pedido.


## Tecnologías Utilizadas

- **React 19**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo y build .
- **Tailwind CSS**: Framework CSS .
- **Axios**: Cliente HTTP para consumir el API del backend.
- **React Router**: Para la gestión de rutas.
- **Jest** y **React Testing Library**: Para pruebas unitarias.

## Instalación

1. Instalacion 

Al estar dentro de un Monorepo , se debe ejecuatar los siguientes comandos para  instalar las dependencias e iniciar el proyecto  en modo desarrollador

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
La aplicación se ejecutará en http://localhost:5173

2. Configuracion variables de Entorno

Crea un archivo .env dentro del directorio frontend/ con el siguiente contenido:

```
   VITE_API_BASE_URL=DIRECCION API REST
```
El valor que reciba la variable permite cambiar la base del API base del backend  sin buscar y reemplazar en todo el proyecto.

# Pruebas Unitarias

El proyecto incluye pruebas unitarias para validar la funcionalidad de los componentes principales.

### Herramientas utilizadas

- **jest** : framework de pruebas.
- **React Testing Library** : librería para pruebas orientadas al comportamiento del usuario.



### Cómo ejecutar las pruebas

Desde la carpeta del frontend, ejecutar el siguiente codigo:

```bash
npm test
```

Esto buscará automáticamente todos los archivos con la extensión `.test.jsx` o `.test.js` y correrá las pruebas.

###  Componentes con pruebas unitarias

Se realizaron pruebas unitarias para los siguientes componentes:

| Componente            | Archivo de prueba                        |
|-----------------------|------------------------------------------|
| `PizzaCard`           | `PizzaCard.test.jsx`                     |
| `OrderSummary`        | `OrderSummary.test.jsx`                  |
| `ConfirmOrderButton`  | `ConfirmOrderButton.test.jsx`            |
| `ConfirmedModal`      | `ConfirmedModal.test.jsx`                |
| `OrdersModal`         | `OrdersModal.test.jsx`                   |
| `Header`              | `Header.test.jsx`                        |

Estas pruebas permitiran evaluar lo siguiente:

- Renderizado de cada componente.
- Comportamiento ante eventos del usuario.
- Cambios en el DOM según el estado del componente.
- Llamadas a funciones de callbacks como `onAdd`, `onUpdate`, `onRemove`, etc.

Una  vez que se corra el comando  se ejecutaran las pruebas y con ello dentro del ID se mostrar si  todos los test fueron exitoros o no .

<p align="center">
  <img src="https://github.com/user-attachments/assets/95becc12-79b8-4a1c-a7dd-f6fa83796093" alt="Home" width="500" />
</p>


 
## Consideraciones de Diseño

1. Wireaframes Previo

Para el diseño de la aplicacion se considero un wireframe de baja fidelidad donde se puede observar  como se conformaria la interfaz 

<p align="center">
  <img src="https://github.com/user-attachments/assets/9fcaba8e-4daf-4cab-8617-e4035d222729" alt="Wireframe" width="500" />
</p>


2. Interfaz Desarrollada
   
A partir del wireframe msotrado se programo de acuerdo a esa estructura con lo cual  la aplicaicon tiene la siguiente interfaz :

<p align="center">
  <img src="https://github.com/user-attachments/assets/eb31dbd4-693a-4397-89cb-9f5ca64bf110" alt="Home" width="500" />
</p>

Una vez terminado el pedido se puede confirmar y podra desplegar una ventana emergente donde se muestra el ID de la orden y  un mensaje de que la orden fue realizada

<p align="center">
  <img src="https://github.com/user-attachments/assets/2e638240-7435-49d8-aa07-fc53fdab915f" alt="Home" width="500" />
</p>

Ademas como  apartado adicional , en el hader dentro de ordenes se desplega un modal  que permite  visualizar todas las ordenes  realiadas y  tambien se puede buscar por medio de ID de orden

<p align="center">
  <img src="https://github.com/user-attachments/assets/0eb19c4d-c421-429f-b4cd-f6ce9f7c3677" alt="Home" width="500" />
</p>
