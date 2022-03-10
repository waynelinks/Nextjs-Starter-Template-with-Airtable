# Nextjs Starter Template with Airtable

Nextjs Starter Template to get you going.

# Technoloy Stack

## Client

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SWR](https://swr.vercel.app/)
- [Styled Components](https://styled-components.com/)

## Database

- [Airtable](https://airtable.com/)

# Features

## Authentication - Social Login (Google)

- [ ] Login existing user
- [ ] Logout existing user
- [ ] Fetch current user session

## User

- [ ] View user profile

## Website

- [ ] Seo friendly
- [ ] Responsive
- [ ] Light and dark theme
- [ ] Automatic image optimization via [next image](https://nextjs.org/docs/basic-features/image-optimization)
- [ ] Pagination

# Client Routes

## Authentication

| Method | Route          | Description          | Protected          |
| ------ | -------------- | -------------------- | ------------------ |
| `POST` | `/auth`        | Login existing user  |
| `POST` | `/auth/logout` | Logout existing user | :white_check_mark: |

## User

| Method | Route       | Description        | Protected          |
| ------ | ----------- | ------------------ | ------------------ |
| `GET`  | `/users/me` | Fetch user profile | :white_check_mark: |

# API Routes

## Authentication

| Method | Route               | Description              | Protected          |
| ------ | ------------------- | ------------------------ | ------------------ |
| `POST` | `/api/auth`         | Login existing user      |
| `POST` | `/api/auth/logout`  | Logout existing user     | :white_check_mark: |
| `POST` | `/api/auth/session` | Get current user session | :white_check_mark: |

## User

| Method  | Route              | Description         | Protected          |
| ------- | ------------------ | ------------------- | ------------------ |
| `GET`   | `/api/users/me`    | Fetch user profile  | :white_check_mark: |
| `PATCH` | `/api/users/me`    | Update user profile | :white_check_mark: |
| `POST`  | `/api/users/reset` | Reset user password | :white_check_mark: |
