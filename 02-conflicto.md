> **Material histórico de la versión del 27/10. No forma parte de la actividad corta.** La cátedra puede usarlo como referencia para preparar una demostración separada desde la base original; no ejecutarlo sobre el resultado de la práctica nueva. [Volver a la consigna vigente](../README.md).

# 2 · Dos promociones, un conflicto

[Anterior: IVA](01-hotfix.md) · [Siguiente: revisión](03-revision.md)

**Autores B y C · Revisores C y E.** B hace zapatillas; C hace remeras. Este ejercicio necesita dos copias locales, una por autor. Si comparten computadora, pidan acompañamiento para preparar dos carpetas; no alternen cuentas sin revisar la configuración de Git.

**Objetivo:** producir un conflicto controlado y conservar las dos promociones. No se trata de elegir un ganador.

## Paso 1 · B y C parten del mismo punto · Cada uno en su Git Bash

**Esperen a que el ejercicio del IVA esté fusionado. No fusionen otros cambios durante esta preparación.**

Ambos ejecutan:

```bash
git status # Comprueba que no haya cambios pendientes.
git checkout main # Vuelve a la rama principal.
git pull --ff-only origin main # Descarga el mismo estado aprobado.
git rev-parse --short HEAD # Muestra el identificador del commit de partida.
```

Comparen el identificador: **debe ser igual**. Si no coincide, deténganse y actualicen antes de crear las ramas.

B ejecuta:

```bash
git checkout -b feature/promo-zapatillas # Crea la rama de la primera promoción.
```

C ejecuta:

```bash
git checkout -b feature/promo-remeras # Crea la segunda rama desde la misma base.
```

**Pausa de coordinación: ambos deben haber creado su rama antes de continuar.**

## Paso 2 · B y C reemplazan la misma línea · VS Code

En `index.html`, busquen la línea que contiene **Ofertas de la semana**. Cada uno reemplaza esa línea completa en su copia; no agrega una promoción debajo dejando intacta la original.

B deja:

```html
<div class="promo">Oferta en Zapatillas Deportivas - 20% OFF</div> <!-- Presenta la promoción de zapatillas. -->
```

C deja:

```html
<div class="promo">Oferta en Remeras - 15% OFF</div> <!-- Presenta la promoción de remeras. -->
```

Guarden, abran el sitio y comprueben que se ve su promoción.

B ejecuta:

```bash
git add index.html # Prepara el cambio de zapatillas.
git commit -m "feat: agrega promocion de zapatillas" # Guarda la primera versión de la línea.
git push -u origin feature/promo-zapatillas # Publica esta rama.
```

C ejecuta:

```bash
git add index.html # Prepara el cambio de remeras.
git commit -m "feat: agrega promocion de remeras" # Guarda la segunda versión de la misma línea.
git push -u origin feature/promo-remeras # Publica esta rama.
```

**Pausa: los dos cambios deben estar commiteados y subidos. No hagan pull de main dentro de estas ramas.**

## Paso 3 · Primero se integra zapatillas · B y C

B abre un PR de `feature/promo-zapatillas` hacia `main`. C sigue [la guía de revisión](06-pull-request.md), prueba y aprueba. B hace merge.

C puede abrir su PR de remeras antes o después; cuando zapatillas ya esté integrado, el PR de remeras tendrá cambios incompatibles con main. **No lo cierres.**

## Paso 4 · C trae main y provoca el merge explícito · Git Bash

Primero comprobá que tu cambio de remeras ya está guardado en un commit. Después:

```bash
git status # Debe indicar que no hay archivos modificados pendientes.
git checkout main # Selecciona la rama principal local.
git pull --ff-only origin main # Trae la promoción de zapatillas ya aprobada.
git checkout feature/promo-remeras # Regresa a tu rama con la promoción de remeras.
git merge main # Intenta integrar main y produce el conflicto en index.html.
```

**Esperado:** un mensaje como `CONFLICT (content): Merge conflict in index.html`. Es el resultado buscado, no una falla que haya que evitar.

## Paso 5 · C resuelve con B · VS Code

Abrí `index.html`. Verás marcas como `<<<<<<< HEAD`, `=======` y `>>>>>>> main` alrededor de las versiones enfrentadas.

En este recorrido, **Current / Actual** es la rama de remeras y **Incoming / Entrante** es main con zapatillas. No elijas una opción por el nombre: leé qué contenido contiene.

Acuerden conservar **ambas ofertas**. Reemplazá el bloque completo, incluidas las marcas, por:

```html
<div class="promo">Oferta en Zapatillas Deportivas - 20% OFF</div> <!-- Conserva la promoción aprobada en main. -->
<div class="promo">Oferta en Remeras - 15% OFF</div> <!-- Incorpora también la promoción del equipo. -->
```

Si usás **Accept Both Changes / Aceptar ambos cambios**, igualmente revisá el orden y que no queden marcas ni etiquetas duplicadas. Guardá y abrí la tienda: deben verse **dos promociones** y el cálculo del IVA debe seguir funcionando.

## Paso 6 · C registra la resolución · Git Bash

```bash
git diff --check # Comprueba que no queden marcas de conflicto ni errores de espacios detectables.
git add index.html # Marca el archivo como resuelto.
git commit -m "merge: conserva ambas promociones" # Completa el merge con la resolución acordada.
git push # Actualiza el mismo PR de remeras.
git status # Comprueba que el merge terminó y no quedan cambios pendientes.
```

## Paso 7 · E revisa y C fusiona · GitHub

E revisa el PR de remeras, prueba ambas ofertas y el IVA. C explica en el PR qué causó el conflicto y por qué conservó las dos versiones. Después de la aprobación de E, C hace merge.

Todos actualizan main. No continúen con el checkout hasta terminar esta integración.

## Comprobación

- [ ] Ambas ramas nacieron del mismo commit.
- [ ] Se produjo un conflicto real en index.html.
- [ ] No quedaron marcas de conflicto.
- [ ] Las dos promociones se ven y el IVA funciona.
- [ ] Ambos PR tienen revisión y están fusionados.

**Para conversar:** ¿por qué no apareció este problema en el muro cuando cada persona editaba su propio archivo?

