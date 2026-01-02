FROM nodered/node-red:4.1.2

# Copiar tu settings.js personalizado dentro del contenedor
COPY data/settings.js /data/settings.js

# Asegurar que Node-RED use /data como directorio de usuario
ENV NODE_RED_HOME=/data
ENV NODE_RED_ENABLE_SAFE_MODE=false

# Exponer el puerto que Railway necesita
EXPOSE 1880

CMD ["npm", "start", "--", "--userDir", "/data"]
