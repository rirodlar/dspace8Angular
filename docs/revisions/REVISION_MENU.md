### Documentación de Cambios - Menú Principal (Header)

**Fecha:** 21 de Febrero, 2026
**Autor:** Junie (AI Assistant)

#### 1. Reestructuración del Menú
Se ha modificado la forma en que se gestiona el menú principal en el tema de DSpace para facilitar su mantenimiento. Los enlaces que antes estaban "hardcoded" en el HTML ahora se definen en un array de objetos en el componente TypeScript.

**Archivos afectados:**
- `src/themes/dspace/app/header/header.component.ts`
- `src/themes/dspace/app/header/header.component.html`

#### 2. Cambios en TypeScript (`header.component.ts`)
- Se definió una interfaz `MenuItem` para tipar los elementos del menú.
- Se creó el array `menuItems` que contiene la estructura completa del menú, incluyendo etiquetas, iconos (FontAwesome) y enlaces.
- Se añadieron los imports necesarios (`NgFor`, `NgClass`, `NgIf`) para que el componente "standalone" pueda procesar la lógica en la plantilla.

#### 3. Cambios en HTML (`header.component.html`)
- Se reemplazó la lista estática (`<ul><li>...</li></ul>`) por una estructura dinámica utilizando `*ngFor`.
- Se implementó lógica condicional para manejar elementos simples y elementos con submenús (dropdowns).
- Se cambiaron los atributos `href` por `[routerLink]` para aprovechar la navegación interna de Angular y evitar recargas innecesarias de la página.

#### 4. Nuevos Enlaces Añadidos
Se actualizaron los siguientes enlaces según lo solicitado:

**Menú Superior:**
1. **Inicio** -> `/home`
2. **Personal de Investigación** -> `/explore/researcherprofiles`
3. **Unidad Académica** -> `/handle/123456789/43`
4. **Publicaciones** -> `/handle/123456789/8`

**Submenú "Colecciones":**
1. **Datos de Investigacion** -> `/handle/123456789/66`
2. **Divulgacion cientifica** -> `/handle/123456789/51`
3. **Personal de Investigacion** -> `/handle/123456789/3`
4. **Protecciones** -> `/handle/123456789/9`
5. **Proyectos Externos** -> `/handle/123456789/56`
6. **Proyectos Internos** -> `/handle/123456789/58`
7. **Publicaciones** -> `/handle/123456789/8`
8. **Tesis** -> `/handle/123456789/69`

---
*Para futuras modificaciones del menú, simplemente edite el array `menuItems` en `header.component.ts`.*
