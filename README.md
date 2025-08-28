# React E-Commerce Website

A full-stack e-commerce application built with React.js and Node.js, featuring a modern shopping experience with comprehensive admin panel functionality.

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green.svg)
![Stripe](https://img.shields.io/badge/Payment-Stripe-purple.svg)

## 🚀 Features

### Customer Features

- **Product Catalog**: Browse products with detailed information, images, and reviews
- **Category Filtering**: Filter products by categories
- **Search Functionality**: Search products by name
- **Shopping Cart**: Add/remove products with quantity management
- **User Authentication**: Register and login system
- **Payment Processing**: Secure payments via Stripe integration
- **Product Reviews**: Rate and review products
- **Blog System**: Read blog posts with commenting functionality
- **Responsive Design**: Mobile-friendly interface

### Admin Features

- **Dashboard**: Comprehensive admin dashboard with analytics
- **Product Management**: Create, read, update, and delete products
- **Category Management**: Manage product categories
- **User Management**: View and manage user accounts
- **Order Management**: Track and manage customer orders
- **Blog Management**: Create and manage blog posts
- **Coupon System**: Create and manage discount coupons

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Ant Design** - UI component library
- **React Slick** - Carousel component
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **React Quill** - Rich text editor

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variables

## 📁 Project Structure

```
React-ECommerce-Website/
├── frontend/
│   ├── public/
│   │   └── img/
│   │       ├── products/
│   │       ├── categories/
│   │       ├── blogs/
│   │       └── brands/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── Product/
│   │   │   ├── Cart/
│   │   │   ├── Blog/
│   │   │   └── layout/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   └── user/
│   │   ├── context/
│   │   ├── layouts/
│   │   └── css/
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Blog.js
│   │   └── Coupon.js
│   ├── routes/
│   │   ├── Auth.js
│   │   ├── products.js
│   │   ├── categories.js
│   │   ├── Payment.js
│   │   └── blogs.js
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Stripe account (for payments)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/React-ECommerce-Website.git
   cd React-ECommerce-Website
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the backend directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start the Backend Server**

   ```bash
   cd backend
   npm start
   ```

   Server will run on http://localhost:5000

6. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application will run on http://localhost:5173

## 📊 Database Models

### User Model

- Username, email, password
- Role-based access (user/admin)
- Avatar support
- Timestamps

### Product Model

- Name, description, images
- Price with discount support
- Color and size variants
- Category association
- Review system

### Category Model

- Name and image
- Timestamps

### Blog Model

- Title, content, author
- Featured image
- Review system
- Timestamps

### Coupon Model

- Discount codes
- Percentage-based discounts
- Expiration dates

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/` - Get all users (admin)
- `DELETE /api/auth/delete/:id` - Delete user (admin)

### Products

- `GET /api/products/` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products/` - Create product (admin)
- `PUT /api/products/update/:id` - Update product (admin)
- `DELETE /api/products/delete/:id` - Delete product (admin)
- `GET /api/products/search/:query` - Search products

### Categories

- `GET /api/categories/` - Get all categories
- `POST /api/categories/` - Create category (admin)
- `PUT /api/categories/update/:id` - Update category (admin)
- `DELETE /api/categories/delete/:id` - Delete category (admin)

### Payment

- `POST /api/payment/` - Create Stripe checkout session
- `GET /api/payment/orders` - Get order history (admin)

### Blogs

- `GET /api/blogs/` - Get all blogs
- `GET /api/blogs/:id` - Get blog by ID
- `POST /api/blogs/` - Create blog (admin)
- `PUT /api/blogs/update/:id` - Update blog (admin)
- `DELETE /api/blogs/delete/:id` - Delete blog (admin)

## 🎨 UI Components

The application features a comprehensive set of reusable components:

- **Layout Components**: Header, Footer, Layout wrappers
- **Product Components**: Product listing, details, gallery
- **Shopping Cart**: Cart management with local storage
- **Authentication**: Login/Register forms
- **Admin Dashboard**: CRUD operations for all entities
- **Blog System**: Blog listing and detail views
- **Payment Integration**: Stripe checkout flow

## 🔧 Development

### Available Scripts

**Frontend:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend:**

- `npm start` - Start server with nodemon
- `npm test` - Run tests (not implemented)

### Code Style

The project uses ESLint for code linting and follows React best practices.

## 🚀 Deployment

### Frontend Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service

### Backend Deployment

1. Set up environment variables on your server
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Environment Variables

Make sure to set these environment variables in production:

- `MONGO_URI` - MongoDB connection string
- `STRIPE_SECRET_KEY` - Stripe secret key
- `FRONTEND_URL` - Frontend application URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Stripe for payment processing
- MongoDB for database solutions
- All contributors who helped build this project

## 📞 Contact

For any questions or support, please open an issue on GitHub.

---

**Built with ❤️ using React and Node.js**
