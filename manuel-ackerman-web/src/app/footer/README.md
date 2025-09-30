# Footer Component

A standalone, reusable footer component for Angular applications.

## Features

- **Standalone Component**: Can be imported and used in any Angular application
- **Multi-language Support**: Automatically detects browser language (ES, EN, PT)
- **Dynamic Year**: Automatically updates the copyright year
- **Flexible Styling**: Multiple positioning and theme options
- **Responsive**: Works on all device sizes

## Usage

### Basic Import

```typescript
import { FooterComponent } from './footer/footer.component';

@Component({
  // ... other component config
  imports: [FooterComponent],
  // ...
})
```

### Basic Usage

```html
<!-- Default footer (absolute positioning, good for video backgrounds) -->
<app-footer></app-footer>
```

### Styling Variants

The footer component supports different styling variants through CSS classes:

#### Default Styling
```html
<app-footer></app-footer>
```
- Absolute positioning
- White text with shadow
- Good for video backgrounds or overlays

#### Relative Positioning
```html
<div class="relative-container">
  <app-footer></app-footer>
</div>
```
```scss
.relative-container app-footer {
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  margin-top: 2rem;
  text-align: center;
}
```

#### Light Theme
```html
<div class="light-container">
  <app-footer></app-footer>
</div>
```
```scss
.light-container app-footer {
  color: #666 !important;
  text-shadow: none !important;
  background: rgba(0, 0, 0, 0.1) !important;
  padding: 0.5rem 1rem !important;
}
```

#### Dark Theme
```html
<div class="dark-container">
  <app-footer></app-footer>
</div>
```
```scss
.dark-container app-footer {
  color: #333 !important;
  text-shadow: none !important;
  background: rgba(255, 255, 255, 0.9) !important;
  padding: 0.5rem 1rem !important;
}
```

## Supported Languages

- **Spanish (ES)**: "© {year} Manuel Ackerman. Todos los derechos reservados."
- **English (EN)**: "© {year} Manuel Ackerman. All rights reserved."
- **Portuguese (PT)**: "© {year} Manuel Ackerman. Todos os direitos reservados."

## Customization

### Adding New Languages

To add support for new languages, modify the `FOOTER_TRANSLATIONS` object in `footer.component.ts`:

```typescript
const FOOTER_TRANSLATIONS: Record<string, FooterTexts> = {
  // ... existing languages
  fr: {
    footer: '© {year} Manuel Ackerman. Tous droits réservés.'
  }
};
```

### Custom Footer Text

To use custom footer text, you can extend the component or create a new interface:

```typescript
interface CustomFooterTexts {
  footer: string;
  customField?: string;
}
```

## Examples

See `demo-page.component.ts` for examples of different footer usage patterns.

## Dependencies

- Angular Common Module
- No external dependencies required
