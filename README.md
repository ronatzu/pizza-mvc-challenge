# Pizza App Monorepo

Este repositorio contiene la implementación **Full Stack** de una aplicación de pedidos de pizza, compuesta por:

- **Backend:** API REST construida con Node.js + Express que gestiona órdenes.
- **Frontend:** Aplicación web construida con React 19, Vite y TailwindCSS, que permite visualizar el catálogo y realizar pedidos.

---

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación General](#instalación-general)
- [Frontend](#frontend)
- [Backend](#backend)
- [Pruebas](#pruebas)
- [Variables de Entorno](#variables-de-entorno)
- [Notas Adicionales](#notas-adicionales)

---

## Estructura del Proyecto

```
pizza-app/
├── backend/                # API RESTful con Node.js + Express
│   ├── src/
│   ├── test/
│   └── README.md
├── frontend/               # React 19 + Vite + Tailwind
│   ├── src/
│   ├── public/
│   └── README.md
├── package.json            # Opcional si usas workspaces
└── README.md               # Este archivo
```

---

## Tecnologías Utilizadas

### Backend
- Node.js (ESModules)
- Express.js
- express-validator
- UUID
- Jest

### Frontend
- React 19
- Vite
- TailwindCSS
- Axios
- React Router DOM
- React Testing Library + Jest

---

## Instalación General

Clona el repositorio y entra a cada carpeta para instalar dependencias:

```bash
git clone https://github.com/tu-usuario/pizza-app.git
cd pizza-app

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## Frontend

### Levantar en modo desarrollo:

```bash
cd frontend
npm run dev
```

Abrirá la app en: `http://localhost:5173`

---

## Backend

### Levantar en modo desarrollo:

```bash
cd backend
npm run dev
```

La API estará disponible en: `http://localhost:3000/api`

Endpoints disponibles:

| Método | Ruta              | Descripción                     |
|--------|-------------------|---------------------------------|
| GET    | `/api/pizzas`     | Lista de pizzas                 |
| GET    | `/api/orders`     | Lista de órdenes realizadas     |
| GET    | `/api/orders/:id` | Detalle de una orden específica |
| POST   | `/api/orders`     | Crear una nueva orden           |

---

## Pruebas

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

---

## Variables de Entorno
Se deben configurar las variables de entorno en cada carpeta ya sea de `frontend` o `backend`


### Backend `.env`
```env
PORT=3000
```

### Frontend `.env`
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

---

