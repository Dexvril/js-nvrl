# Gunakan base image dengan Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Salin file package.json dan lock file
COPY package*.json bun.lockb ./
RUN bun install

# Salin seluruh proyek
COPY . .

# Build aplikasi SvelteKit
RUN bun run build

# Stage untuk produksi
FROM oven/bun:1

WORKDIR /app

# Salin hasil build dari stage builder
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN bun install --production

EXPOSE 3000

# Jalankan aplikasi dengan Bun
CMD ["bun", "build/index.js"]