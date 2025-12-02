# Instrucciones para hacer Push a GitHub

El proyecto está completamente configurado y listo para hacer push. Solo necesitas autenticarte.

## Opción 1: Push con Token Personal (Recomendado)

1. Crea un Personal Access Token en GitHub:
   - Ve a: https://github.com/settings/tokens
   - Click en "Generate new token" → "Generate new token (classic)"
   - Dale un nombre (ej: "Portafolio Deploy")
   - Selecciona el scope `repo`
   - Click en "Generate token"
   - **Copia el token inmediatamente** (solo se muestra una vez)

2. Ejecuta el push usando el token:
   ```bash
   git push -u origin master
   ```
   - Usuario: `gxtti70`
   - Contraseña: **pega el token** (no tu contraseña de GitHub)

## Opción 2: Usar el Script Helper

```bash
./push-to-github.sh TU_TOKEN_AQUI
```

## Opción 3: Configurar Token en la URL (temporal)

```bash
git remote set-url origin https://TU_TOKEN@github.com/gxtti70/mi-portafolio.git
git push -u origin master
git remote set-url origin https://github.com/gxtti70/mi-portafolio.git
```

## Después del Push

1. Ve a: https://github.com/gxtti70/mi-portafolio
2. Settings → Pages
3. En "Source", selecciona **"GitHub Actions"**
4. El sitio estará disponible en: **https://gxtti70.github.io/mi-portafolio**

El workflow de GitHub Actions se ejecutará automáticamente y desplegará tu sitio.
