# Internship Program Webpage

This is a **frontend-only** responsive HTML page showcasing various internship opportunities. The webpage uses HTML, CSS, and JavaScript to dynamically populate internship cards using an external JavaScript file (`information.js`).

## 🔍 Overview

The project displays internship programs like:

- Web Development
- App Development
- Python Programming
- Java Programming

Each internship card includes:
- Title
- Duration
- Location
- Stipend
- Start Date
- Apply button

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** – for styling and layout
- **JavaScript** – for dynamic rendering of internship data

## 📁 Project Structure

```
├── Intenship_page.html   # Main HTML file with layout and embedded JS
├── information.js        # JavaScript file with internship data
└── README.md             # Documentation file
```

## 🚀 How to Run the Project

1. Download or clone the repository.
2. Keep both `Intenship_page.html` and `information.js` in the same directory.
3. Open `Intenship_page.html` in any modern browser.

## ✅ Features

- Simple and clean user interface
- Responsive internship cards
- Easy-to-edit data via `information.js`
- Hover effects on buttons
- Apply button with link support

## ⚠️ Notes

- This is a **frontend-only** project. There is no backend or database.
- Update the `link` field in `information.js` to actual application URLs.
- The tag `/b` in the titles is used for line breaks and is replaced using JavaScript.

## 📌 Example Data Snippet

```js
const data = [
  {
    title: 'Web Development /b Intenship Program',
    Duration: '1 month/2 months',
    Location: 'Virtual',
    Stipend: '-',
    StartDate: '01 June 2024',
    link: '#'
  },
  ...
];
```

