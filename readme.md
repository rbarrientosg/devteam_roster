# Cronología de Actividades del Proyecto

Este documento describe paso a paso las actividades realizadas en el proyecto de desarrollo, incluyendo tareas de gestión de ramas e integraciones en Git.

## Actividad 01
Para iniciar con el desarrollo del proyecto, se requiere una rama principal que indique el estado general y donde colaboren todos los desarrolladores. Ayuda a crear la rama `develop` tomando como base la rama `master`.

## Actividad 02
Un desarrollador se dio cuenta de que un último cambio fue integrado incorrectamente en la rama `custom/dashboard`. Ayuda a:
- Crear una nueva rama llamada `layouts/dashboard`.
- Replicar el último cambio de `custom/dashboard` en `layouts/dashboard`.
- Eliminar ese mismo cambio de la rama `custom/dashboard`.

## Actividad 03
Integra los cambios de la rama `custom/dashboard` en la rama `layouts/dashboard`, asegurándote de que exista un commit de fusión para la integración.

## Actividad 04
Un desarrollador solicita ayuda para integrar los cambios de la rama `materialweb` en la rama `develop`, de modo que se mantenga el historial de commits de `materialweb` en `develop`. Antes de realizar la integración, elimina el último commit de `materialweb`, ya que fue un test subido por error.

## Actividad 05
Ayuda al desarrollador a integrar la rama `custom/students` en la rama `layouts/students` sin mantener el historial de la rama a integrar.

## Actividad 06
Ayuda al desarrollador a integrar la rama `backend/students` en la rama `layouts/students` sin mantener el historial de la rama a integrar.

## Actividad 07
Ayuda al desarrollador a integrar la rama `layouts/students` en la rama `develop` sin mantener el historial de la rama a integrar.

## Actividad 08
Se requiere fusionar la rama `experience/dashboard` en `custom/dashboard`, manteniendo el historial de commits de `experience/dashboard` dentro de `custom/dashboard`. Después, integra `custom/dashboard` en la rama `develop`, dejando un commit de fusión para identificar los cambios realizados.

## Actividad 09
Un desarrollador asignado al desarrollo de las páginas `activities` y `add_student` no creó ramas individuales y subió todos los cambios en la rama `layouts/activities`. Ayúdalo a:
- Separar los cambios de la página `add_student` creando una rama llamada `layouts/add_student`.
- Eliminar el commit correspondiente a `layouts/add_student` de la rama `layouts/activities`.

## Actividad 10
Otro desarrollador trabajó dos cambios diferentes en una sola rama, en `custom/activities`. Ayúdalo a:
- Crear la rama `custom/add_student`.
- Pasar los cambios que pertenecen a `custom/add_student` a la nueva rama.
- Eliminar los cambios de `custom/add_student` de `custom/activities`.

## Actividad 11
Ayuda al desarrollador a integrar la rama `custom/activities` en la rama `layouts/activities` sin mantener el historial de la rama a integrar.

## Actividad 12
Ayuda al desarrollador a integrar la rama `layouts/activities` en la rama `develop` sin mantener el historial de la rama a integrar.

## Actividad 13
Ayuda al desarrollador a integrar la rama `custom/add_student` en la rama `layouts/add_student` sin mantener el historial de la rama a integrar.

## Actividad 14
Ayuda al desarrollador a integrar la rama `layouts/add_student` en la rama `develop` sin mantener el historial de la rama a integrar.

## Actividad 15
Realiza un pull request solicitando la integración de la rama `develop` en la rama `master`. Una vez aprobado, realiza la integración manteniendo todo el historial de la rama `develop` dentro de la rama `master`.
