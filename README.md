# Paper Vault - Complete Project Setup

## 📁 Project Structure

```
paper-vault/
├── public/
│   ├── papers/
│   │   ├── sem1/
│   │   │   ├── 2024/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   ├── 2023/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   ├── 2022/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   ├── 2021/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   └── 2020/
│   │   │       ├── midsem.pdf
│   │   │       └── endsem.pdf
│   │   ├── sem2/
│   │   │   ├── 2024/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   ├── 2023/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   ├── 2022/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   ├── 2021/
│   │   │   │   ├── midsem.pdf
│   │   │   │   └── endsem.pdf
│   │   │   └── 2020/
│   │   │       ├── midsem.pdf
│   │   │       └── endsem.pdf
│   │   ├── sem3/
│   │   │   └── [same structure as sem1]
│   │   ├── sem4/
│   │   │   └── [same structure as sem1]
│   │   ├── sem5/
│   │   │   └── [same structure as sem1]
│   │   ├── sem6/
│   │   │   └── [same structure as sem1]
│   │   ├── sem7/
│   │   │   └── [same structure as sem1]
│   │   └── sem8/
│   │       └── [same structure as sem1]
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Setup Instructions

### Step 1: Create Project
```bash
npm create vite@latest paper-vault -- --template react
cd paper-vault
```

### Step 2: Install Dependencies
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
```

### Step 3: Configure Tailwind CSS

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Step 4: Update package.json
```json
{
  "name": "paper-vault",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
  }
}
```

### Step 5: Create/Update Files

**src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**src/main.jsx**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
  ,
)
```

**src/App.jsx** - [Full component code below]

### Step 6: Create Folder Structure for PDFs

In your project root, create the folders:
```bash
mkdir -p public/papers/sem{1..8}/{2020,2021,2022,2023,2024}
```

Then place your PDF files in the appropriate folders:
- `public/papers/sem1/2024/midsem.pdf`
- `public/papers/sem1/2024/endsem.pdf`
- ... and so on

## 📝 File Naming Convention

**Format:** `public/papers/sem{N}/{YEAR}/{TYPE}.pdf`

Where:
- **N** = Semester number (1-8)
- **YEAR** = Academic year (2020-2024)
- **TYPE** = Either "midsem" or "endsem"

**Examples:**
- `public/papers/sem1/2024/midsem.pdf` - Semester 1, Mid Semester 2024
- `public/papers/sem3/2023/endsem.pdf` - Semester 3, End Semester 2023
- `public/papers/sem8/2022/midsem.pdf` - Semester 8, Mid Semester 2022