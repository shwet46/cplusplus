# CPlusPlus

<div align="center">

**A modern, enhanced version of [cplusplus.com](https://cplusplus.com/)**
  
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)

</div>

## 📝 About

This project is a revamped version of the popular C++ reference website [cplusplus.com](https://cplusplus.com/). It features:

- Modern UI/UX design
- Improved navigation and search functionality
- Mobile-responsive layout
- **NEW: Problems section with curated challenges from various platforms**

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Run Locally

1. Clone the project:

```bash
git clone https://github.com/shwet46/cplusplus.git
```

2. Navigate to the project directory:

```bash
cd cplusplus
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🧩 New Problems Section

The newly added **Problems** page provides users with:

- Curated programming challenges from platforms like LeetCode, CodeForces, GeeksforGeeks and CSES
- Problems organized by difficulty level and category
- Clear problem descriptions
- Links to the original problem sources

Access this feature by navigating to the "Problems" tab in the main navigation menu.

## 📦 Project Structure

```
cplusplus/
├── pages/              # Next.js pages directory
│   ├── _app.tsx
│   └── _document.tsx
├── public/             # Static assets
├── src/
│   ├── app/            # Application components
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── data/           # Data files
│   └── lib/
│       └── utils.ts    # Utility functions
├── .gitignore
├── .eslintconfig.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 🔧 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---
