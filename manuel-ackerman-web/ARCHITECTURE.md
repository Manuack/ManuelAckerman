# Angular Project Architecture

This document outlines the improved architecture of the Manuel Ackerman Web Angular project.

## 🏗️ **Project Structure**

```
src/
├── app/
│   ├── core/                    # Core application services
│   │   └── services/
│   │       ├── language.service.ts
│   │       └── config.service.ts
│   ├── shared/                  # Shared components and utilities
│   │   ├── components/
│   │   │   └── language-switcher/
│   │   ├── interfaces/
│   │   │   └── texts.interface.ts
│   │   └── constants/
│   │       └── translations.constant.ts
│   ├── footer/                  # Footer component
│   ├── landing/                 # Landing page component
│   ├── app.component.ts         # Root component
│   └── app.config.ts           # Application configuration
├── environments/                 # Environment-specific configs
│   ├── environment.ts           # Development
│   └── environment.prod.ts      # Production
└── assets/                      # Static assets
```

## 🔧 **Core Services**

### **LanguageService**
- **Purpose**: Manages application language state
- **Features**:
  - Automatic browser language detection
  - Language switching with persistence
  - Observable language changes
  - Type-safe language handling

### **ConfigService**
- **Purpose**: Centralized configuration management
- **Features**:
  - Environment-specific configuration
  - External URL management
  - Application metadata
  - Type-safe configuration access

## 🎨 **Shared Components**

### **LanguageSwitcher**
- **Purpose**: UI component for language switching
- **Features**:
  - Visual language selection
  - Active state indication
  - Accessibility support
  - Responsive design

## 📝 **Interfaces & Types**

### **Texts Interface**
```typescript
export interface Texts {
  title: string;
  subtitle: string;
  button: string;
  videoUnsupported?: string;
}
```

### **SupportedLanguage Type**
```typescript
export type SupportedLanguage = 'es' | 'en' | 'pt';
```

## 🌍 **Internationalization (i18n)**

### **Translation Constants**
- Centralized translation management
- Type-safe language keys
- Easy to add new languages
- Consistent text structure

### **Language Detection**
- Automatic browser language detection
- Fallback to English
- Persistent language preference
- Real-time language switching

## ⚙️ **Environment Configuration**

### **Development Environment**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  // ... other dev settings
};
```

### **Production Environment**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.manuelackerman.com',
  // ... other prod settings
};
```

## 🚀 **Benefits of New Architecture**

### **1. Separation of Concerns**
- Business logic separated from presentation
- Services handle data and state management
- Components focus on UI and user interaction

### **2. Reusability**
- Shared interfaces and constants
- Reusable services across components
- Consistent component patterns

### **3. Maintainability**
- Centralized configuration
- Type-safe interfaces
- Clear service responsibilities
- Easy to test and debug

### **4. Scalability**
- Modular service architecture
- Easy to add new features
- Environment-specific configurations
- Extensible language support

### **5. Performance**
- Reactive language switching
- Efficient service subscriptions
- Proper lifecycle management
- Memory leak prevention

## 📋 **Best Practices Implemented**

### **Component Lifecycle**
- Proper `OnInit` and `OnDestroy` implementation
- Subscription management
- Memory leak prevention

### **Service Design**
- Single responsibility principle
- Dependency injection
- Observable patterns
- Error handling

### **Type Safety**
- Strong typing with TypeScript
- Interface definitions
- Type guards for runtime safety

### **Configuration Management**
- Environment-specific settings
- Centralized configuration
- Easy deployment management

## 🔄 **Migration Guide**

### **From Old Architecture**
1. **Remove hardcoded values** from components
2. **Import shared interfaces** instead of local definitions
3. **Use services** for data and configuration
4. **Implement proper lifecycle** hooks
5. **Add type safety** to all components

### **Adding New Features**
1. **Define interfaces** in shared folder
2. **Create services** in core folder
3. **Add constants** to shared constants
4. **Update environment** configurations
5. **Implement components** with proper typing

## 🧪 **Testing Strategy**

### **Unit Tests**
- Service method testing
- Component logic testing
- Interface validation
- Configuration testing

### **Integration Tests**
- Service interaction testing
- Component communication testing
- Language switching flow testing

### **E2E Tests**
- User language preference testing
- Configuration loading testing
- Component rendering testing

## 📚 **Future Enhancements**

### **Planned Improvements**
- [ ] Add more language support
- [ ] Implement caching strategies
- [ ] Add analytics service
- [ ] Create error handling service
- [ ] Add logging service
- [ ] Implement state management (NgRx)

### **Performance Optimizations**
- [ ] Lazy loading for components
- [ ] Service worker implementation
- [ ] Bundle size optimization
- [ ] Image optimization strategies

## 🤝 **Contributing**

### **Code Standards**
- Follow Angular style guide
- Use TypeScript strict mode
- Implement proper error handling
- Add comprehensive documentation
- Write unit tests for new features

### **Architecture Principles**
- Keep components focused and simple
- Use services for business logic
- Implement proper error boundaries
- Follow reactive programming patterns
- Maintain type safety throughout
