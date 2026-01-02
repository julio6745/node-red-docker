FROM nodered/node-red:4.1.2

# Copiar settings.js personalizado
COPY data/settings.js /data/settings.js

# Forzar Node-RED a usar /data como directorio de usuario
CMD ["npm", "start", "--", "--userDir", "/data"]

