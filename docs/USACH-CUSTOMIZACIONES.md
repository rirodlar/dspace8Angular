# Personalizaciones USACH

Notas de las modificaciones propias de USACH sobre el fork de DSpace-Angular.
Mantener este documento actualizado cada vez que se agregue una personalización,
para no perder el rastro en futuros upgrades de DSpace.

---

## Idioma del sitio: solo español

El sitio está configurado para mostrarse **solo en español**. El selector de
idioma del header **se oculta automáticamente** cuando hay un único idioma
activo (ver `src/app/shared/lang-switch/lang-switch.component.ts`), por lo que
no hay que tocar el header para esconderlo.

**Dónde se define (código versionado):**
`src/config/default-app-config.ts`

```ts
defaultLanguage = 'es';

languages: LangConfig[] = [
  // ...todos en active: false...
  { code: 'es', label: 'Español', active: true },
  // ...
];
```

**Por qué está en el código y no en `config.prod.yml`:** "solo español" es una
decisión de producto que aplica a todos los entornos (dev/QA/prod), no una
configuración específica de un servidor. Así queda versionada y se despliega
sola vía git + build, sin depender de archivos `.yml` sueltos por servidor.

**Para rehabilitar más idiomas:** poner `active: true` en los idiomas deseados
en ese mismo arreglo. Con más de un idioma activo, el selector vuelve a aparecer.

---

## Configuración por entorno (`config.prod.yml`)

Los archivos `config.*.yml` **no se versionan** (`config/.gitignore`) porque
contienen configuración específica de cada entorno (hosts/puertos, eventual
info sensible). Solo se versiona la plantilla `config/config.example.yml` (de
upstream) y `config/config.prod.yml.example` (referencia USACH).

**Ubicación del archivo real de producción (en el servidor):**

```
/opt/dspace-ui-deploy/config/config.prod.yml
```

Se lee en runtime al arrancar el proceso Node de la UI, por encima de los
defaults de `src/config/default-app-config.ts`. Cambiar este archivo **no**
requiere rebuild, solo reiniciar el proceso Node.

---

## Flujo de despliegue

- **Local:** editar → `git push origin main` (repo `github.com/rirodlar/dspace8Angular`).
- **Servidor** (`usuarioadm@dispacecris`), código fuente en `/home/usuarioadm/dspace8Angular`:

```bash
cd /home/usuarioadm/dspace8Angular
git pull origin main

# Solo si cambió package.json:
# yarn install --frozen-lockfile

# Build de producción
yarn build:prod

# Respaldar dist actual y publicar el nuevo
cp -r /opt/dspace-ui-deploy/dist /opt/dspace-ui-deploy/dist.bak.$(date +%Y%m%d-%H%M)
rm -rf /opt/dspace-ui-deploy/dist
cp -r dist /opt/dspace-ui-deploy/dist

# Reiniciar el proceso Node (ajustar al método real: pm2 / systemd)
pm2 restart dspace-ui        # o: sudo systemctl restart dspace-ui
```

> Cambios solo en `config.prod.yml` no requieren rebuild: basta reiniciar el
> proceso Node. Cambios en código (`src/...`) sí requieren `yarn build:prod`.
