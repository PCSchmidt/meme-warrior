# Meme Warrior

Meme Warrior is a Progressive Web App (PWA) that allows users to upload, organize, and manage their meme collections.

## Features

- Upload and display memes in various image formats (JPEG, PNG, GIF, WebP)
- Responsive grid layout for meme display
- Offline functionality
- User-friendly feedback messages

## Project Structure

```
meme-warrior/
├── assets/            # Static assets (fonts, images, etc.)
├── config/            # Configuration files
├── docs/              # Documentation files
├── scripts/           # JavaScript files
│   └── main.js
├── styles/            # CSS files
│   └── main.css
├── tests/             # Test files
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore file
├── .prettierrc        # Prettier configuration
├── index.html         # Main HTML file
├── LICENSE            # License file
├── manifest.json      # Web App Manifest for PWA
├── README.md          # This file
├── requirements.txt   # Python dependencies
└── sw.js              # Service Worker for offline functionality
```

## Getting Started

### Prerequisites

- Python 3.x

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/meme-warrior.git
   cd meme-warrior
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

### Running the App

1. Start the local development server:
   ```
   python -m http.server 8000
   ```

2. Open your web browser and navigate to `http://localhost:8000`

## Development

This project uses vanilla JavaScript, HTML, and CSS. The main files are:

- `index.html`: Main HTML file
- `styles/main.css`: Main CSS file
- `scripts/main.js`: Main JavaScript file
- `sw.js`: Service Worker for offline functionality
- `manifest.json`: Web App Manifest for PWA

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors and users of Meme Warrior!