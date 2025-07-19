# Cruzo Car Wash Website

## Overview

This is a full-stack web application for Cruzo, a premium doorstep car wash service in Chennai. The application features a modern React frontend with a Node.js/Express backend, built using TypeScript throughout. It allows customers to inquire about services and book car wash appointments through an intuitive web interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query (@tanstack/react-query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for inquiries and bookings
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot reload with tsx for TypeScript execution

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations
- **Fallback**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Inquiries Table**: Contact form submissions with service details
- **Bookings Table**: Appointment requests with scheduling information

### API Endpoints
- `POST /api/inquiries` - Submit contact form inquiries
- `POST /api/bookings` - Create service bookings
- `GET /api/inquiries` - Retrieve all inquiries (admin access)

### Frontend Pages
- **Home Page**: Landing page with service information, pricing, and contact forms
- **404 Page**: Error handling for invalid routes

### Shared Resources
- **Schema Definitions**: Zod schemas in `/shared/schema.ts` for data validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

### Contact Form Flow
1. User fills out inquiry form on homepage
2. Frontend validates data using Zod schema
3. React Query mutation sends POST request to `/api/inquiries`
4. Backend validates and stores inquiry data
5. Success/error feedback displayed via toast notifications

### Booking Flow
1. User initiates booking through modal interface
2. Form validation ensures required fields are completed
3. Booking data submitted to `/api/bookings` endpoint
4. Server processes and stores booking with "pending" status
5. User receives confirmation of successful booking

### Error Handling
- Client-side validation prevents invalid submissions
- Server-side validation provides additional data integrity
- Comprehensive error messages guide user corrections
- Toast notifications provide immediate feedback

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **@radix-ui/***: Headless UI components for accessibility
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **wouter**: Lightweight routing

### Development Tools
- **Vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Build Process
1. Frontend builds to `/dist/public` using Vite
2. Backend compiles to `/dist/index.js` using esbuild
3. Single deployment artifact contains both frontend and backend

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- Development uses file watching and hot reload
- Production serves static files and runs compiled backend

### Database Management
- Drizzle migrations stored in `/migrations` directory
- Schema changes applied via `npm run db:push`
- Automatic table creation based on schema definitions

### Hosting Considerations
- Designed for Replit deployment with integrated database
- Single-command startup with `npm start`
- Environment variables managed through Replit secrets
- Static asset serving handled by Express in production