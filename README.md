# 🚀 Angular Product App - Local Development Guide

---

## 📋 Prerequisites

Make sure you have the latest version of Angular, I used **Angular 19**

```bash
npm install -g @angular/cli
```

---![product_detail](https://github.com/user-attachments/assets/2f8ee0e3-970a-497c-b8b2-f4a160aaf944)
![product](https://github.com/user-attachments/assets/346b6b7b-4720-4b22-9506-f96202f2b517)


## 📁 Clone the Repository

```bash
git clone https://github.com/mypolaris218/product-app.git
cd product-app
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 🧩 Run the App Locally

```bash
ng serve
```

Then open your browser to:

```
http://localhost:4200
```

---

## 🧪 Run Unit Tests

```bash
ng test
```

**✅ Sample Test Result:**

- Total: 8 specs
- All passed (0 failures)
- Verified tests for:
  - AppComponent
  - ProductDetailComponent
  - ProductCardComponent (with @Output click)
  - ProductListComponent (list render + routing)
  - ProductService (Observable returns)
![unit_testing_karma](https://github.com/user-attachments/assets/61ac7313-3711-4b74-b02f-bebd69fa6acc)
![unit_testing_console](https://github.com/user-attachments/assets/6fd6e48e-1775-45f9-a865-54070f3c8192)

To run with coverage:

```bash
ng test --code-coverage
```

Open the coverage report:

```
coverage/index.html
```

---

## 🏗️ Build for Production

```bash
ng build --configuration production
```

The build output will be in the `dist/` folder.

---
