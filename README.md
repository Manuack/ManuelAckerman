# Manuel Ackerman - Landing Page

##Branch Status
## Main

![Build - Test - Main](https://github.com/Manuack/ManuelAckerman/actions/workflows/build-test.yml/badge.svg?branch=main&event=push)
![Code Analysis - Main](https://github.com/Manuack/ManuelAckerman/actions/workflows/code-analysis.yml/badge.svg?branch=main&event=push)

## Develop

![Build - Test - Develop](https://github.com/Manuack/ManuelAckerman/actions/workflows/build-test.yml/badge.svg?branch=develop&event=push)
![Code Analysis - Develop](https://github.com/Manuack/ManuelAckerman/actions/workflows/code-analysis.yml/badge.svg?branch=develop&event=push)


##Descripción del repo:
Una landing page moderna y extensible construida con Angular 17, diseñada como página "coming soon" con componentes reutilizables y arquitectura escalable.

## 🚀 Características

- **Diseño Moderno**: Landing page con video de fondo, efectos de partículas y animaciones suaves
- **Totalmente Responsive**: Adaptable a todos los dispositivos
- **Arquitectura Escalable**: Componentes reutilizables y módulos lazy-loaded
- **Configuración Dinámica**: Servicios para gestionar configuraciones y temas
- **Optimizado para SEO**: Meta tags y Open Graph configurables
- **PWA Ready**: Preparado para Progressive Web App
- **TypeScript**: Tipado fuerte y mejor experiencia de desarrollo

## 🛠️ Tecnologías

- Angular 17
- TypeScript
- SCSS
- RxJS
- Angular Animations
- Angular Router

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/manuel-ackerman-web.git
cd manuel-ackerman-web

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
ng serve
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/           # Componentes de la aplicación
│   │   ├── landing/         # Página principal
│   │   ├── layout/          # Layout base
│   │   └── shared/          # Componentes reutilizables
│   ├── modules/             # Módulos lazy-loaded
│   │   ├── gallery/         # Galería de imágenes
│   │   ├── stories/         # Historias
│   │   └── about/           # Acerca de
│   ├── services/            # Servicios de la aplicación
│   └── ...
├── assets/                  # Recursos estáticos
├── styles/                  # Estilos globales
└── ...
```

## 🎨 Componentes

### LandingComponent
Página principal con título, subtítulo y botón hacia Instagram.

### VideoBackgroundComponent
Reproduce video de fondo con fallback a gradiente.

### ParticlesComponent
Sistema de partículas animadas configurable.

### InstagramButtonComponent
Botón interactivo con gradiente animado para Instagram.

## ⚙️ Servicios

### ConfigurationService
Gestiona configuraciones de la aplicación (títulos, URLs, tema, etc.).

### AnimationService
Proporciona animaciones reutilizables para los componentes.

### ThemeService
Maneja el cambio entre temas claro y oscuro.

### AnalyticsService
Integración con servicios de analytics (Google Analytics, etc.).

### SeoService
Gestión de meta tags y optimización SEO.

## 🚀 Deployment

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/manuel-ackerman-web/
```

### Netlify
```bash
ng build --prod
# Subir carpeta dist/manuel-ackerman-web
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
ng build --prod
firebase deploy
```

## 🔧 Configuración

Edita `src/environments/environment.ts` para configurar:

- URL de Instagram
- URL del video de fondo
- IDs de Analytics
- Otras configuraciones

## 📱 PWA

Para habilitar PWA:

```bash
ng add @angular/pwa
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.