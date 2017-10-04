# Simple API Testing

## Introducción

Sólo con **Jest** y **supertest** se pueden probar APIS de una forma sencilla.


Este ejemplo contiene una serie de ejemplos sencillos utilizando la API pública de GitHub.

Este enfoque está pensado para ser usado con [*Behavior drive development* (BDD)](https://en.wikipedia.org/wiki/Behavior-driven_development). La idea es que mediante las funciones `describe()` e `it()` se vaya cuestionando, en un lenguaje de alto nivel, el comportamiento esperado de la API.


## Estructura del proyecto

La carpeta `fixtures` contiene cualquier archivo y configuración de utilidad para la ejecución de los tests:

* `config.json`: Archivo de configuración del proyecto.
* `setup.js`: Archivo que se ejecuta antes de la ejecución de la *suite* de pruebas. **Importante**: está indicado en el array `jest.setupFiles` del `package.json`.

La carpeta `test` contiene todos los archivos de test del proyecto. Para que Jest los detecte automáticamente, sin configuración alguna, el nombre de estos archivos deben terminan en `.test.js` o `.spec.js`.

Se incluyen también archivos de configuración de [**ESLint**](https://eslint.org/) y [**editorconfig**](http://editorconfig.org/).


## Instrucciones de uso

[**Node.js**](https://nodejs.org/es/) debe estar instalado en el sistema.

```bash
$ git clone https://github.com/alopezsanchez/simple-api-testing.git && cd simple-api-testing
$ npm install # Instala las dependencias del proyecto
$ npm test # Ejecuta Jest
```

**Jest** cuenta con un CLI que permite, entre otras cosas, ejecutarse con un *watcher* de los archivos modificados (`jest --watch`), incluir cobertura (`jest --coverage`)...

Para esto último, o bien se configura un *script* de NPM (https://docs.npmjs.com/misc/scripts) o se instala Jest de forma global con `(sudo) npm i -g jest`.


## Conclusiones

Molaba que entre todos aportásemos y mejorásemos este *sample* con el fin de crear un generador en [Yeoman](http://yeoman.io/) o similar, y que la gente que tenga estas inquietudes pueda usarlo también.


## Algunos enlaces de interés

* https://facebook.github.io/jest/docs/en/configuration.html#content

* https://facebook.github.io/jest/docs/en/tutorial-async.html

* https://github.com/visionmedia/superagent

* https://github.com/visionmedia/supertest

* http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

* https://docs.npmjs.com/files/package.json


## Nota

La API pública de GitHub tiene un límite de peticiones por IP, por lo que en ocasiones los test pueden fallar al devolver éstas un `403`.
