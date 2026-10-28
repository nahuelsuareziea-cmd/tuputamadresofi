# Si algo sale mal

[Volver al inicio](../README.md)

| Qué ves | Qué revisar |
|---|---|
| Repository not found | URL del repo del equipo, cuenta de GitHub e invitación aceptada. Un repo privado también devuelve ese mensaje cuando falta acceso. |
| 403 / Permission denied | Ver el repo no equivale a tener permiso de escritura. Avisá a la cátedra para que revise el acceso del equipo. |
| Please tell me who you are | Configurá nombre y correo de Git según la guía de inicio. |
| git no se reconoce | Comprobá que Git esté instalado y abrí Git Bash. |
| code no se reconoce | Abrí VS Code manualmente y elegí Archivo → Abrir carpeta. |
| pathspec did not match | Revisá el nombre de la rama. Para una rama remota recién publicada, primero ejecutá git fetch origin. |
| Your local changes would be overwritten | Hay trabajo sin guardar en Git. Detenete, revisá git status y terminá tu cambio antes de cambiar de rama. No lo descartes. |
| Not possible to fast-forward | Tu main local tiene una historia distinta. No uses force ni reset; pedí ayuda para revisar qué se commiteó y dónde. |
| CONFLICT en el ejercicio 2 | Es esperado. Seguí el paso de resolución; no lo resuelvas borrando el archivo. |
| No aparece el conflicto | Comprobá que ambas ramas nacieron del mismo commit, reemplazaron la misma línea y que zapatillas ya está integrado en main. No provoques cambios adicionales al azar. |
| No aparece Compare & pull request | Andá a Pull requests → New pull request y elegí base main y tu rama. |
| No hay diferencias para el PR | Revisá si hiciste commit y push, si elegiste la rama correcta o si ese cambio ya fue integrado. |
| No podés aprobar | Verificá que no sea tu propio PR y que tengas acceso al repo. Debe revisar otra persona. |
| Sigue apareciendo NaN tras corregir | Guardá cart.js, refrescá y comprobá que abriste index.html de la carpeta correcta. |
| El navegador muestra principal | Puede estar traduciendo main. En los comandos escribí main. |
| La terminal espera por una comilla | Ctrl + C cancela la línea incompleta. Volvé a escribirla con las comillas cerradas. |
| Aparece detached HEAD al revisar | Es esperado en la guía de revisión; no edites ahí. Para volver, git checkout main. |

## Qué compartir cuando pedís ayuda

Indicá el paso, el comando que ejecutaste, el mensaje completo del error y el nombre del repo y rama. No compartas contraseñas, códigos de acceso ni tokens.

```bash
git status # Muestra la rama y los archivos pendientes.
git branch --show-current # Informa el nombre de la rama actual.
git log --oneline -5 # Muestra los últimos cinco commits para entender el recorrido.
```

