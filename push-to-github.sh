#!/bin/bash

# Script para hacer push al repositorio de GitHub
# Uso: ./push-to-github.sh [token]

REPO_URL="https://github.com/gxtti70/mi-portafolio.git"
TOKEN=$1

if [ -z "$TOKEN" ]; then
    echo "Haciendo push con autenticación interactiva..."
    echo "Si te pide credenciales:"
    echo "  - Usuario: tu nombre de usuario de GitHub (gxtti70)"
    echo "  - Contraseña: un Personal Access Token (no tu contraseña)"
    echo ""
    git push -u origin master
else
    echo "Haciendo push con token..."
    git remote set-url origin https://${TOKEN}@github.com/gxtti70/mi-portafolio.git
    git push -u origin master
    # Restaurar URL original
    git remote set-url origin https://github.com/gxtti70/mi-portafolio.git
fi
