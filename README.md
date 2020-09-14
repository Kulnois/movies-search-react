# [Movie Search](https://kulnois.github.io/movies-search-react)

![Product Gif](screenshots/movies-search-react.gif)

Proyecto de React Simple con Hooks donde consumo la API de [omdbapi](http://www.omdbapi.com/) con fetch la cual nuestra una lista de películas, permite buscar películas  por nombre y el detalle de una película; para el trabajar con el css de la web se implemento [styled-components](https://styled-components.com/) y para las rutas [react-router-dom](https://reactrouter.com/web/guides/quick-start).

[Ver Movie Search](https://kulnois.github.io/movies-search-react).

### Recursos

* [React](https://reactjs.org/)
* [Hooks](https://reactjs.org/docs/hooks-intro.html)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* Peticiones a [API omdbapi](http://www.omdbapi.com/) con fetch
* Para trabjar con el css [styled-components](https://styled-components.com/)
* El proyecto es creado con [Create React apps](https://github.com/facebook/create-react-app)
* CSS puro sin ningun frameworks

## Trabajar con styled-components

### Instalación
`npm install --save styled-components`

### Implementación

Como ejemplo vamos a ver como hacer la Caja de Busqueda de la APP; como me gusta tener separado los estilos de los archivos `js` vamos a crear los archivos, uno para el componente y otro para el estilo.

Comenzamos con el archivo de estilos el cual lo llamaremos `search-box.styles.jsx` y agregamos la información correspondiente.

```js
import styled from 'styled-components';

export const Input = styled.input`
    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 350px;
    line-height: 20px;
    margin-bottom: 30px;
    border-radius: 16px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    text-align: center;
    font-size: 20px;
`;
```

Veamos qué temenos:
- `import styled from 'styled-components'` Primero importamos la libreria `styled-components`.
- `export const Input = styled.input` Y luego creamos nuestro Input el cual sera de `styled.input` para este caso pero puede ser cualquier otro elemento HTML `styled.h1`, `styled.p`, `styled.button` etc... y le agregamos las propiedades `css` correspondientes.

Ahora creamos el componente el cual lo llamaremos `search-box.component.jsx` y agregamos la información correspondiente.

```js
import React from 'react';

import { Input } from './search-box.styles';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div>
        <Input 
            type="search" 
            className="search" 
            placeholder={placeholder} 
            onChange={handleChange} />
    </div>
);
```

Veamos qué temenos:
- `import React from 'react'` Primero importamos react `react`.
- `import { Input } from './search-box.styles';` Procedemos a importar nuestro componente de estilo `Input`.
- `<Input ...properties />` Y para finalizar agregamos los props de nuestro elemento el cual funcionara como la etiqueta HTML `<input />` con atributos como `placeholder` ya que en nuestro archivo de estilos la definimos como `input`;

## Instalación
1. [Download](../../archive/master.zip) o clonar el repositorio.
2. Instalar dependencias con `npm install`.

## Server

### Desarrollo

Ejecutar `npm start` e ir al navegador a la ruta [http://localhost:3000](http://localhost:3000).

### Producción

Ejecutar `npm run build` el cual le genera una carpeta `build` donde están los archivos estáticos los cuales ya puede subir a un servidor web.