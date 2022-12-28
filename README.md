# Guía para usar SAIMYR - Skeleton 2.0

Este proyecto (_Skeleton 2.0_) contiene la estructura necesaria para construir una aplicación Web usando las características adoptadas por SAIMYR para construir soluciones de software.

## Tabla de Contenido

* [Explicación de las carpetas](#carpetas)
    - [components](#components)
    - [interfaces](#interfaces)
    - [models](#models)
    - [pages](#pages)
    - [pipes](#pipes)
    - [services](#services)
    - [utils](#utils)
* [Paso a paso para iniciar un proyecto con Skeleton 2.0](#como-usar)

<a name="carpetas"></a>
# Carpetas

<a name="components"></a>
## Carpeta _components_
Esta Carpeta contiene todos los componentes que se van a reutlizar en el proyecto, los componentes que vaya creando, deberán tener su _.module.ts_. Skeleton trae los siguientes componentes por defecto en la carpeta _general_:

**Componente** | **Descripción**
 --- | ---
```about``` | Componente con información del proyecto, como lo es su nombre, versión, nombre y escudo de la entidad y  de los derechos reservados, la versión deberá ser cambiada cada que se realice un _build_.
```footer``` | Componente con información de la entidad y el desarrollado por SAIMYR.
```header``` | Componente con el nombre de proyecto y un _dropdown_ con acceso directo para cambiar la contraseña, ver el _about_ de la aplicación y cerrar sesión, en este, se pueden incluir acciones que crea necesario.
```menu``` | Componente con la lógica para la animación del menú lateral izquierdo, en este, se deben agregar las opciones en el _Array_ de _items_ para ver los cambios reflejados.

<a name="interfaces"></a>
## Carpeta _interfaces_
Esta Carpeta contiene todas las interfaces que no representen un dominio del _Backend_.

<a name="models"></a>
## Carpeta _models_
Esta Carpeta contiene todas las interfaces que representen un dominio del _Backend_.

<a name="pages"></a>
## Carpeta _pages_
Esta carpeta contiene todas las páginas que se verán en la aplicación.

> 💡 _**Protip**: Si la página tiene componentes propios, es decir, no se van a reutlizar en otra página, deberá crear una carpeta 'components' y allí crear los componentes necesarios, EJM: pages/home/components/component-one.component.ts._

<a name="pipes"></a>
## Carpeta _pipes_
Esta carpeta contiene los pipes que la aplicación requiera.

> 💡 _**Protip**: Recuerde crear su propio módulo para exportarlo y no tener un módulo general para todos los pipes._

<a name="services"></a>
## Carpeta _services_
Esta carpeta contiene todos los servicios que se comunican con el _Backend_. Skeleton trae los siguientes servicios por defecto:

**Servicio** | **Descripción**
--- | ---
```entity.service.ts``` | Servicio que trae la entidad, necesario para los datos del _about_ y _footer_.
```guard.service.ts``` | Servicio que verifica si se tiene el permiso para acceder a cierta _URL_, requiere del servicio _security.service.ts_.
```security.service.ts``` | Servicio con un método para validar el _Token_ de la sesión y otro método para traer los permisos registrados en la aplicación.

<a name="utils"></a>
## Carpeta _utils_
Esta carpeta contiene clases, por lo general para validaciones o métodos estáticos reutilizables en la aplicación.

<a name="como-usar"></a>
# Paso a paso para iniciar un proyecto con Skeleton 2.0
1. Descargar Skeleton como .zip y extraer su contenido localmente dónde lo necesites. 

> 💡 _**Protip**: En tu equipo, crea una carpeta con el nombre del proyecto y dentro de ella dos carpetas más: Backend y Frontend (aquí iría la estructura de Skeleton)._

2. Ejecutar en la consola el comando: _npm install_, para crear la carpeta _node_modules_ y descargar sus dependencias.

3. Presiona la combinación de teclas: _Shift + Control +f_, luego buscar _Facturacion_ que es el nombre que trae por defecto Skeleton, en este caso, el nombre _Facturacion_ viene del _package.json_ en su atributo _name_; el editor de código, encontrará varios resultados los cuales se deberán cambiar por el nombre del proyecto: _EJM: mi-primer-proyecto_.

4. Cambiar las variables de los _enviroment_ para que apunten a su respectivo _Backend_.

5. Eliminar o editar este README.md para que no quede en el repositorio cuando se cargue a Git.

6. Skeleton tiene un plugin con estándares de código en los archivos _.ts_ por lo que es necesario tener instalado el plugin _ESLint_.

7. ¡Empieza a desarrollar! 🚀

Extensiones en el visual recomendadas:
- Angular Language Service
- SCSS Formatter

***
> 💡 _**Protip**: Cada que crees un componente o archivo dentro de una carpeta que contenga un **.gitkeep** elimínalo para que no quede innecesariamente allí._

***
Cualquier inquietud, solicitud o aporte que quieras realizar a Skeleton contactar a Adrian Ramírez en <adrianramirez@saimyr.com.co>.
