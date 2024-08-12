# AngularBases

## Comandos para arrancar
- DEV SRV: `ng serve` | `http://localhost:4200/`
- OTROS: `ng generate directive|pipe|service|class|guard|interface|enum|module`
    - Modulo: `ng generate module <nombre>` | `ng g m <nombre>`
    - Componente: `ng generate component <nombre>` | `ng g c <nombre>`

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
### Dependencias:
### Plantillas:
### Directivas:
### Router:
### Metadata: 
- Son representado por los decoradores, es la información que define
    - modulos, servicios, etc.
- se usa para configurar y personalizar el comportamiento del estado de la app
- @Component, @NgModule, @Injectable se usan para adjuntar metadata a las clases
