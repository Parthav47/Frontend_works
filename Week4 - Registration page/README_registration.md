# Internship Program Frontend Project

This is a **frontend-only** web application designed to display internship opportunities using a grid layout. It is built using **HTML**, **CSS**, and **JavaScript**. All internship data is dynamically loaded from a separate JavaScript file.

---

## 🌐 Live Preview (Optional)
To preview this project, open `Intenship_page.html` in your browser.

---

## 📁 Files Included

- `Intenship_page.html` – Contains the structure and styling of the webpage.
- `information.js` – Contains a JavaScript array with internship information.
- `README.md` – This documentation file.

---

## 🧩 Features

- Responsive 2x2 grid layout for internships
- Internship data loaded dynamically via JavaScript
- Clean UI with hover effects on "Apply Now" buttons
- Easy to modify and extend with more internships

---

## 🧪 How to Use

1. Download or clone the repository.
2. Make sure `Intenship_page.html` and `information.js` are in the same folder.
3. Open `Intenship_page.html` in a web browser.
4. Click "Apply Now" to redirect (currently placeholder links).

---

## 📄 Sample Internship Entry Format (from `information.js`)

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

> Note: `/b` is replaced with a line break in the display using `.replace('/b', '<br>')`.

---

## ⚠️ Disclaimer

- This is a **frontend-only** project. There is no backend or form handling.
- All internship data is hardcoded in the JavaScript file and not fetched from an API.
- The `link` value in each entry is a placeholder (`#`). Update it as needed.

---

## 🚀 Future Enhancements

- Add form submissions for applications
- Store data in JSON or fetch from an API
- Mobile layout optimization
- Admin dashboard to update data dynamically

---

## ✍️ Author

Created as a practice project or demo to list internships interactively.

---

