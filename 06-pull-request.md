> **Consulta opcional.** Para resolver la actividad en clase alcanza con [los cinco pasos del README](../README.md). No es necesario repetir este recorrido extendido.

# Guía común · Abrir, revisar y fusionar un PR

[Inicio](../README.md) · [Ayuda](05-ayuda.md)

Esta secuencia se usa en todos los ejercicios. Un **PR** muestra los cambios de una rama para que otra persona los revise antes de integrarlos.

## 1 · Autor: abrir el PR en GitHub

Después de hacer `push`, abrí **tu repo de equipo**. Tocá **Compare & pull request**. Si no aparece, pestaña **Pull requests → New pull request**.

Verificá **base: main ← compare: tu rama**. Completá título, descripción, prueba realizada y revisor. La plantilla del PR aparece automáticamente.

![Referencia del muro: base main y rama de trabajo](imagenes/referencia-muro-pr.jpg)

*La captura es del muro. En este ejercicio la rama puede ser hotfix/calculo-iva, por ejemplo. No selecciones la rama equipo-docente de la imagen.*

Tocá **Create pull request**. En **Reviewers** elegí al compañero asignado. Si no aparece, comprobá que tiene acceso al repo y compartile el enlace del PR por el canal del equipo. **No hagas merge todavía.**

## 2 · Revisor: leer los cambios

Entrá al PR con **tu propia cuenta**. En la pestaña **Files changed / Archivos modificados**:

1. Mirá qué archivos cambiaron.
2. Leé las líneas eliminadas (rojo) y agregadas (verde).
3. Comprobá que el cambio responde al ejercicio y conserva los comentarios.
4. Si hay algo que corregir, pasá el cursor por el número de línea y tocá el **+** para comentar esa línea. Escribí qué observaste y qué necesita cambiar.

Un comentario útil explica una observación: “Con subtotal 100 obtuve …; se esperaba …”. Evitá aprobar con “todo bien” sin probar.

## 3 · Revisor: probar la rama en tu computadora

Guardá o terminá tus cambios antes de cambiar de rama. **Si git status muestra trabajo pendiente, detenete.**

En el siguiente bloque, reemplazá `NOMBRE-DE-RAMA` por la rama exacta del PR. **No ejecutes el ejemplo sin reemplazarlo.**

```bash
git status # Comprueba que tu carpeta está limpia antes de revisar.
git fetch origin # Descarga las referencias y los commits publicados por el equipo.
git checkout --detach origin/NOMBRE-DE-RAMA # Abre la versión remota para probarla sin modificar una rama local.
```

El aviso `detached HEAD` es esperado aquí: estás mirando una versión para probar, **no trabajando en ella**. Abrí la página correspondiente y realizá las comprobaciones de la guía.

Para volver a trabajar:

```bash
git checkout main # Sale de la revisión y vuelve a tu rama principal.
git pull --ff-only origin main # Actualiza la base local si ya hubo cambios aprobados.
```

Si el autor sube una corrección, repetí fetch y checkout de la rama remota para probar **la última versión**.

## 4 · Revisor: enviar la revisión

En **Files changed**, tocá **Review changes / Revisar cambios**. Elegí:

| Opción | Cuándo usarla |
|---|---|
| Comment | Para una observación que no es una aprobación ni un pedido formal de corrección |
| Request changes | Cuando el cambio necesita corregirse antes de fusionarse |
| Approve | Cuando revisaste, probaste y cumple el objetivo |

Escribí un resumen con la prueba realizada y enviá con **Submit review**. Si pedís cambios, **el PR queda abierto**: no lo cierres ni crees otro.

## 5 · Autor: responder y actualizar el mismo PR

Leé la revisión, corregí **en la misma rama**, guardá y probá. Agregá solo los archivos que modificaste, hacé otro commit y luego `git push`. GitHub incorpora ese commit al PR existente. Respondé al compañero explicando qué cambiaste y solicitá una nueva revisión.

El revisor debe volver a probar y aprobar la versión corregida. No marques como resuelta una observación sin haberla atendido.

## 6 · Autor: hacer merge después de la aprobación

Comprueben juntos:

- El compañero envió **Approve**.
- La versión aprobada es la última.
- No hay conflictos pendientes.
- Los archivos y las pruebas corresponden al ejercicio.

Tocá **Merge pull request → Confirm merge**. En esta práctica mantengan el método normal de merge.

![Referencia del muro: botón de merge](imagenes/referencia-muro-merge.jpg)

*Es una referencia del botón. En el muro no había revisión previa; acá sí debe existir antes de pulsarlo.*

![Referencia del muro: confirmación de fusión](imagenes/referencia-muro-fusionado.jpg)

**Esperado:** PR marcado **Merged**, normalmente en violeta. Algunas traducciones automáticas muestran etiquetas confusas: verificá también el mensaje de que se fusionó.

No hace falta borrar las ramas durante la práctica: sirven para revisar el recorrido.

## 7 · Todos: actualizar main

Cuando terminen sus cambios locales:

```bash
git status # Verifica que no haya trabajo pendiente.
git checkout main # Vuelve a la rama que reúne los cambios aprobados.
git pull --ff-only origin main # Trae los cambios integrados por el equipo.
```

> El acuerdo de revisión es parte de la actividad. No supongan que GitHub bloqueará automáticamente un merge sin aprobación: eso depende de la configuración del repositorio. Aunque el botón esté habilitado, esperen al compañero.

