Naveen UI Library
A collection of reusable React UI components for modern web applications.
Installation
npm install naveen

Usage
Import components and use them in your React app:
import { Button, Card, Navbar } from 'naveen';

function App() {
  return (
    <div>
      <Navbar items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />
      <Card title="Welcome">
        <Button variant="primary" onClick={() => alert('Clicked!')}>
          Click Me
        </Button>
      </Card>
    </div>
  );
}

Components
Button
A customizable button with variants.

Props:
children: Content inside the button (string or React node).
onClick: Click handler function.
variant: Style variant (primary or secondary).



Card
A styled card container.

Props:
title: Optional card title (string).
children: Content inside the card.



Navbar
A navigation bar with links.

Props:
items: Array of { label: string, href: string } for nav links.



Development
To contribute or modify:

Clone the repo: git clone <your-repo-url>
Install dependencies: npm install
Build: npm run build
Link locally for testing: npm link

License
MIT © Naveen