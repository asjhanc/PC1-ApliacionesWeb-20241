# proyectoswebstorm

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# PC1 APLIACIONES WEB 2024-1


Enunciado:
Pregunta 1 (20 p.).
Caso Fake Store, inc.
Usted forma parte del staff de Zoo Fake, inc. (https://freetestapi.com/api/v1/) Con el fin de promover sus
servicios de desarrollo de soluciones de software, desean elaborar un proyecto que brinde información
sobre los animales habitantes del zoo. Ellos exponen dicha información a través de un API para el
proyecto, que es de código abierto y de uso gratuito.
Para ello, le encargan elaborar una aplicación web que liste los habitantes animales (animals) del
zoológico, toda la información la obtendrá accediendo al endpoint:
https://freetestapi.com/api/v1/animals?limit=10
Para el desarrollo web de lado web frontend, se ha seleccionado JavaScript como lenguaje de
programación y Vue como Frontend Framework.
Se le encarga el desarrollo de una aplicación web que implemente las siguientes características:
• La aplicación debe presentar en la vista home un Toolbar en la parte superior, con el título “Fake
Zoo API Showcase”.
• La aplicación debe presentar debajo una vista “Animals” con cards para los animales.
• Para cada card, la información del animal a mostrar incluye: name, image, habitat, description, y
family. El url de la imagen está en la propiedad image del objeto.
• El usuario puede calificar el interés de conocer un animal mediante un control rating, debe estar
ubicada en el footer del card
• La aplicación debe presentar en la parte inferior de la vista “Animal”, una sección de footer con
la información “Copyright © 2024 Fake Store, inc. All rights reserved.” en la primera línea.
Además debe incluir en la segunda línea del footer la información “Developed by“ y los datos del
Developer (considérese a usted como autor, indicando código, nombre y apellido.)
El equipo de IT de su cliente tomará en cuenta no solo el cumplimiento de las características
funcionales, sino el diseño de interfaz de usuario, así como la estructura del proyecto, aplicación de
convenciones de nomenclatura de objetos de programación en inglés, convenciones de nomenclatura
de Vue.js, organización y eficiencia del código. Igualmente se tomará en cuenta la aplicación de patrones
de diseño.
Restricciones técnicas: Debe generar el proyecto con Vite y utilizar Vue 3. El equipo requiere que la
interfaz de usuario esté basada en Material Design utilizando la biblioteca de componentes de UI
PrimeVue, mientras que para la comunicación con el backend debe apoyarse en axios
(https://github.com/axios/axios). Debe incluir ARIA atributes en las vistas. La interfaz de usuario debe
mostrar los textos en inglés. Aplique buenas prácticas y convenciones aplicadas en clase para
nomenclatura lógica y física de clases y componentes. El proyecto de aplicación debe poder aperturarse
sin problemas en JetBrains WebStorm.
Para la nomenclatura física de componentes, clases e interfaces utilice kebab-case. Aplique en los
nombres físicos sufijos que indiquen el tipo de elemento: .component.vue, .service.js, .entity.js. El sufijo
Página 3 de 4
component no debe ser parte del nombre del componente cuando se use en templates (Por ejemplo
user-list.component.vue debería utilizarse en código de template como <user-list></user-list>).
Para la nomenclatura de componentes de PrimeVue dentro de los templates utilice kebab-case. Asigne
el prefijo pv- al momento de incorporar su uso en el proyecto (Por ejemplo, pv-card). Comente los
archivos de código fuente elaborados por usted, incluyendo summary con el propósito y author con su
nombre y apellido.
Fuera del alcance:
Sidebar
Internationalization
Routing
Referencias:
https://fakestoreapi.com/
https://router.vuejs.org/
https://router.vuejs.org/installation.html
https://primevue.org/installation
https://primevue.org/button
https://primevue.org/toolbar
https://primevue.org/toast
https://primeflex.org/installation
https://primeflex.org/gridsystem
https://primeflex.org/flex
https://axios-http.com/docs/intro
