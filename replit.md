# StudyTracker Application

## Overview

StudyTracker is a full-stack web application that helps students track their academic writing progress by connecting to their Google Docs. The application monitors word count changes across multiple documents, provides progress visualization, tracks achievements, and maintains activity histories. Users authenticate via Google OAuth and can add multiple Google Docs for continuous monitoring of their writing activities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with schema-first approach
- **Authentication**: Google OAuth 2.0 integration for user authentication and document access
- **API Design**: RESTful API endpoints with structured error handling

### Database Schema
The application uses a PostgreSQL database with four main entities:
- **Users**: Stores user profile information, OAuth tokens, and total points
- **Documents**: Tracks Google Docs with metadata, word counts, and sync status  
- **Activities**: Records all user activities including word additions and achievements
- **Weekly Progress**: Stores daily word count progress with weekly goal tracking

### Authentication & Authorization
- **OAuth Flow**: Google OAuth 2.0 with offline access for continuous document monitoring
- **Scope Permissions**: Google Drive readonly, Google Docs readonly, and user profile access
- **Session Management**: Client-side user session storage with server-side token management
- **Security**: Credential validation and secure token refresh handling

### External Service Integration
- **Google APIs**: Integration with Google Drive API and Google Docs API for document access
- **Document Synchronization**: Automated content fetching and word count calculation
- **Real-time Updates**: Polling mechanism for detecting document changes

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **express**: Web application framework
- **react**: Frontend framework
- **vite**: Build tool and development server

### Authentication & APIs
- **googleapis**: Google APIs client library
- **google-auth-library**: Google OAuth 2.0 authentication

### UI & Styling
- **@radix-ui/***: Headless UI component primitives (30+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: CSS-in-JS variant management
- **lucide-react**: Icon library

### Development & Build Tools
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database migration and schema management tools

### Database & Infrastructure
- **PostgreSQL**: Primary database (configured for Neon serverless)
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **ws**: WebSocket library for Neon database connections