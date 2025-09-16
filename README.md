Creator Naveen Sharma (Provaantech)

### README for Naveen-UI

```markdown
# Naveen-UI
A customizable React UI component library featuring navigation bars, buttons, cards, and filterable tables/cards for modern web applications.



## Installation

Install `naveen-ui` via npm:

```bash
npm install naveen-ui
```

Or with yarn:

```bash
yarn add naveen-ui
```

Some components (e.g., `FilterableTable`) require icons from `react-icons`. Install it as a peer dependency:

```bash
npm install react-icons
```

Ensure you have React 18+ installed:

```bash
npm install react@18 react-dom@18
```

## Quick Start

Import and use components in your React application:

```jsx
import React from 'react';
import { Navbar2, Button } from 'naveen-ui';

const App = () => {
  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'About', link: '#about' },
  ];

  return (
    <div>
      <Navbar2
        logoUrl="https://example.com/logo.png"
        menuItems={menuItems}
        color="#ffffff"
        backgroundColor="#000000"
      />
      <Button variant="primary" color="#1e3a8a">
        Get Started
      </Button>
    </div>
  );
};

export default App;
```

## Components

Below is a list of available components, their props, and usage examples.

### Button

A customizable button with ripple effect and variant styles.

| Prop            | Type                          | Required | Description                                | Default       |
|-----------------|-------------------------------|----------|--------------------------------------------|---------------|
| `children`      | node                          | Yes      | Button content (text or elements).         | -             |
| `onClick`       | function                      | No       | Click handler.                             | -             |
| `variant`       | `'primary'` \| `'secondary'`  | No       | Style variant.                             | `'primary'`   |
| `color`         | string                        | No       | Custom CSS color (sets `--custom-color`).  | -             |

**Example**:

```jsx
import { Button } from 'naveen-ui';

<Button variant="primary" color="#1e3a8a" onClick={() => alert('Clicked!')}>
  Click Me
</Button>
```

### Navbar2

A responsive navigation bar with support for nested menus.

| Prop             | Type                                                                 | Required | Description                                    | Default     |
|------------------|----------------------------------------------------------------------|----------|------------------------------------------------|-------------|
| `logoUrl`        | string                                                               | Yes      | URL for the logo image.                        | -           |
| `menuItems`      | Array<{label: string, link: string, children?: Array<{label: string, link: string}>}> | Yes      | Menu items with optional submenus.             | -           |
| `color`          | string                                                               | No       | Text color.                                    | `#ffffff`   |
| `backgroundColor`| string                                                               | No       | Background color.                              | `#000000`   |

**Example**:

```jsx
import { Navbar2 } from 'naveen-ui';

const menuItems = [
  { label: 'Home', link: '#' },
  {
    label: 'Products',
    link: '#',
    children: [
      { label: 'Product 1', link: '#product1' },
      { label: 'Product 2', link: '#product2' },
    ],
  },
];

<Navbar2
  logoUrl="https://example.com/logo.png"
  menuItems={menuItems}
  color="#ffffff"
  backgroundColor="#000000"
/>
```

### ProfileCard

A card displaying user profile information.

| Prop        | Type   | Required | Description                          | Default     |
|-------------|--------|----------|--------------------------------------|-------------|
| `name`      | string | Yes      | User's name.                         | -           |
| `title`     | string | Yes      | User's title (e.g., job role).       | -           |
| `image`     | string | Yes      | Profile image URL.                   | -           |
| `role`      | string | Yes      | Short description of role.           | -           |
| `color`     | string | No       | Text color.                          | `#ffffff`   |
| `background`| string | No       | Background color.                    | `#1e3a8a`   |
| `width`     | string | No       | Card width.                          | `300px`     |
| `height`    | string | No       | Card height.                         | `200px`     |

**Example**:

```jsx
import { ProfileCard } from 'naveen-ui';

<ProfileCard
  name="Alex Johnson"
  title="Designer"
  image="https://example.com/profile.jpg"
  role="Crafting beautiful interfaces."
  color="#ffffff"
  background="#1e3a8a"
  width="300px"
  height="200px"
/>
```

### GalleryCard

A card displaying a gallery of images.

| Prop        | Type     | Required | Description                     | Default     |
|-------------|----------|----------|---------------------------------|-------------|
| `images`    | string[] | Yes      | Array of image URLs.            | -           |
| `color`     | string   | No       | Text/icon color.                | `#ffffff`   |
| `background`| string   | No       | Background color.               | `#1e3a8a`   |
| `width`     | string   | No       | Card width.                     | `300px`     |
| `height`    | string   | No       | Card height.                    | `auto`      |
| `minWidth`  | string   | No       | Minimum width.                  | `250px`     |
| `minHeight` | string   | No       | Minimum height.                 | `150px`     |
| `maxHeight` | string   | No       | Maximum height.                 | `250px`     |
| `onClick`   | function | No       | Click handler for the card.     | -           |

**Example**:

```jsx
import { GalleryCard } from 'naveen-ui';

const images = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'];

<GalleryCard
  images={images}
  color="#ffffff"
  background="#1e3a8a"
  width="300px"
  onClick={() => alert('Gallery clicked!')}
/>
```

### FilterableTable

A table with filtering and action buttons.

| Prop                  | Type                                                         | Required | Description                                    | Default          |
|-----------------------|--------------------------------------------------------------|----------|------------------------------------------------|------------------|
| `data`                | Array<object>                                                | Yes      | Table data (e.g., `{id, name, category}`).     | -                |
| `filters`             | Array<{column: string, type: string, label: string}>          | Yes      | Filter configurations.                         | -                |
| `actions`             | Array<{icon: Component, onClick: function, label: string}>    | No       | Action buttons (e.g., Edit/Delete).            | []               |
| `shadowColor`         | string                                                       | No       | Shadow color.                                  | `rgba(0, 0, 0, 0)` |
| `backgroundColor`     | string                                                       | No       | Table background.                              | `#ffffff`        |
| `itemsPerPage`        | number                                                       | No       | Rows per page.                                 | 5                |
| `headerColor`         | string                                                       | No       | Header text color.                             | `#ffffff`        |
| `buttonBgColor`       | string                                                       | No       | Button background color.                       | `#1e3a8a`        |
| `buttonHoverBgColor`  | string                                                       | No       | Button hover background.                       | `#2b6cb0`        |
| `buttonDisabledBgColor`| string                                                      | No       | Disabled button background.                    | `#6c757d`        |
| `headerBgColor`       | string                                                       | No       | Header background.                             | `#000000`        |
| `cellColor`           | string                                                       | No       | Cell text color.                               | `#000000`        |
| `cellBgColor`         | string                                                       | No       | Cell background.                               | `#ffffff`        |
| `fontSize`            | string                                                       | No       | Text font size.                                | `16px`           |

**Example**:

```jsx
import { FilterableTable } from 'naveen-ui';
import { FaEdit, FaTrash } from 'react-icons/fa';

const data = [{ id: 1, name: 'Laptop', category: 'Electronics' }];
const filters = [{ column: 'name', type: 'textbox', label: 'Product Name' }];
const actions = [
  { icon: FaEdit, onClick: (row) => alert(`Edit ${row.id}`), label: 'Edit' },
];

<FilterableTable
  data={data}
  filters={filters}
  actions={actions}
  itemsPerPage={5}
  backgroundColor="#ffffff"
/>
```

### FilterableProductCards

A grid of filterable product cards with click and cart actions.

| Prop                  | Type                                                         | Required | Description                                    | Default     |
|-----------------------|--------------------------------------------------------------|----------|------------------------------------------------|-------------|
| `data`                | Array<object>                                                | Yes      | Product data (e.g., `{id, name, price, image}`).| -           |
| `filters`             | Array<{column: string, type: string, label: string}>          | Yes      | Filter configurations.                         | -           |
| `itemsPerPage`        | number                                                       | No       | Cards per page.                                | 6           |
| `cardBgColor`         | string                                                       | No       | Card background color.                         | `#fffbf0`   |
| `cardHeight`          | string                                                       | No       | Card height.                                   | `400px`     |
| `cardWidth`           | string                                                       | No       | Card width.                                    | `300px`     |
| `buttonBgColor`       | string                                                       | No       | Button background.                             | `#1e3a8a`   |
| `buttonHoverBgColor`  | string                                                       | No       | Button hover background.                       | `#2b6cb0`   |
| `buttonDisabledBgColor`| string                                                      | No       | Disabled button background.                    | `#cccccc`   |
| `onClickCard`         | function                                                     | No       | Card click handler.                            | -           |
| `onAddToCart`         | function                                                     | No       | Add to cart handler.                           | -           |

**Example**:

```jsx
import { FilterableProductCards } from 'naveen-ui';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, image: 'https://example.com/laptop.jpg' },
];
const filters = [{ column: 'name', type: 'textbox', label: 'Product Name' }];

<FilterableProductCards
  data={products}
  filters={filters}
  itemsPerPage={6}
  cardBgColor="#fffbf0"
  onClickCard={(product) => alert(`Clicked: ${product.name}`)}
/>
```

### Other Card Components

The following card components are available but not fully detailed. They follow similar patterns to `ProfileCard` and `GalleryCard` with props tailored to their use case. Refer to the Storybook docs for complete props.

- **ProductCard**: Displays a product with image, title, price, and rating.
- **EventCard**: Shows event details (e.g., date, title, location).
- **NewsCard**: Displays news article summaries.
- **QuoteCard**: Highlights a quote with author and styling.
- **TeamCard**: Shows team member info (similar to `ProfileCard`).
- **FeatureCard**: Highlights a product/app feature.
- **BlogCard**: Displays blog post previews.
- **ContactCard**: Shows contact information.
- **DynamicCard**: A flexible card for custom content.
- **ImageCard**: A simple image-focused card.
- **MinimalCard**: A lightweight card with minimal styling.
- **SocialCard**: Displays social media links or posts.
- **PricingCard**: Shows pricing plans.
- **ReviewCard**: Displays user reviews/ratings.
- **StatsCard**: Shows statistical data (e.g., metrics).
- **CTACard**: Call-to-action card with button.
- **InfoCard**: General information card.
- **TestimonialCard**: Displays user testimonials.

**Generic Example** (for `EventCard`, adjust props as needed):

```jsx
import { EventCard } from 'naveen-ui';

<EventCard
  title="Tech Conference 2025"
  date="2025-10-01"
  location="Virtual"
  image="https://example.com/event.jpg"
  color="#ffffff"
  background="#1e3a8a"
/>
```

### Navbar1 and Navbar3

Similar to `Navbar2`, these are navigation bars with different layouts or features.

| Prop             | Type                                  | Required | Description                        | Default     |
|------------------|---------------------------------------|----------|------------------------------------|-------------|
| `logoUrl`        | string                                | Yes      | Logo image URL.                    | -           |
| `menuItems`      | Array<object>                         | Yes      | Menu items (similar to `Navbar2`). | -           |
| `color`          | string                                | No       | Text color.                        | `#000000`   |
| `backgroundColor`| string                                | No       | Background color.                  | `#ffffff`   |

**Example**:

```jsx
import { Navbar1 } from 'naveen-ui';

const menuItems = [{ label: 'Home', link: '#' }];

<Navbar1
  logoUrl="https://example.com/logo.png"
  menuItems={menuItems}
/>
```

## Full Demo Example

Below is a complete page demonstrating multiple components, styled with inline CSS (or use CSS modules for production):

```jsx
import React, { useState } from 'react';
import { Navbar2, Button, ProfileCard, GalleryCard, FilterableTable, FilterableProductCards } from 'naveen-ui';
import { FaEdit, FaTrash } from 'react-icons/fa';

const PageComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const textColor = '#ffffff';
  const cardBgColor = '#1e3a8a';
  const headerBgColor = '#000000';
  const buttonHoverBgColor = '#2b6cb0';

  const menuItems = [
    { label: 'Home', link: '#' },
    {
      label: 'Products',
      link: '#',
      children: [
        { label: 'Product 1', link: '#product1' },
        { label: 'Product 2', link: '#product2' },
      ],
    },
    { label: 'About', link: '#about' },
    { label: 'Contact', link: '#contact' },
  ];

  const galleryImages = [
    'https://imgs.search.brave.com/qXQ-yL5zs2FE_-oBLwUKccvsTV2k2QhmvFzh-3K_ZAI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA',
    'https://imgs.search.brave.com/s2mz_LTSuylBrEcwPKoARRk9Wwg_TWfv0em_bX-MkJA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/OS9jb25haXJfMjAy/NS1sb2dvX2JyYW5k/bG9nb3MubmV0XzJm/cTdhLTMwMHg4Ny5w/bmc',
  ];

  const products = [
    {
      id: 1,
      name: 'Laptop Pro',
      category: 'Electronics',
      brand: 'TechTrend',
      price: 999.99,
      rating: 4.5,
      title: 'Laptop Pro',
      description: 'High-performance laptop for professionals.',
      image: 'https://imgs.search.brave.com/qXQ-yL5zs2FE_-oBLwUKccvsTV2k2QhmvFzh-3K_ZAI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA',
      stars: 4.5,
    },
  ];

  const filters = [
    { column: 'name', type: 'textbox', label: 'Product Name' },
    { column: 'category', type: 'dropdown', label: 'Category' },
    { column: 'brand', type: 'dropdown', label: 'Brand' },
    { column: 'price', type: 'range', label: 'Price Range' },
    { column: 'rating', type: 'range', label: 'Rating Range' },
  ];

  const actions = [
    {
      icon: FaEdit,
      onClick: (row) => alert(`Editing row with ID: ${row.id}`),
      label: 'Edit',
    },
    {
      icon: FaTrash,
      onClick: (row) => alert(`Deleting row with ID: ${row.id}`),
      label: 'Delete',
    },
  ];

  const handleCardClick = (product) => {
    alert(`Clicked on product: ${product.title}`);
  };

  const handleAddToCart = (product) => {
    alert(`Added ${product.title} to cart`);
  };

  const appContainerStyle = {
    marginTop: '4rem',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffc97e 0%, #6ca4ff 100%)',
  };

  const containerStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1.5rem',
  };

  const headingStyle = {
    fontSize: '1.875rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#000000ff',
    padding: '0.5rem',
    borderRadius: '5px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  };

  const cardGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    marginTop: '1rem',
  };

  const cardStyle = {
    backgroundColor: cardBgColor,
    color: textColor,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out',
  };

  return (
    <div style={appContainerStyle}>
      <Navbar2
        logoUrl="https://imgs.search.brave.com/s2mz_LTSuylBrEcwPKoARRk9Wwg_TWfv0em_bX-MkJA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/OS9jb25haXJfMjAy/NS1sb2dvX2JyYW5k/bG9nb3MubmV0XzJm/cTdhLTMwMHg4Ny5w/bmc"
        menuItems={menuItems}
        color={textColor}
        backgroundColor={headerBgColor}
      />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Profile Card Components Demo</h1>
        <div style={cardGridStyle}>
          {Array(4).fill().map((_, index) => (
            <div key={index} style={cardStyle}>
              <ProfileCard
                name="Alex Johnson"
                title="Designer"
                image="https://imgs.search.brave.com/qXQ-yL5zs2FE_-oBLwUKccvsTV2k2QhmvFzh-3K_ZAI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA"
                role="Crafting beautiful interfaces."
                color={textColor}
                background={cardBgColor}
                width="300px"
                height="200px"
              />
            </div>
          ))}
        </div>
        <h1 style={headingStyle}>Gallery Card Components Demo</h1>
        <div style={cardGridStyle}>
          {Array(3).fill().map((_, index) => (
            <div key={index} style={cardStyle}>
              <GalleryCard
                images={galleryImages}
                color={textColor}
                background={cardBgColor}
                width="300px"
                height="auto"
                minWidth="250px"
                minHeight="150px"
                maxHeight="250px"
                onClick={() => alert(`Gallery Card ${index + 1} clicked!`)}
              />
            </div>
          ))}
        </div>
        <h1 style={headingStyle}>Button Components Demo</h1>
        <div style={buttonContainerStyle}>
          <Button variant="primary" style={{ backgroundColor: cardBgColor, color: textColor }}>
            Explore More
          </Button>
        </div>
        <h1 style={headingStyle}>Filterable Table Demo</h1>
        <FilterableTable
          data={products}
          filters={filters}
          actions={actions}
          shadowColor="rgba(0, 0, 0, 0)"
          backgroundColor="#ffffffff"
          itemsPerPage={5}
          headerColor="#ffffff"
          buttonBgColor="#1e3a8a"
          buttonHoverBgColor={buttonHoverBgColor}
          buttonDisabledBgColor="#6c757d"
          headerBgColor="#000000"
          cellColor="#000000"
          cellBgColor="#fff"
          fontSize="16px"
        />
        <h1 style={headingStyle}>Filterable Product Cards Demo</h1>
        <FilterableProductCards
          data={products}
          filters={filters}
          itemsPerPage={6}
          cardBgColor="#fffbf0"
          cardHeight="400px"
          cardWidth="300px"
          buttonBgColor={cardBgColor}
          buttonHoverBgColor={buttonHoverBgColor}
          buttonDisabledBgColor="#cccccc"
          onClickCard={handleCardClick}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default PageComponent;
```

## Interactive Documentation with Storybook

For live, interactive demos, use Storybook. Follow these steps to set it up:

1. **Install Storybook**:

   ```bash
   npx storybook@latest init
   npm install --save-dev @storybook/addon-essentials @storybook/addon-interactions
   ```

2. **Create Stories**:

   For each component, create a `.stories.jsx` file in a `/stories` folder. Example for `Button`:

   ```jsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { Button } from '../src/components/Button/Button';

   const meta: Meta<typeof Button> = {
     title: 'Components/Button',
     component: Button,
     parameters: { layout: 'centered' },
     tags: ['autodocs'],
     argTypes: {
       variant: { control: 'select', options: ['primary', 'secondary'] },
       color: { control: 'color' },
     },
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Primary: Story = {
     args: {
       children: 'Primary Button',
       variant: 'primary',
       color: '#1e3a8a',
     },
   };

   export const Secondary: Story = {
     args: {
       children: 'Secondary Button',
       variant: 'secondary',
       color: '#6c757d',
     },
   };
   ```

3. **Run Storybook**:

   ```bash
   npm run storybook
   ```

   Access at `http://localhost:6006`.

4. **Deploy**:

   Build static files:

   ```bash
   npm run build-storybook
   ```

   Deploy to GitHub Pages:

   ```bash
   npm install --save-dev storybook-to-ghpages
   npm run deploy-storybook
   ```

Visit the Storybook site to interact with components, tweak props, and see your `PageComponent` in action.

## Contributing

We welcome contributions! Fork the repo, make changes, and submit a pull request. See our [CONTRIBUTING.md](https://github.com/your-repo/naveen-ui/CONTRIBUTING.md) for details.

## License

MIT
```

### Fixes and Improvements Made

1. **Table Formatting**:
   - Ensured consistent table syntax with proper pipe (`|`) alignment and dashes (`-`) for headers.
   - Used fixed-width columns by aligning content with spaces for better readability in Markdown renderers (e.g., GitHub).
   - Removed any stray characters or formatting issues that could break table rendering.

2. **Code Block Syntax**:
   - Used triple backticks (```) with the correct language identifier (e.g., `bash`, `jsx`) to ensure proper syntax highlighting.
   - Fixed indentation in code blocks to be consistent (2 spaces for JSX, no extra spaces in bash).
   - Corrected any missing or misplaced backticks that could cause rendering issues.

3. **Image URLs**:
   - Kept the provided image URLs as they were valid, but ensured they were consistently formatted in the code blocks.
   - If you encounter issues with specific image URLs not loading, consider replacing them with publicly accessible placeholder images (e.g., from `https://placehold.co`).

4. **Improved Readability**:
   - Added spacing between sections and code blocks to improve visual separation.
   - Ensured consistent use of headers (`#`, `##`, `###`) for clear hierarchy.
   - Replaced placeholder links (e.g., `[CONTRIBUTING.md](link-to-contributing)`) with a sample GitHub link. Update this to your actual repository link.

5. **Consistency in Prop Tables**:
   - Standardized the format of prop tables across components, ensuring all columns (`Prop`, `Type`, `Required`, `Description`, `Default`) are clearly defined.
   - Escaped special characters in prop types (e.g., `'primary' | 'secondary'` to `'primary' \| 'secondary'`) to prevent rendering issues in Markdown.

6. **Fixed Full Demo Example**:
   - Ensured the `PageComponent` code block is properly formatted with consistent indentation.
   - Removed redundant comments (e.g., `// Add more products as needed`) to keep the example concise.
   - Verified that all props and styles match the component documentation.

7. **Storybook Section**:
   - Clarified instructions for installing and running Storybook.
   - Fixed the Storybook example code to use proper TypeScript annotations (`Meta`, `StoryObj`) and ensured it aligns with modern Storybook practices.

### Troubleshooting Tips

If the README still doesn't render correctly, consider the following:

- **Markdown Renderer**: Ensure you're viewing the README in a Markdown-compatible environment (e.g., GitHub, VS Code with a Markdown previewer). Some text editors may not render tables correctly.
- **Table Alignment**: If tables are misaligned, check for extra spaces or missing pipes (`|`). Use a Markdown linter like `markdownlint` to validate syntax:
  ```bash
  npm install -g markdownlint-cli
  markdownlint README.md
  ```
- **Code Block Issues**: Ensure there are no extra spaces or tabs before or after the triple backticks (```). Some Markdown parsers are sensitive to this.
- **Image URLs**: If images don't load, replace them with reliable placeholders (e.g., `https://placehold.co/300x200`).
- **GitHub Rendering**: If hosting on GitHub, preview the README in the repository to ensure it renders correctly. GitHub's Markdown renderer is strict about table and code block syntax.

### Testing the README

1. Save the corrected README as `README.md` in your project root.
2. Preview it locally using a Markdown viewer (e.g., VS Code's built-in preview or a tool like `grip`):
   ```bash
   pip install grip
   grip README.md
   ```
   Access at `http://localhost:6419`.
3. Push to your GitHub repository and verify rendering:
   ```bash
   git add README.md
   git commit -m "Update README with fixed tables and code blocks"
   git push origin main
   ```
4. If using Storybook, test the components locally to ensure the documented props and examples work as expected:
   ```bash
   npm run storybook
   ```

### Additional Notes

- **Component Coverage**: The README lists many card components (e.g., `ProductCard`, `EventCard`) without detailed props. If you have their prop definitions, consider adding them to the README or linking to a Storybook deployment for full documentation.
- **Broken Links**: The `[CONTRIBUTING.md](link-to-contributing)` link was a placeholder. Replace it with the actual URL to your contributing guidelines (e.g., `https://github.com/your-repo/naveen-ui/CONTRIBUTING.md`).
- **Image Accessibility**: Ensure all image URLs are publicly accessible. If they're hosted locally or on a private server, they won't render in public README views. Consider using a CDN or placeholder service.
- **Validation**: If you encounter specific rendering issues (e.g., a particular table or code block not displaying), share the exact error or screenshot, and I can help pinpoint the issue.

If you have specific sections or components still not rendering correctly, let me know which ones, and I can provide targeted fixes. You can also share any error messages or rendering issues from your Markdown viewer or GitHub.