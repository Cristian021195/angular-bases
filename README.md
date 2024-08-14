# AngularBases

## Comandos para arrancar
- DEV SRV: `ng serve` | `http://localhost:4200/`
- OTROS: `ng generate directive|pipe|service|class|guard|interface|enum|module`
    - Modulo: `ng generate module <nombre>` | `ng g m <nombre>`
    - Componente: `ng generate component <nombre>` | `ng g c <nombre>`
    - Servicio `ng g s <nombre>`
    - Directiva: `ng g d <nombre>` 

## Build
- CONSTRUCCIÓN DE APP: `ng build`, será almacenado en `dist/`

## Correr tests
- TEST UNITARIOS `ng test`

## Correr tests end-to-end
- TESTS COMPLETOS: `ng e2e`.

## TEORÍA Y BASES:

### Módulos: 
- Es un mecanismo de encapsulacion y orgenizacion, para agrupar componentes, directivas, pipes,
 servicios y demas elementos en una unidad funcional coherente. 
- Importan y exportan elementos
- Registran proveedores, ej: modulo de usuarios si manejamos login
- Evitan conflictos de nombres por namespaces
- Ayudan a dividir la app en partes mas pequeñas, escalables y mantenibles
- Tenemos un modulo principal y luego los modulos inferiores.
- A diferencia de los componentes, los modulos no se ven. Son la estructura organizativa.

### Decoradores: @NgModule
Es una estructura de datos en typescript. En angular lo veremos en la definicion
de componentes y permite configurar la app angular. Es la metadata que tiene por parametros un objeto con:
- declaraciones: va el componente
- importaciones: van otros modulos
- exportaciones: van componentes o no, cosas que usaremos en otros modulos o componentes
- proveedores?, bootstrap?, etc: 


### Componentes: 
- Son responsables de definir como se ve y comporta una parte especifica de la UI de la app
- Cada compoente representa un elemento visual o funcional de la web. 
- Sigue el diseño Atomico / Atomic Design, siguiendo la jerarquia de UI
- Cuando los creamos con CLI nos genera 4 archivos
    - Controlador, Lógica y datos: <nombre>.component.ts
        - La metadata de este componente es @Component
        - selector: app-'<nombre>' es la estructura html que se usara en la vista, el nombre
        - templateUrl: ruta que apunta a la plantilla html
        - styleUrls: [url a estilos, ... , otros.css]
        - `export class NombreComponent implements OnInit{...}`
            - Propiedades, son atributos del objeto. como `titulo:string`
            - Metodo `contructor(){}`
            - `noOnInit(){}`, metodos de inicializacion de OnInit
    - Vista, Plantilla visual: <nombre>.component.html
    - Estilos de plantilla: <nombre>.component.css
    - Scripts de pruebas: <nombre>.component.spec.css
- Se crean con `ng g c <nombre>` y genera `/nombre{component.ts, component.html, component.css, spec.ts}`

### Data binding / Enlace de datos:
- Conecta y sincroniza los datos entre el modelo controlador y la vista
- El enlace de datos permite que los cambios del modelo se actualizen automaticamente en la vista
- Es la comunición, la ida y vuelta de los datos que pasan por los componentes
- Unidireccional: los cambios en el modelo se reflejan en la vista
- Bidireccional: los cambios en la vista actualizan al modelo (formularios)
- Reactivo: usa observables para actualizar en tiempo real

### Comunicación entre componentes:
- Cuenta on la entrada IN, y salida OUT
- con estas propiedades los componentes pueden emitir hacia arriba o hacia abajo la info
- Un componente padre puede pasar data a un hijo por la vinculacion de `propiedades de entrada`
    - En el componente hijo: @Input() <nombre variable>:<type>
- Un hijo puede emitir eventos que un padre puede escuchar a traves de las `propiedades de salida`

### Servicios:
- Es una clase de Typescript, con un decorador `@Inyectable({providedIn:'root'})`
- También nos permite hacer una comunicación entre componentes. Pero es mas usado para cosas mas complejas.
- Permite centralizar y compartir logica, datos, funcionalidades entre diferentes componentes
- Divide la logica de la UI
- Usa inyecccion de dependencias para instancias proporcionadas. Es mas facil de testear
- Se puede hacer persistir la información una vez desmontado el componente
- Crear servicio `ng g s <nombre>`
- `providedIn:<lugar>`, generalmente es root, pero podemos proveerlo en diferentes lugares de la aplicación
- Comparando con React podemos decir que:
    - Sería similar a hablar de custom hooks: ya que encapsulan logica fuera de la vista
    - Sería similar a hablar de context providers: ya que hace persistente los datos en memoria
- Ejemplo: una vez creado el servicio, lo ponemos en el constructor del componente
    - `import {MiServicio} from ...` Importamos el servicio
    - `constructor(private miServicio: MiServicio){...}` de esta manera hacemos la inyeccion de la dependencia


### Dependencias:
- Son los recursos externos y módulos de código que una aplicación necesita para funcionar correctamente
- Pueden ser librerias externas, modulos del core de Angular, servicios, etc.
- Se gestionan por el sistema de inyección de dependencias, es decir lo aplicamos donde necesitemos usarlo
- Inyeccion de constructores: dependencias pasadas a traves de constructores

### Directivas:
- Son instrucciones en el marcado HTML que dan funcionalidad adicional a los elementos del DOM existentes
o personalizan su comportamiento.
- Permiten extender y manipular el DOM de manera declarativa, facilitando la creacion de UI interactiva
- Angular viene con directivas propias y pueden crearse otras personalizadas
- Van incluidas en el HTML
- Algunas son:
    - Directivas estructurales: @if, @foreach, @for
    - De atributos: ["attr"]
    - De eventos: (click)
- Crear directiva personalizada: `ng g d <nombre>` 
- Nos crea una clase con el decorador `@Directive({selector:'[app<nombre>]'})`
    - En el constructor tiene `private el: ElementRef` que hace referencia al HTML del elemento que la usa
- Se en la etiqueta HTML: `<div appNombreDirectiva></div>` 
- Se usa mucho directivas de permisos para los casos en los que el usuario no este logueado / registrado / roles
- NO OLVIDAR, siempre que las queramos usar, ponerlas en los imports del componente en cuestion

### Plantillas:

### Router:
### Metadata: 
- Son representado por los decoradores, es la información que define
    - modulos, servicios, etc.
- se usa para configurar y personalizar el comportamiento del estado de la app
- @Component, @NgModule, @Injectable se usan para adjuntar metadata a las clases
