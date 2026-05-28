# RESTROPro SaaS POS

Point‑of‑Sale (POS) system for restaurants, cafes, hotels, and food trucks.

**Tech stack**

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Deployment**: Docker / Cloud (e.g., AWS, DigitalOcean)

---

## 🚀 Features

- Multi‑tenant SaaS: Create and manage independent businesses
- User authentication: Admins, staff, and roles
- Menu & product management: Categories, items, pricing, modifiers
- Order processing: POS UI, kitchen display, invoice/bill printing
- Table management: Floor plans, table statuses, split‑check support
- Inventory tracking
- Reports & analytics: Sales summaries, daily/weekly reports
- Settings: Tax, tips, payment methods (cash/card), receipts
- Integrations (optional): Payment gateways, QR ordering, delivery platforms

---

## 🎞️ Getting Started

### Prerequisites

- Node.js ≥ 16
- MySQL ≥ 8
- Git
- (Optional) Docker

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your‑org/restropro-pos.git
   cd restropro-pos
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**\
   Create `.env.local` in `frontend` and `.env` in `backend` using the `.env.example` templates.\
   Sample variables:

   **backend/.env**

   ```env
   DATABASE_URL='mysql://root:12345678@localhost:3306/restropro_saas'
   JWT_SECRET=restro_jwt_secret
   JWT_EXPIRY=15m
   JWT_EXPIRY_REFRESH=30d

   # provide in ms - milliseconds => 15 minute, 30 days
   COOKIE_EXPIRY=300000 
   COOKIE_EXPIRY_REFRESH=2592000000 

   PASSWORD_SALT=10
   FRONTEND_DOMAIN="http://localhost:5173"
   FRONTEND_DOMAIN_COOKIE="localhost"

   STRIPE_SECRET=
   STRIPE_WEBHOOK_SECRET=

   SMTP_HOST=
   SMTP_PORT=
   SMTP_EMAIL=
   SMTP_PASSWORD=

   ENCRYPTION_KEY=uiflow
   ```

   **frontend/.env.local**

   ```
   REACT_APP_BACKEND_URL=http://localhost:4000/api
   ```

5. **Initialize database**\
   Ensure your MySQL service is running. Then:

   ```bash
   cd backend
   npm run migrate
   npm run seed
   ```

6. **Run in development**

   - **Backend**
     ```bash
     cd backend
     npm run dev
     ```
   - **Frontend**
     ```bash
     cd ../frontend
     npm start
     ```

   Your app should now be accessible at `http://localhost:3000`.

---

## 🧰 Available Scripts

### Backend (Node.js / Express)

- `npm run dev`: Start development server with hot reload
- `npm run build`: Compile production build
- `npm start`: Start production server
- `npm run migrate`: Run DB migrations
- `npm run seed`: Seed initial mock data

### Frontend (React.js / Tailwind)

- `npm start`: Launch development server
- `npm run build`: Create optimized production build
- `npm test`: Run UI tests

---

## ⚙️ Project Structure

```
.
├── backend
│   ├── src
│   │   ├── controllers/   # API logic
│   │   ├── models/        # Sequelize or TypeORM schema
│   │   ├── routes/        # Express routing
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── config/        # DB, server settings
│   ├── migrations/
│   ├── seeds/
│   └── tests/
└── frontend
    ├── src
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   ├── context/       # React Context or Zustand
    │   ├── hooks/
    │   ├── services/      # API service calls (axios / fetch)
    │   └── assets/
    ├── public/
    └── tailwind.config.js
```

---

## ✅ Authentication & Authorization

- JWT-based auth for backend APIs
- Role-based frontend routing and UI: Admins vs Staff
- Secure store of tokens in HTTP-only cookies / `localStorage`

---

## 🧪 Testing

- **Backend**: Jest + Supertest
  ```bash
  npm test
  ```
- **Frontend**: React Testing Library + Jest
  ```bash
  npm test
  ```

---

## 📦 Deployment Options

- Docker-compose: `frontend`, `backend`, `mysql`, `redis`
- Deploy to AWS EC2, ECS, or DigitalOcean App Platform
- Use managed MySQL (e.g., RDS). Configure `DATABASE_URL` accordingly.

---

## ⚙️ Environment Variables

| Name                     | Description                                                   | Default                                                        |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------- |
| `DATABASE_URL`           | Full MySQL connection string                                  | `mysql://root:12345678@localhost:3306/restropro_saas`          |
| `JWT_SECRET`             | JWT encryption key                                            | `restro_jwt_secret`                                            |
| `JWT_EXPIRY`             | Token validity duration                                       | `15m`                                                          |
| `JWT_EXPIRY_REFRESH`     | Refresh token validity duration                               | `30d`                                                          |
| `COOKIE_EXPIRY`          | Session cookie expiry (milliseconds)                          | `300000` (15m)                                                 |
| `COOKIE_EXPIRY_REFRESH`  | Refresh session cookie expiry (milliseconds)                  | `2592000000` (30d)                                             |
| `PASSWORD_SALT`          | Password bcrypt rounds                                        | `10`                                                           |
| `FRONTEND_DOMAIN`        | Frontend URL for CORS                                         | `http://localhost:5173`                                        |
| `FRONTEND_DOMAIN_COOKIE` | Domain name for cookie storage                                | `localhost`                                                    |
| `STRIPE_SECRET`          | Stripe API secret key                                         | *(optional)*                                                   |
| `STRIPE_WEBHOOK_SECRET`  | Stripe webhook verification key                               | *(optional)*                                                   |
| `SMTP_HOST`              | SMTP server host for emails                                   | *(optional)*                                                   |
| `SMTP_PORT`              | SMTP server port                                              | *(optional)*                                                   |
| `SMTP_EMAIL`             | SMTP sender email                                             | *(optional)*                                                   |
| `SMTP_PASSWORD`          | SMTP sender password                                          | *(optional)*                                                   |
| `ENCRYPTION_KEY`         | Custom string key used for symmetric encryption               | `uiflow`                                                       |
| `REACT_APP_BACKEND_URL`  | Frontend API endpoint URL                                    | `http://localhost:4000/api`                                    |

---

## 🙏 Contributing

1. Fork and create a feature branch
2. Write clean, tested code
3. Open a Pull Request detailing changes

---

## 📝 License

Licensed under the **[insert license here]**.

---

## 📞 Contact

For questions, feature requests, or issues, open a GitHub Issue or email [**support@example.com**](mailto\:support@example.com).

---

Thanks for using RESTROPro – powering restaurant businesses with seamless SaaS POS!

