# 🚀 Naveen UI

A premium, modern, and high-performance React component library designed for speed and beauty.

[![npm version](https://img.shields.io/npm/v/naveen-ui.svg)](https://www.npmjs.com/package/naveen-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/Naveen9351)

---

## ✨ Why Naveen UI?

Naveen UI is built for developers who want **visually stunning** applications without the configuration headache. 
- 💎 **Premium Design**: Built-in glassmorphism, smooth animations, and curated color palettes.
- ⚡ **Zero-Config**: No Tailwind or complex setups required. Just import and use.
- 🎨 **Theme-Ready**: Fully customizable via global CSS variables.

---

## 📦 Installation

```bash
npm install naveen-ui
# or
yarn add naveen-ui
```

---

## 🚀 Getting Started

1. **Import the global styles** in your entry file (e.g., `App.js` or `main.js`):

```javascript
import 'naveen-ui/dist/index.css';
```

2. **Use any component**:

```javascript
import { Button, Alert } from 'naveen-ui';

function App() {
  return (
    <div className="p-4">
      <Alert variant="success" title="Success">
        Naveen UI is ready to use!
      </Alert>
      <Button variant="primary">Start Building</Button>
    </div>
  );
}
```

---

## � Component Showroom

Find detailed information on every component below.

### � Core Components

#### `Button`
The primary interaction element. Supports multiple variants and sizes.
- **Variants**: `primary`, `secondary`, `outline`, `ghost`, `link`
- **Sizes**: `sm`, `md`, `lg`
- **Usage**:
```javascript
<Button variant="outline" size="lg" onClick={() => {}}>
  Get Started
</Button>
```

#### `Cards`
Modern containers for displaying various types of content.
- **Types**: `ProfileCard`, `ProductCard`, `BlogCard`, `PricingCard`, `TeamCard`, `FeatureCard`, and more.
- **Usage**:
```javascript
<ProductCard 
  title="Modern Laptop" 
  price="$999" 
  image="laptop.jpg" 
/>
```

---

### 🌀 Loaders & Feedback

#### `Loaders`
Beautiful animations to keep users engaged during async operations.
- `PulseLoader`: A soft growing/shrinking circle.
- `SpinnerLoader`: Classic rotating border spinner.
- `DotsLoader`: Bouncing triple dots.
- `WaveLoader`: Oscillating vertical bars.
- `Skeleton`: Content placeholder for loading states.
- **Usage**:
```javascript
<PulseLoader color="var(--nv-primary)" />
<Skeleton width="100%" height="20px" />
```

#### `Alert` & `Badge` & `Progress`
- `Alert`: Important messages with variants: `success`, `info`, `warning`, `danger`.
- `Badge`: Small status indicators (e.g., "New", "Sale").
- `Progress`: Customizable progress tracking.
- **Usage**:
```javascript
<Alert title="Success" variant="success">Everything is looking good!</Alert>
<Badge variant="danger">Sale -50%</Badge>
<Progress value={75} showValue />
```

---

### 📝 Forms

#### `Input`, `Select`, `Switch`
Clean, accessible, and theme-aware form controls.
- `Input`: Standard text/password inputs with validation support.
- `Select`: Custom-styled dropdown menu.
- `Switch`: Beautiful toggle switch.
- **Usage**:
```javascript
<Input label="Email" error="Invalid email address" />
<Switch label="Dark Mode" />
<Select label="Country" options={[{label: 'India', value: 'IN'}]} />
```

---

### 🖼️ Overlays

#### `Modal` & `Drawer`
- `Modal`: High-performance dialog with background blurring.
- `Drawer`: Slide-in panels (left/right) for menus or settings.
- **Usage**:
```javascript
<Modal isOpen={true} title="Confirm" onClose={() => {}}>
  Are you sure you want to proceed?
</Modal>
```

---

### 📊 Data Display

#### `Avatar`, `Accordion`, `Tooltip`
- `Avatar`: Displays user images or initials with various sizes.
- `Accordion`: Vertically collapsing sections for FAQs or tiered info.
- `Tooltip`: Small hover prompts for added context.
- **Usage**:
```javascript
<Avatar name="Naveen" src="profile.jpg" />
<Accordion items={[{title: 'Question', content: 'Answer'}]} />
<Tooltip text="Copy to clipboard">📋</Tooltip>
```

---

### 🗺️ Navigation

#### `Tabs`, `Pagination`, `Breadcrumbs`
- `Tabs`: Switch between content sections seamlessly.
- `Pagination`: Modern controls for list navigation.
- `Breadcrumbs`: Intuitive path tracking for complex apps.

---

### 🏷️ Miscellaneous

#### `Divider`, `Spacer`, `Tag`
- `Divider`: Horizontal or vertical lines to separate content.
- `Spacer`: Semantic spacing between elements.
- `Tag`: Color-coded labels with optional close buttons.

---

## 🎨 Theming

All components use a centralized token system. You can easily override these by defining them in your own CSS:

```css
:root {
  --nv-primary: #ef4444; /* Standard Tailwind Red-500 */
  --nv-radius: 0px;    /* Make everything sharp */
}
```

---

## 🤝 Contributing

We welcome contributions! Please follow our [contribution guidelines](https://github.com/Naveen9351/naveen-ui/blob/main/CONTRIBUTING.md).

## 📄 License

MIT © [Naveen](https://github.com/Naveen9351)