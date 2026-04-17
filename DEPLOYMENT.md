# Guía de Deployment - Iván Calás Website

Este documento explica cómo desplegar el sitio en Vercel.

## Requisitos Previos

1. **GitHub Repository**: El código debe estar en un repositorio de GitHub
2. **Vercel Account**: Crear cuenta en [vercel.com](https://vercel.com)
3. **Domain**: Dominio ya comprado (ivancalas.es)
4. **Email Configuration**: Variables de entorno para envío de emails

## Pasos de Deployment

### 1. Preparar Repositorio Git

```bash
cd "c:\Contenido\Personal\web personal\ivancalas-web"

# Inicializar git si no existe
git init

# Agregar archivos
git add .

# Configurar usuario git
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Commit inicial
git commit -m "Initial commit: Ivan Calas website"

# Crear rama main
git branch -M main

# Agregar remote (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/ivancalas-web.git

# Push a GitHub
git push -u origin main
```

### 2. Conectar con Vercel

#### Opción A: Dashboard (Recomendado)

1. Ve a [vercel.com](https://vercel.com) y log in
2. Click en "Add New..." > "Project"
3. Importa tu repositorio de GitHub
4. Configura:
   - **Project Name**: `ivancalas-web` (o tu preferencia)
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Environment Variables**: Agrega las siguientes:

```
EMAIL_USER = tu-email@gmail.com
EMAIL_PASS = tu-app-password
EMAIL_FROM = noreply@ivancalas.es
EMAIL_TO = info@ivancalas.es
SEND_CONFIRMATION_EMAIL = true
NODE_ENV = production
```

5. Click "Deploy"

#### Opción B: CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Configura variables de entorno cuando te lo pida
```

### 3. Configurar Dominio

#### En Dashboard de Vercel:

1. Ve a **Settings** > **Domains**
2. Click "Add" o ingresa `ivancalas.es`
3. Vercel te mostrará los registros DNS necesarios

#### En tu proveedor de dominio (Namecheap, GoDaddy, etc.):

1. Accede al panel de control de DNS
2. Cambia los nameservers o agrega registros A/CNAME:

**Option 1: Nameservers (Recomendado)**
```
NS1.VERCEL.COM
NS2.VERCEL.COM
```

**Option 2: CNAME (si no puedes cambiar nameservers)**
```
CNAME: ivancalas.es -> ivancalas-web.vercel.app
```

3. Espera 24-48 horas para propagación de DNS

### 4. Configurar Email

#### Gmail (Recomendado)

1. Habilita **2-Step Verification** en [myaccount.google.com](https://myaccount.google.com)
2. Ve a **Security** > **App Passwords**
3. Selecciona:
   - App: `Mail`
   - Device: `Windows Computer` (u otro)
4. Google generará una contraseña de 16 caracteres
5. Copia esa contraseña a tu archivo `.env.local` (en desarrollo):
```env
EMAIL_PASS=xxxx xxxx xxxx xxxx
```
6. En Vercel, agrega también en **Settings** > **Environment Variables**

#### Alternativa: SendGrid (para producción)

1. Crea cuenta en [sendgrid.com](https://sendgrid.com)
2. Crea API key
3. Configura en Vercel:
```env
SENDGRID_API_KEY = tu-api-key
EMAIL_FROM = noreply@ivancalas.es
EMAIL_TO = info@ivancalas.es
```

### 5. Verificar Deployment

```bash
# Ver logs de deployment
vercel logs --tail

# Ver URL del sitio
vercel --prod

# Visita https://ivancalas.es
```

## Post-Deployment

### Verificaciones

- [ ] Sitio carga en https://ivancalas.es
- [ ] Formulario de contacto funciona
- [ ] Email se envía correctamente
- [ ] Blog posts se cargan
- [ ] Links de navegación funcionan
- [ ] SEO basics: robots.txt, sitemap.xml

### Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Ingresa: `https://ivancalas.es`
4. Verifica propiedad (opciones: DNS, HTML file, meta tag)
5. Envía sitemap: `https://ivancalas.es/sitemap.xml`
6. Solicita indexación de URLs

### Google Analytics (Opcional)

1. Crea propiedad en [Google Analytics](https://analytics.google.com)
2. Copia el ID de seguimiento (GA4)
3. Agrega a `.env.local` y vercel:
```env
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```
4. Implementa script en layout.tsx

## Actualizar Código

Para actualizar el sitio después del deployment:

```bash
# Realizar cambios localmente
# Guardar archivos

# Commit y push
git add .
git commit -m "Update: descripción del cambio"
git push origin main

# Vercel redeploya automáticamente
# Monitorea en vercel.com > Deployments
```

## Troubleshooting

### Build falla con Node version

- Vercel automáticamente usa Node 20+ 
- Si ves errores, verifica `vercel.json` tiene `"nodeVersion": "20.x"`

### Email no se envía

1. Verifica credenciales en Vercel environment variables
2. Revisa logs: `vercel logs --tail`
3. Prueba con Gmail app password (16 caracteres, sin espacios)
4. Verifica firewall/ISP no bloquea puerto SMTP

### Dominio apunta a Vercel pero sitio no carga

- Espera 24-48 horas para propagación DNS
- Usa `dig ivancalas.es` o `nslookup` para verificar DNS
- Verifica en Vercel dashboard que el dominio está conectado

### Formulario no funciona

1. Verifica endpoint `/api/contact` existe
2. Abre Developer Tools (F12) > Network
3. Intenta enviar formulario
4. Verifica respuesta del servidor
5. Revisa logs de Vercel: `vercel logs --tail`

## Monitoring

### Mantener sitio en línea

Vercel ofrece uptimestorage automático. Para monitoreo extra:

1. [Uptime Robot](https://uptimerobot.com) - Alertas si sitio cae
2. [Sentry](https://sentry.io) - Error tracking
3. [Google Analytics](https://analytics.google.com) - Visitor stats

## Rollback

Si necesitas volver a una versión anterior:

1. Dashboard Vercel > Deployments
2. Encuentra deployment anterior
3. Click en los 3 puntos > "Promote to Production"
4. Confirmasi

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- Email: info@ivancalas.es
