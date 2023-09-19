# ¿Qué es esto?

Esto es un pequeño proyecto de arquitectura limpia en 3 paquetes y este es tan sólo el primer paquete de los tres, esto es la **capa de dominio**.

El ejercicio trata de un simple ToDo con usuario y contraseña. Los nombres que uso aveces pueden parecer extraídos de DDD (Domain-Driven Design).

![Clean Architecture](./assets/clean_architecture.jpg)

## Pensamientos

Este paquete por si sólo no funciona, ya que es un compendio de comportamientos que las entidades de la solución tienen junto a los comandos, o si los quieres llamar DTO, que la futura aplicación debería de aceptar para poder trabajar.

Aunque en estos momentos estoy pensando en que dichos comandos y sus respectivas validaciones, deberían estar en la capa de aplicación, porque es la aplicación quien debería determinar su propia lógica y no el dominio. Según lecturas, el dominio debería de preocuparse por la lógica del dominio y nada más, es decir, lógica en las entidades, lógica en los objetos de valor y no más.

## El repositorio

Trataré al máximo de llevar los commits bajo la filosofía de "[Conventional Commits](https://www.conventionalcommits.org/)", como también de aplicar "[Release Flow](http://releaseflow.org/)".

## ¿Cómo hacerlo caminar?

Inicié trabajando con NPM pero ahora estoy trabajando con PNPM por el tema de velocidad y ahorro de espacio en almacenamiento. Así que los pasos serían los siguientes para probar más que hacerlo caminar ya que este paquete por si solo no debería de funcionar.

NOTA: si no sabes qué es PNPM te invito a darle una oportunidad haciendo [clic aquí](https://pnpm.io/).

### Paso 1: Clonar el repositorio

```bash
git clone 
```

### Paso 2: Instalación de dependencias

```bash
pnpm install
```

### Paso opcional: Correr los test

```bash
pnpm test
```

O sí desea ver la cobertura entonces sería de la siguiente manera:

```bash
pnpm test:cov
```

### Paso 3: Construcción del paquete

```bash
pnpm build
```

### Paso 4: Crear el enlace simbólico para incluir el paquete en la capa de aplicación

```bash
pnpm install -g
```

En mi caso el paso anterior me tocó hacerlo sólo una vez en la vida de PNPM. Luego si hacemos el siguiente paso que es propiamente para crear el enlace simbólico.

NOTA: Para poder crear el enlace simbólico, usted debe de estar en la raíz del proyecto.

```bash
pnpm link --global
```
