# Portfolio Website

A modern, minimal portfolio website showcasing skills, experience, education, projects, and leadership roles.

## Features

- 🎨 **Minimal Design**: Black and green color palette with clean aesthetics
- ✨ **Smooth Transitions**: Framer Motion animations for seamless user experience
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Fast**: Built with Vite for optimal performance
- 🎯 **Sections**: 
  - Hero/About
  - Skills
  - Experience
  - Education
  - Projects
  - Leadership
  - Contact

## Tech Stack

- React 18
- Vite
- Framer Motion
- CSS3

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KneewYen/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` and update the `contactInfo` object with your details:

```javascript
const contactInfo = {
  email: 'your.email@example.com',
  location: 'Your Location',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername'
}
```

### Add Your CV

Place your CV PDF in the `public` folder and add a download link in the Contact section or Hero section.

## Project Structure

```
Portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── App.jsx      # Main app component
│   ├── App.css      # App styles
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## License

This project is open source and available under the MIT License.

## Contact

Nguyen Le - [GitHub](https://github.com/KneewYen)

