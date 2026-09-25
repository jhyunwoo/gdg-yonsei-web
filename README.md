# GDGoC Yonsei Web

## Introduction
GDGoC Yonsei를 소개하는 웹페이지 + 관리 페이지

## Getting Started
```bash
yarn install
```

```bash
yarn dev
```

## Tech Stack
- Next.js 15
- Auth.js
- Cloudflare R2 Storage
- Drizzle ORM
- PostgreSQL
- Zustand
- Tailwind CSS
- React Hook Form
- SWR

## Project context and engineering approach

This repository is the first-generation public site and administration surface for GDGoC Yonsei. It brings member-facing content and staff workflows into one Next.js application, rather than maintaining separate sites for announcements, recruitment, and operations.

The main engineering concerns were role-aware administration, reliable content updates, and user-uploaded media. Auth.js, PostgreSQL, and Drizzle provide an explicit identity and data boundary; React Hook Form validates administrative input; and Cloudflare R2 keeps uploaded assets outside the application runtime. Zustand and SWR are used where responsive client state and server-data revalidation are needed.

## Status

This repository documents an earlier implementation of the GDGoC Yonsei web platform. It is kept as an engineering reference alongside the newer official-site repository.
