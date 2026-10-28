# Tienda en equipo · Práctica corta de Git

**Desarrollo Web · UNPAZ · 2026 — versión simplificada del 28/10**

**Objetivo:** cada integrante hace un cambio de una línea, lo sube en una rama y revisa el PR de un compañero.

Un repositorio por equipo, preparado por la cátedra. Abran el de su equipo: **no trabajen sobre el template ni creen una copia por persona**. No hace falta instalar paquetes ni usar Node.

**Duración orientativa: 30–40 minutos**, con Git, VS Code y permisos preparados. El tiempo depende del manejo de las herramientas; la cátedra confirma el inicio.

## 1 · Clonar y repartir los cambios

Todos necesitan su propia cuenta, Git instalado y permiso de escritura en el repo. Una persona por cambio. Para cinco integrantes:

| Persona | Archivo | Único cambio | Quién revisa su PR |
|---|---|---|---|
| A | cart.js | Corregir una línea del cálculo del IVA | B |
| B | index.html | Cambiar el texto de una promoción | C |
| C | checkout.html | Aclarar el texto del botón | D |
| D | estilos.css | Cambiar un color indicado | E |
| E | equipo.html | Escribir el nombre del equipo | A |

Así **todos son autores y revisores**. Acuerden quién ocupa cada letra de palabra; no hace falta un informe ni un PR adicional para la tabla.

Con cuatro integrantes, omitan el cambio de color y cierren la ronda entre los cuatro. Con seis, la sexta persona cambia el título de la pestaña en equipo.html, en una segunda ronda después del PR de E; revisa a A, y E revisa a la sexta persona. La cátedra adapta otros tamaños antes de empezar.

En GitHub, entren al repo de su equipo y copien **Code → HTTPS**.

<details>
<summary>Ver captura del botón Code</summary>

![Referencia del muro: copiar dirección HTTPS](docs/imagenes/referencia-muro-clonar.jpg)

Es una captura del muro: **copien la URL del repo de su equipo**, no la de esta imagen.
</details>

En **Git Bash**, cambien 01 por su número de equipo:

```bash
git clone https://github.com/desaweb2026/ecommerce-equipo-01.git # Descarga el repo del equipo; reemplazá 01 si corresponde.
cd ecommerce-equipo-01 # Entra a la carpeta de ese mismo equipo.
code . # Abre el proyecto en VS Code; también podés abrir la carpeta desde su menú.
```

Si nunca configuraron Git, hagan esto una sola vez con sus datos:

```bash
git config --global user.name "Tu nombre" # Reemplazá el ejemplo por tu nombre.
git config --global user.email "tu-correo@example.com" # Reemplazá el ejemplo por el correo de tu cuenta de GitHub.
```

## 2 · Crear una rama y cambiar una línea

Todos parten de main con la carpeta limpia. Reemplazá `nombre-apellido` por el tuyo, sin espacios ni tildes:

```bash
git status # Comprueba que no tengas cambios pendientes; si los hay, pedí ayuda antes de seguir.
git checkout main # Selecciona la rama principal.
git pull --ff-only origin main # Trae la versión compartida antes de empezar.
git checkout -b nombre-apellido # Crea tu rama de trabajo; usá tu nombre real sin espacios.
```

Hacé **solo tu cambio**, guardá con **Ctrl + S** y abrí la página correspondiente con doble clic. Refrescá con **F5**.

**A · IVA:** en cart.js, dentro de calcularTotal, reemplazá la línea que multiplica por `"IVA"` por esta:

```javascript
    return subtotal * 1.21; // Suma al subtotal el IVA del 21%.
```

Abrí index.html: con subtotal **100 debe dar 121.00**, y con **0 debe dar 0.00**. El total incluye el subtotal más el impuesto. Antes de corregir aparece NaN: ese es el error intencional.

**B · Promoción:** en index.html, reemplazá la línea que dice Ofertas de la semana por:

```html
<div class="promo">Remeras: 15% de descuento</div> <!-- Muestra la promoción elegida por el equipo. -->
```

Abrí index.html y comprobá el texto.

**C · Botón:** en checkout.html, reemplazá la línea del botón Continuar por:

```html
<button type="button" disabled>Demo: no se realizan pagos</button> <!-- Aclara que el botón es una demostración sin pagos. -->
```

Abrí checkout.html. Comprobá que cambió el texto y el botón sigue deshabilitado. **El CVV no se modifica en esta práctica.**

**D · Color:** en estilos.css, buscá la línea que empieza con `.promo` y cambiá **solo** el color `#e8f4f3` por `#fff3dc`. Conservá el resto de esa línea y su comentario. Abrí index.html y comprobá el fondo amarillo claro de la promoción.

**E · Equipo:** en equipo.html, reemplazá la línea que dice Nombre del equipo por:

```html
<h1>Equipo 01 · Nuestra tienda</h1> <!-- Identifica al equipo autor de la tienda; reemplazá 01 por tu número. -->
```

Poné su número real. Abrí equipo.html y comprobá el título.

## 3 · Guardar y subir el cambio

Reemplazá **ARCHIVO** por el archivo de tu fila y **nombre-apellido** por tu rama. Ejecutá los comandos uno por vez:

```bash
git diff # Revisa que cambiaste solo la línea asignada.
git add ARCHIVO # Prepara tu archivo, por ejemplo: git add cart.js.
git commit -m "Describo mi cambio" # Reemplazá el mensaje por algo concreto, por ejemplo: Corrijo el IVA.
git push -u origin nombre-apellido # Sube tu rama al repo del equipo.
```

## 4 · Abrir un PR y revisar el de otro

**Autor:** en GitHub, tocá **Compare & pull request**. Si no aparece: **Pull requests → New pull request**. Elegí **base: main** y **compare: tu rama**, escribí qué cambiaste y cómo lo comprobaste, y tocá **Create pull request**. Pasale el enlace al revisor de la tabla.

<details>
<summary>Ver captura para abrir un PR</summary>

![Referencia del muro: base y rama del PR](docs/imagenes/referencia-muro-pr.jpg)

La imagen es del muro. En tu repo elegí tu propia rama, no equipo-docente.
</details>

**Revisor:** abrí el PR de tu compañero → **Files changed / Archivos modificados**. Leé la línea y comprobá con el autor cómo quedó en su navegador. Para el IVA, comprueben **100 → 121.00 y 0 → 0.00**.

Después tocá **Review changes → Approve → Submit review** y escribí brevemente qué verificaste. **No se aprueba el PR propio.**

Si hay un error: dejá una observación y elegí **Request changes**. El autor corrige en **la misma rama**, repite add, commit y push; el PR se actualiza solo. El compañero vuelve a revisar. No es obligatorio inventar un error para pedir cambios.

## 5 · Fusionar y traer el resultado

**Cada autor**, cuando su compañero apruebe, toca **Merge pull request → Confirm merge**. Háganlo de a uno, coordinados. No borren las ramas durante la práctica.

<details>
<summary>Ver el botón de merge y el resultado</summary>

![Referencia del muro: botón de merge](docs/imagenes/referencia-muro-merge.jpg)

![Referencia del muro: PR fusionado](docs/imagenes/referencia-muro-fusionado.jpg)

En esta práctica esperen la aprobación del compañero antes del merge, aunque el botón ya esté habilitado.
</details>

Cuando todos los PR estén fusionados, cada integrante ejecuta:

```bash
git status # Comprueba que no queden cambios locales pendientes.
git checkout main # Vuelve a la rama que reúne los cambios del equipo.
git pull --ff-only origin main # Descarga los cambios aprobados de todos.
```

**Terminaron cuando:**

- [ ] Cada integrante tiene un PR fusionado y revisó el de otra persona.
- [ ] El IVA funciona: 100 → 121.00 y 0 → 0.00.
- [ ] Se ven los pequeños cambios de todos.
- [ ] Todos actualizaron main.

**La evidencia son los PR y las revisiones. No hay informe adicional.** La entrega en el campus se verá después.

Si falla el acceso o aparece un conflicto inesperado, **deténganse y consulten al docente**. No usen reset ni force. [Ayuda para errores frecuentes](docs/05-ayuda.md).

> El recorrido obligatorio termina acá. Las guías extensas anteriores quedaron identificadas como material de consulta; **el conflicto y el CVV no son actividades obligatorias** de esta versión.

