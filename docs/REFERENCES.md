# Technical References & Decisions

## Architecture Decisions

### State Management: Zustand
**Chosen**: Zustand
**Alternatives Considered**: Redux, Context API
**Reasoning**: 
- Used by React-Flow internally
- Simpler than Redux (less boilerplate)
- Better performance than Context for frequent updates
- Excellent TypeScript support

### Package Structure: Monorepo
**Structure**: Yarn workspaces with separate packages
```
packages/
  core/     - Business logic, state management
  ui/       - React components
example/    - Demo application
```
**Reasoning**: 
- Separation of concerns
- Reusable core logic
- Independent versioning
- Better testability

### TypeScript Configuration
**Strict Mode**: Enabled
**Target**: ES2020
**Module System**: ESNext with bundler resolution
**Reasoning**: Modern features, better IDE support, catch errors early

## Technical Resources

### React-Flow Research
- **State Management**: Uses Zustand internally
- **Architecture**: Modular component system
- **Performance**: Selective re-rendering with selectors
- **API Design**: Hook-based for React integration

### n8n Research  
- **State Management**: Zustand + Redis for distributed processing
- **Architecture**: Node-based workflow engine
- **UI Pattern**: Visual drag-and-drop with JSON data flow
- **Enterprise Features**: Queue mode, sub-workflows

### CAD Software Parallels
- **Sub-assemblies** → Sub-workflows/modular components
- **Constraint systems** → Node connection validation
- **Feature trees** → Workflow execution order
- **Material libraries** → Component type libraries
- **Parametric design** → Dynamic node properties

## Development Tools

### Build System Options
- **Rollup**: Library-focused, tree-shaking, smaller bundles
- **Vite**: Development-focused, faster dev server, HMR
- **Decision Pending**: Based on learning preferences

### Testing Strategy
- **Unit Tests**: Jest + Testing Library
- **Integration Tests**: Playwright or Cypress
- **Type Testing**: TypeScript compiler as test runner

### Code Quality
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **Pre-commit**: Husky + lint-staged
- **Version Control**: Conventional commits

## Learning Resources

### TypeScript
- Official TypeScript Handbook
- Type Challenges for practice
- React TypeScript Cheatsheet

### React Patterns
- React docs (new docs with hooks focus)
- Kent C. Dodds blog and courses
- React TypeScript patterns

### State Management
- Zustand documentation
- State management patterns
- Performance optimization techniques

### Visual Editor Concepts
- React-Flow documentation and examples
- D3.js for mathematical concepts
- Canvas vs SVG performance considerations

## Glossary

### Key Terms
- **Node**: Individual component in the workflow
- **Edge**: Connection between nodes
- **Canvas**: Main drawing area
- **Viewport**: Visible area with zoom/pan
- **Handle**: Connection point on a node
- **Store**: Central state management
- **Selector**: Function to extract state slice
- **Middleware**: State management enhancement

### CAD Analogies
- **Assembly** → Workflow
- **Part** → Node
- **Constraint** → Edge/Connection
- **Feature Tree** → Execution Order
- **Configuration** → Node Properties 