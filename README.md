
## Endpoints

<details>
    <summary> Rutas para Users: </summary>

    <br>

**GET**
- Traer todos los usuarios registrados

```
    http://127.0.0.1:3000/api/users
```
<br>

-   Traer un usuario por su nombre

```
    http://127.0.0.1:3000/api/users/name/:name
```
<br>

-   Traer un usuario por su ID

```
    http://127.0.0.1:3000/api/users/:id
```

<br>

**POST**
-   Crear un usuario

```
    http://127.0.0.1:3000/api/users/
```

<br>

-   Iniciar Sesión

```
    http://127.0.0.1:3000/api/users/login
```

<br>

**PUT**
-   Actualizar un usuario

```
    http://127.0.0.1:3000/api/users/:id
```

<br>

**DELETE**
-   Eliminar un usuario

```
    http://127.0.0.1:3000/api/users/:id
```

</details>

<br>

<details>
    <summary> Rutas para equipos </summary>

<br>

**GET**
- Traer todos los equipos

```
    http://127.0.0.1:3000/api/(recognized/experimental)
```
<br>

-   Traer un equipo por su nombre
```
    http://127.0.0.1:3000/api/(recognized/experimental)/equipo/:equipo
```
<br>

-   Traer un equipo por su ID
```
    http://127.0.0.1:3000/api/(recognized/experimental)/:id
```

<br>

-   Traer todos los equipos por su color
```
    http://127.0.0.1:3000/api/(recognized/experimental)/color/:color
```
<br>

-   Traer todos los equipos por año 
```
    http://127.0.0.1:3000/api/(recognized/experimental)/length/:length
```

**POST**
-   Crear un equipo

```
    http://127.0.0.1:3000/api/(recognized/experimental)/
```
<br>

**PUT**
-   Actualizar un equipo

```
    http://127.0.0.1:3000/api/(recognized/experimental)/:id
```
<br>

**DELETE**
-   Eliminar un equipo

```
    http://127.0.0.1:3000/api/(recognized/experimental)/:id
```
</details>

<br>

