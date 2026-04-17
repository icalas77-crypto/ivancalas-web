# Iván Calás Website

Sitio web moderno y optimizado para Iván Calás, especialista en diseño web y SEO en España.

## 🚀 Características

- **Next.js 16** con App Router y TypeScript
- **Diseño Dark Mode** con acentos naranja (#FF6B35)
- **Blog con Markdown** - Posts dinámicos con gray-matter
- **Formulario de contacto** - Integración con email
- **Responsive Design** - Optimizado para móvil, tablet y desktop
- **SEO Optimizado** - Metadata, OpenGraph, JSON-LD
- **Rendimiento** - Core Web Vitals optimizados

## 📋 Páginas Incluidas

- ✅ **Home** - Landing page con hero y beneficios
- ✅ **Servicios** - 6 servicios profesionales con detalles
- ✅ **Sobre mí** - Bio, timeline, credenciales
- ✅ **Contacto** - Formulario con validación
- ✅ **Blog** - Listado y posts dinámicos
- ✅ **Legales** - Términos, Privacidad, Cookies

## 🛠️ Configuración

### Instalación

```bash
# Clone the repository
git clone <repository-url>
cd ivancalas-web

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your email configuration
```

### Configurar Email

El sistema de contacto soporta múltiples opciones:

#### Opción 1: Gmail (Recomendado para desarrollo)

1. Ve a [Google Account Security](https://myaccount.google.com/apppasswords)
2. Genera una "App Password" (requiere 2FA activado)
3. Configura `.env.local`:
```env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-app-password
EMAIL_FROM=tu-email@gmail.com
EMAIL_TO=destinatario@ivancalas.es
SEND_CONFIRMATION_EMAIL=true
```

#### Opción 2: SMTP Personalizado

```env
SMTP_HOST=smtp.ejemplo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario@ejemplo.com
SMTP_PASS=contraseña
EMAIL_FROM=noreply@ivancalas.es
EMAIL_TO=info@ivancalas.es
```

### Desarrollo

```bash
# Inicia el servidor de desarrollo
npm run dev

# Abre http://localhost:3000
```

### Build para Producción

```bash
npm run build
npm run start
```

## 📧 API de Contacto

**Endpoint:** `POST /api/contact`

**Request:**
```json
{
  "name": "Juan García",
  "email": "juan@example.com",
  "phone": "+34123456789",
  "message": "Me gustaría saber más sobre tus servicios..."
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente..."
}
```

**Response (Error):**
```json
{
  "error": "El nombre es requerido"
}
```

## 📝 Blog

### Crear un nuevo post

1. Crea un archivo `.md` en `/public/blog/`:
```markdown
---
title: "Optimización de Velocidad Web"
description: "Técnicas para mejorar el rendimiento"
date: 2026-04-15
category: "SEO Optimización"
tags: ["performance", "seo", "web"]
image: "/blog/velocidad-web.jpg"
---

## Introducción

Tu contenido aquí...
```

2. El post estará automáticamente disponible en `/blog/nombre-del-archivo`

### Características del Blog

- Markdown completo con frontmatter
- Renderizado de headings (H1, H2, H3)
- Listas (ordenadas y desordenadas)
- Links y imágenes
- Generación estática (ISR compatible)

## 🌐 Despliegue en Vercel

### Pasos

1. **Push al repositorio:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Conectar con Vercel:**
   - Ve a [Vercel](https://vercel.com)
   - Importa tu repositorio
   - Configura variables de entorno en el dashboard

3. **Variables de entorno en Vercel:**
   - `EMAIL_USER`
   - `EMAIL_PASS` (o configuración SMTP)
   - `EMAIL_TO`
   - `SEND_CONFIRMATION_EMAIL`

4. **Domain:**
   - Apunta tus DNS a Vercel
   - Configura en el dashboard de Vercel

### Verificación

```bash
# Verifica que todo compila
npm run build

# Verifica errores de linting
npm run lint
```

## 📊 Estructura del Proyecto

```
ivancalas-web/
├── src/
│   ├── app/
│   │   ├── (pages)
│   │   │   ├── page.tsx (Home)
│   │   │   ├── servicios/
│   │   │   ├── sobre-mi/
│   │   │   ├── contacto/
│   │   │   ├── blog/
│   │   │   └── legal/
│   │   ├── api/
│   │   │   └── contact/route.ts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── ContactForm.tsx
│   └── lib/
│       ├── utils.ts
│       └── blog.ts
├── public/
│   ├── blog/
│   └── images/
├── .env.local.example
├── .env.local (ignorado por git)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Personalización

### Colores

Edit `src/app/globals.css`:
```css
:root {
  --background: #0d0d0d;
  --foreground: #ffffff;
  --accent: #FF6B35;
}
```

### Tipografía

Edit `next.config.ts` para cambiar fonts.

### Metadata

Edit `src/app/layout.tsx` para actualizar descripción, keywords, etc.

## 🔍 SEO

- ✅ Metadata completa (title, description, keywords)
- ✅ OpenGraph para redes sociales
- ✅ Sitemap (pendiente)
- ✅ robots.txt (pendiente)
- ✅ JSON-LD structured data (pendiente)
- ✅ Mobile-friendly
- ✅ Fast performance

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Todos los componentes son responsive por defecto.

## ⚡ Performance

- Next.js Image Optimization
- CSS minification
- Code splitting automático
- Static generation donde posible
- ISR para blog posts

## 🐛 Debugging

### Ver logs de la API

```bash
# En desarrollo, los errores aparecen en la consola del servidor
npm run dev

# En el navegador, mira la consola de desarrollador (F12)
```

### Verificar email

Intenta enviar un formulario de contacto desde `/contacto`.

## 📄 Licencia

Privado - Sitio web de Iván Calás

## 👤 Autor

Iván Calás - info@ivancalas.es

---

**Última actualización:** Abril 2026
**Versión:** 1.0.0 (Beta)
