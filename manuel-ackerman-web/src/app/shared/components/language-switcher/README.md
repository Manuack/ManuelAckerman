# Language Switcher Component

A standalone, compact language switcher component that automatically detects browser language and provides flag-based language selection.

## 🌍 **Features**

- **Standalone Component**: Can be imported and used in any Angular application
- **Automatic Browser Detection**: Detects user's browser language preference
- **Flag-Based UI**: Uses country flags for intuitive language selection
- **Fixed Positioning**: Automatically positioned in top-right corner
- **Responsive Design**: Adapts to different screen sizes
- **Browser Language Indicator**: Shows which language is the user's browser default

## 📱 **Usage**

### **Basic Import**
```typescript
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';

@Component({
  // ... other component config
  imports: [LanguageSwitcherComponent],
  // ...
})
```

### **Basic Usage**
```html
<!-- Component automatically positions itself in top-right corner -->
<app-language-switcher></app-language-switcher>
```

### **Global Usage (Recommended)**
Add to your main app component to appear on all pages:
```typescript
// app.component.ts
@Component({
  imports: [LanguageSwitcherComponent],
  template: `
    <app-language-switcher></app-language-switcher>
    <router-outlet></router-outlet>
  `
})
```

## 🎨 **Design Features**

### **Visual Elements**
- **🇺🇸 US Flag**: English language
- **🇪🇸 Spanish Flag**: Spanish language  
- **🇵🇹 Portuguese Flag**: Portuguese language
- **🌐 Globe Icon**: Indicates browser default language
- **Circular Buttons**: Modern, compact design
- **Glassmorphism Effect**: Backdrop blur with transparency

### **Positioning**
- **Fixed Position**: Stays in top-right corner during scroll
- **High Z-Index**: Appears above other content
- **Responsive**: Adjusts size and position for mobile devices

### **Interactive States**
- **Hover**: Scale effect and enhanced border
- **Active**: Glowing effect for current language
- **Browser Default**: Special border styling for user's browser language

## 🔧 **Configuration**

### **Supported Languages**
```typescript
export type SupportedLanguage = 'es' | 'en' | 'pt';
```

### **Language Mappings**
```typescript
const flags = { 
  es: '🇪🇸',  // Spanish
  en: '🇺🇸',  // English  
  pt: '🇵🇹'   // Portuguese
};
```

### **Adding New Languages**
1. Update `SupportedLanguage` type in `texts.interface.ts`
2. Add flag emoji to `getFlag()` method
3. Add language name to `getLanguageName()` method
4. Update translation constants

## 📱 **Responsive Behavior**

### **Desktop (Default)**
- Position: `top: 1rem, right: 1rem`
- Button size: `2.5rem × 2.5rem`
- Flag size: `1.25rem`

### **Mobile (≤768px)**
- Position: `top: 0.5rem, right: 0.5rem`
- Button size: `2rem × 2rem`
- Flag size: `1rem`

## 🎯 **Integration with Language Service**

The component automatically integrates with the `LanguageService`:

- **Language Detection**: Automatically detects browser language
- **State Management**: Subscribes to language changes
- **Persistence**: Remembers user's language choice
- **Browser Reset**: Can reset to browser default

## 🚀 **Benefits**

1. **User Experience**: Respects browser language preference
2. **Accessibility**: Clear visual indicators and tooltips
3. **Performance**: Lightweight, standalone component
4. **Maintainability**: Easy to modify and extend
5. **Consistency**: Same behavior across all pages

## 🔍 **Browser Language Detection**

The component works with the `LanguageService` to:

1. **Detect Browser Language**: Uses `navigator.language`
2. **Priority Order**: 
   - User's explicit choice (if manually switched)
   - Browser language (if supported)
   - English fallback
3. **Automatic Updates**: All components update when language changes

## 📝 **Example Implementation**

```typescript
// In any component that needs language switching
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [LanguageSwitcherComponent],
  template: `
    <div class="page-content">
      <h1>{{ texts.title }}</h1>
      <p>{{ texts.subtitle }}</p>
    </div>
    <!-- Language switcher appears in top-right corner -->
    <app-language-switcher></app-language-switcher>
  `
})
export class ExampleComponent {
  // Your component logic here
}
```

## 🎨 **Customization**

### **Styling Overrides**
```scss
// Override default positioning
app-language-switcher {
  position: absolute !important;
  top: 2rem !important;
  right: 2rem !important;
}

// Custom button styles
app-language-switcher .lang-btn {
  background: rgba(0, 0, 0, 0.8) !important;
  border-color: #fff !important;
}
```

### **Theme Integration**
The component automatically adapts to your app's theme through CSS custom properties and backdrop filters.

## 🔧 **Dependencies**

- Angular Common Module
- LanguageService (from core services)
- SupportedLanguage type (from shared interfaces)
- No external dependencies required
