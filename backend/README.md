# Pizza App Backend

Este proyecto representa el backend de la aplicación de pedidos de pizza. Expone una API RESTful que permite consultar pizzas disponibles, crear órdenes y obtener el detalle de órdenes realizadas.

---

## Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **UUID** (para identificadores únicos)
- **Express Validator** (para validación de datos)
- **Jest** (para pruebas unitarias)
- **Cors**
- **dotenn** (manejo de variables de entorno)
- **Arquitectura MVC**

---

## Endpoints Disponibles

| Método | Ruta                  | Descripción                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/pizzas`         | Lista de pizzas disponibles        |
| GET    | `/api/orders`         | Lista de órdenes realizadas        |
| GET    | `/api/orders/:id`     | Detalle de una orden específica    |
| POST   | `/api/orders`         | Crear una nueva orden              |

---

## Instalación y Ejecución

1. Al estar dentro de un Monorepo , se debe ejecutar los siguientes comandos para  instalar las dependencias e iniciar el proyecto  en modo desarrollador

   ```bash
   cd backend
   npm install
   ```
   Esto cambiara a la carpeta donde se encuentra el backend , insalara los paquetes necesarios para que pueda ejecutarse y se iniciara en modo de desarrollo

2. Configuracion variables de Entorno

Crea un archivo .env dentro del directorio backend/ con el siguiente contenido:

```
   PORT=PUERTO DE EJECUCION
```

3. Ejecutar el servidor:

    ```bash
    npm run dev
   ```

## Validaciones

Las validaciones se manejan con `express-validator` en los archivos de `validators/`. Esto se aplico directamente a los datos de entrada por parte del cliente , en este caso al  `createOrder` en donde se considero lo siguiente :

- `items` debe ser un array.
- Cada `pizzaId` debe ser un UUID válido.
- Cada `quantity` debe ser un entero mayor a 0.
- Se valida que **no existan campos extra** dentro de cada ítem del pedido.

# Pruebas Unitarias

El proyecto incluye pruebas unitarias para validar los metodos creados  dentro de la capa servicio, es decir se ejecutaran para `PizzaServices`  y  `OrderServices`  .

### Herramientas utilizadas

- **jest** : framework de pruebas.


### Cómo ejecutar las pruebas

Desde la carpeta del `backend`, ejecutar el siguiente codigo:

```bash
npm test
```

Esto buscará automáticamente todos los archivos con la extensión `.test.js`y correrá las pruebas.

<p align="center">
  <img src="https://github.com/user-attachments/assets/c69ec956-66f5-4d2e-991a-f41d9630e6ac" alt="Home" width="500" />
</p>


##  Test de API

Para probar se utiliza las siguientes herramientas:

- **Postman** (Consumo de APIS)



### GET /api/pizzas

Obtiene la lista de pizzas disponibles.

🔗 [Mock URL](https://040c0309-c014-4e28-9029-3845e056b3fd.mock.pstmn.io/api/pizzas)

**Respuesta:**

```json
[
    {
        "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
        "name": "Margherita",
        "price": 5,
        "ingredients": [
            "tomato",
            "mozzarella"
        ]
    },
    {
        "id": "0196322f-52ab-74db-8a56-d8d22837b8e3",
        "name": "Bufala",
        "price": 6,
        "ingredients": [
            "tomato",
            "mozarella di bufala"
        ]
    },
    {
        "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
        "name": "Romana",
        "price": 5,
        "ingredients": [
            "tomato",
            "mozzarella",
            "anchovies",
            "oregano",
            "oil"
        ]
    },
    {
        "id": "0196322f-52ab-74db-8a56-e1239a6bdf6d",
        "name": "Diavola",
        "price": 7.5,
        "ingredients": [
            "tomato",
            "mozzarella",
            "spicy salami"
        ]
    },
    {
        "id": "0196322f-52ab-74db-8a56-e4051c642bd7",
        "name": "Pizza Bianca",
        "price": 5,
        "ingredients": [
            "mozzarella",
            "oregano"
        ]
    }
]
```
### 🔍 GET /api/orders

Obtiene todas las ordenes creadas.

🔗 [Mock URL](https://040c0309-c014-4e28-9029-3845e056b3fd.mock.pstmn.io/api/orders)

**Respuesta:**

```json
[
    {
        "id": "0196324c-3429-7457-8c5a-08cdbd3cdf9a",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 3,
                "totalPrice": 15
            }
        ],
        "totalAmount": 15
    },
    {
        "id": "0196327b-71e0-776e-8efd-168c6631a202",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 13,
                "totalPrice": 65
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d8d22837b8e3",
                    "name": "Bufala",
                    "price": 6,
                    "ingredients": [
                        "tomato",
                        "mozarella di bufala"
                    ]
                },
                "quantity": 1,
                "totalPrice": 6
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
                    "name": "Romana",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "anchovies",
                        "oregano",
                        "oil"
                    ]
                },
                "quantity": 3,
                "totalPrice": 15
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-e1239a6bdf6d",
                    "name": "Diavola",
                    "price": 7.5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "spicy salami"
                    ]
                },
                "quantity": 1,
                "totalPrice": 7.5
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-e4051c642bd7",
                    "name": "Pizza Bianca",
                    "price": 5,
                    "ingredients": [
                        "mozzarella",
                        "oregano"
                    ]
                },
                "quantity": 7,
                "totalPrice": 35
            }
        ],
        "totalAmount": 128.5
    },
    {
        "id": "01963280-1f4a-734c-af4a-e84c50be404f",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 1,
                "totalPrice": 5
            }
        ],
        "totalAmount": 5
    },
    {
        "id": "01963280-c18b-70c7-b4f4-9fe61bd777df",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 11,
                "totalPrice": 55
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
                    "name": "Romana",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "anchovies",
                        "oregano",
                        "oil"
                    ]
                },
                "quantity": 5,
                "totalPrice": 25
            }
        ],
        "totalAmount": 80
    },
    {
        "id": "01963284-24a5-712b-9feb-9be074bc8501",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-e4051c642bd7",
                    "name": "Pizza Bianca",
                    "price": 5,
                    "ingredients": [
                        "mozzarella",
                        "oregano"
                    ]
                },
                "quantity": 3,
                "totalPrice": 15
            }
        ],
        "totalAmount": 15
    },
    {
        "id": "01963293-e149-7499-ba8d-1a80575dc2fb",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 3,
                "totalPrice": 15
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d8d22837b8e3",
                    "name": "Bufala",
                    "price": 6,
                    "ingredients": [
                        "tomato",
                        "mozarella di bufala"
                    ]
                },
                "quantity": 3,
                "totalPrice": 18
            }
        ],
        "totalAmount": 33
    },
    {
        "id": "019632a0-daec-77a8-b243-cd10e5a2cdcd",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
                    "name": "Romana",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "anchovies",
                        "oregano",
                        "oil"
                    ]
                },
                "quantity": 7,
                "totalPrice": 35
            }
        ],
        "totalAmount": 35
    },
    {
        "id": "019632af-3046-71cd-928f-8013e3431291",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
                    "name": "Romana",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "anchovies",
                        "oregano",
                        "oil"
                    ]
                },
                "quantity": 7,
                "totalPrice": 35
            }
        ],
        "totalAmount": 35
    },
    {
        "id": "019632d9-c8cf-746a-b543-901aa710130a",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
                    "name": "Romana",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "anchovies",
                        "oregano",
                        "oil"
                    ]
                },
                "quantity": 1,
                "totalPrice": 5
            }
        ],
        "totalAmount": 5
    },
    {
        "id": "019632f7-a532-717a-8f46-16bf09144367",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 1,
                "totalPrice": 5
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d8d22837b8e3",
                    "name": "Bufala",
                    "price": 6,
                    "ingredients": [
                        "tomato",
                        "mozarella di bufala"
                    ]
                },
                "quantity": 1,
                "totalPrice": 6
            }
        ],
        "totalAmount": 11
    },
    {
        "id": "0196334b-8c26-70a9-a244-d8bad8c3753f",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-ded13f6bcf6d",
                    "name": "Romana",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella",
                        "anchovies",
                        "oregano",
                        "oil"
                    ]
                },
                "quantity": 1,
                "totalPrice": 5
            }
        ],
        "totalAmount": 5
    },
    {
        "id": "0196335b-79bf-7053-b87a-3dc50cde1838",
        "items": [
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                    "name": "Margherita",
                    "price": 5,
                    "ingredients": [
                        "tomato",
                        "mozzarella"
                    ]
                },
                "quantity": 3,
                "totalPrice": 15
            },
            {
                "pizza": {
                    "id": "0196322f-52ab-74db-8a56-d8d22837b8e3",
                    "name": "Bufala",
                    "price": 6,
                    "ingredients": [
                        "tomato",
                        "mozarella di bufala"
                    ]
                },
                "quantity": 1,
                "totalPrice": 6
            }
        ],
        "totalAmount": 21
    }
```

### GET /api/orders/:id


Obtener  las ordenes de acuerdo a su id , en este caso el siguiente id: `0196324c-3429-7457-8c5a-08cdbd3cdf9a `

🔗 [Mock URL](https://040c0309-c014-4e28-9029-3845e056b3fd.mock.pstmn.io/api/orders/0196324c-3429-7457-8c5a-08cdbd3cdf9a)

**Respuesta:**

```json
{
    "id": "0196324c-3429-7457-8c5a-08cdbd3cdf9a",
    "items": [
        {
            "pizza": {
                "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                "name": "Margherita",
                "price": 5,
                "ingredients": [
                    "tomato",
                    "mozzarella"
                ]
            },
            "quantity": 3,
            "totalPrice": 15
        }
    ],
    "totalAmount": 15
}
```

### POST /api/orders

Permite crear una orden 

**Request**

```json
{
  "items": [
    {
      "pizzaId": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
      "quantity": 3
    },
    {
      "pizzaId": "0196322f-52ab-74db-8a56-d8d22837b8e3",
      "quantity": 1
    }
  ]
}

```

**Response**
```json
{
    "id": "0196335b-79bf-7053-b87a-3dc50cde1838",
    "items": [
        {
            "pizza": {
                "id": "0196322f-52ab-74db-8a56-d42a0bf11a8e",
                "name": "Margherita",
                "price": 5,
                "ingredients": [
                    "tomato",
                    "mozzarella"
                ]
            },
            "quantity": 3,
            "totalPrice": 15
        },
        {
            "pizza": {
                "id": "0196322f-52ab-74db-8a56-d8d22837b8e3",
                "name": "Bufala",
                "price": 6,
                "ingredients": [
                    "tomato",
                    "mozarella di bufala"
                ]
            },
            "quantity": 1,
            "totalPrice": 6
        }
    ],
    "totalAmount": 21
}

```
