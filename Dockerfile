FROM node:18-alpine
WORKDIR /app

# Prvo kopiraj package.json ako postoji
COPY package*.json package-lock.json* ./

# Ako package.json postoji, instaliraj, ako ne, preskoči
RUN if [ -f package.json ]; then npm install; else echo "No package.json, skipping npm install"; fi

# Onda kopiraj sve ostalo
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]