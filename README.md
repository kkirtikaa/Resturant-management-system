
# MERN Restaurant Application

A full-stack restaurant management system built with MongoDB, Express, React, and Node.js.

## 📁 Project Structure

```
MERN-restaurant/
├── frontend/          # React + Vite customer interface
├── admin/             # React + Vite admin dashboard
└── backend/           # Node.js + Express server
```

## 🚀 Features

### Frontend
- **Menu Display** - Browse categorized food items (Pizza, Rice, Noodles, Chicken, Drinks, Spaghetti)
- **Reservations** - Book a table with date, time, and guest count
- **Services Section** - Showcase Breakfast, Drinks, and Appetizers
- **Responsive Design** - Built with Tailwind CSS
- **Real-time Toast Notifications** - Using react-toastify

### Admin Panel
- **Add Products** - Create new menu items with image upload (Cloudinary)
- **List Products** - View and manage existing items
- **Reservation Management** - View and delete customer reservations
- **Admin Authentication** - Login with email/password

### Backend
- **MongoDB** - Database for products and reservations
- **JWT Authentication** - Secure admin access
- **Cloudinary** - Image storage for menu items
- **RESTful APIs** - Product and reservation endpoints

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React 19, Vite, Tailwind CSS 4, Axios, React Router |
| Admin | React 19, Vite, Tailwind CSS 4, React Router |
| Backend | Node.js, Express 5, Mongoose, Cloudinary, JWT |
| Database | MongoDB |

## 📦 Installation

### Backend
```bash
cd backend
npm install
npm run server
```
Create `.env` file with MongoDB, Cloudinary, and admin credentials.

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5174`

### Admin
```bash
cd admin
npm install
npm run dev
```
Runs on `http://localhost:5173`

## 📝 API Endpoints

- `POST /api/user/admin` - Admin login
- `POST /api/product/add` - Add product (admin)
- `GET /api/product/list` - Get all products
- `POST /api/reservations/create` - Create reservation
- `GET /api/reservations/get` - Get all reservations (admin)
- `POST /api/reservations/delete/:id` - Delete reservation (admin)
