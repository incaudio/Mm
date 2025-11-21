# Overview

Mate Nation is a music society web application focused on discovering and promoting unique music across all genres. The platform serves as both a music discovery service and an artist development platform, connecting music lovers with emerging artists while providing promotional services including music videos, curated playlists, and custom lyrics.

## Recent Changes (October 2025)

### Navigation System Improvements (October 20, 2025)
Implemented advanced navigation system with IntersectionObserver for accurate section tracking:
- **Section Indicator (Desktop)**: Added modern rounded dot navigation on the right side of the screen for desktop devices
  - Uses IntersectionObserver to accurately detect active section regardless of section height
  - Smooth scroll to target section using offsetTop for precise positioning
  - Hover tooltips showing section names
  - Pink highlight for active section with scale animation
- **Mobile Next Button**: Added floating "Next" button at bottom-right for mobile navigation
  - Automatically detects current section and total sections from DOM
  - Hidden on hero section and last section for clean UX
  - Uses IntersectionObserver for accurate section tracking
  - Animated chevron icon with bounce effect
- **Desktop Scroll Behavior**: Removed auto-scroll snap effect on desktop (md:snap-none) while maintaining it on mobile for better user control
- **Performance**: All observers properly clean up on component unmount to prevent memory leaks
- **Responsive Design**: Section indicator visible only on desktop (md:flex), next button visible only on mobile (md:hidden)

### Content Restructuring & New Features (October 14, 2025)
Major content reorganization and new sections added:
- **Section Merge**: Merged "For Artists" content into "About Mate Nation" section and renamed entire section to "For Artists"
- **Navigation Update**: Updated all navigation links from "About" to "For Artists" with new anchor #for-artists
- **Mate Search Section**: Added new section showcasing Mate Search AI music search engine with purple gradient design, music note decorations, and benefits for listeners, artists, and A&R professionals
- **Our Works Section**: Added YouTube video embed section displaying latest releases and music videos with link to full YouTube channel
- **Social Links Update**: Updated footer with new social media links (Bluesky, YouTube, Facebook, X, Instagram)
- **Cloudflare Pages**: Fixed deployment configuration with _redirects file for proper SPA routing and updated wrangler.toml

### Visual & UX Enhancements (October 13, 2025)
Implemented 12 key improvements based on user requirements:
- **Shadow Removal**: Removed bubble-glow shadow effects from Artist Showcase section for cleaner visual design
- **About Section Background**: Removed dark shadow background from About Mate Nation section by replacing MinimalistBackground with transparent wrapper
- **Enhanced Record Label Content**: Added two comprehensive paragraphs in About Mate Nation section describing the label's foundation, technology, team expertise, facilities, and artist support services
- **Crew Cards Visibility**: Fixed card stack to show corners of next cards on initial load with improved offset positioning (15px x-offset, 3° rotation, 3% scale reduction)
- **Smooth Card Animations**: Enhanced swipe animations with improved spring physics (stiffness: 300, damping: 25) and removed overflow clipping for seamless transitions
- **Unified Swipe Direction**: Both left and right swipe now move crew cards forward in the same direction for consistent navigation
- **Enhanced Swipe Instructions**: Made "Swipe to see all members" text bold with arrows on both sides (→ Swipe to see all members →)
- **Unified Cloud Design**: Hero section now uses the same cloud image for both light and dark themes for consistent branding
- **Floating Cloud Animation**: Added slow floating animations to clouds (8-10 second duration) for gentle, calming movement
- **Star Theme Control**: Yellow star glows now only appear in night theme and are hidden in day theme for better visual consistency
- **For Artists Section**: Removed dark shadow background for cleaner appearance

### UI/UX Updates (October 12, 2025)
Implemented 5 key improvements to the website based on user feedback:
- **Hero Cursor**: Changed typing cursor from | character to thin square bar (1px wide, responsive height)
- **For Artists Section**: Renamed from "Be Our Part" to "For Artists", removed illustration, centered card layout
- **About Section Redesign**: Streamlined to 3 key artist features - Mix & Mastering, 48hr Distribution, Promotion with 30+ Promoters
- **Crew Cards Fix**: Fixed card stack visibility and glitch issues with remount-based animation resets for smooth transitions
- **Footer Updates**: Updated email to info@matenation.org and improved responsive layout for all screen sizes

### Replit Environment Setup (October 12, 2025)
Successfully configured the project to run in the Replit environment:
- **Dependencies**: Installed all npm dependencies (482 packages)
- **Vite Configuration**: Added port 5000, strictPort, and allowedHosts for Replit proxy compatibility
- **Workflow**: Configured `npm run dev` workflow to run on port 5000 with webview output
- **Build Path**: Fixed production static file serving path from `public` to `client/dist`
- **Deployment**: Configured autoscale deployment with build and start scripts
- **Gitignore**: Created .gitignore for Node.js project with standard exclusions
- **Server Status**: Development server successfully running on port 5000 with HMR enabled

### Scroll Behavior Enhancement (October 12, 2025)
Implemented CSS scroll-snap for smooth section transitions:
- **Scroll Behavior**: Natural scrolling with snap-to-section effect using CSS scroll-snap
- **Section Layout**: Each section takes full viewport height with smooth transitions
- **Footer Positioning**: Footer is sticky at the bottom of the final section
- **User Experience**: Seamless scrolling through sections with visual snap points

### Retro Illustration System (October 12, 2025)
Added comprehensive retro/vintage illustration components throughout the site:
- **Retro Components**: Created reusable SVG components including vinyl records, cassettes, speakers, computers, planets, isometric rooms, and retro grids
- **Animations**: Subtle Framer Motion animations (rotation, floating, scaling) for visual interest
- **Integration**: Retro illustrations added to hero, about, and genres sections as decorative background elements
- **Visual Hierarchy**: Illustrations positioned with low opacity to enhance aesthetic without overwhelming content
- **Performance**: Lightweight SVG-based components with minimal animation overhead

### Complete Design Redesign
The site has been completely redesigned with a modern aesthetic inspired by contemporary web design:
- **Visual Style**: Dark gradient background (#1a1d3d to #0a0b1a) with subtle grid pattern overlay
- **Design Elements**: Retro illustrations with glassmorphism cards and enhanced backdrop-blur-xl effects
- **Color Scheme**: Pink accent colors (#ec4899) for CTAs and highlights, with colorful genre badges
- **Typography**: Clean, modern font hierarchy with light font weights
- **Layout**: Card-based sections with rounded-3xl corners and shadow-xl effects
- **Removed**: Boot screen for instant loading experience
- **Theme Toggle**: Repositioned to top-right corner with glassmorphism styling

### Preserved Features
All original Mate Nation content and features have been maintained:
- **Genres Showcase**: 9 music genres (Electronic, Hip Hop, Rock, Pop, EDM, Experimental, Jazz, Future Bass, Classic) with colorful icons
- Complete team directory (leadership and members)
- Partner integration (Unison Music App)
- Brand ambassadors section
- Contact form with email integration
- Music Hunt interactive game
- Theme toggle (day/night modes)
- Full navigation system with smooth scrolling

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions
- **UI Components**: Comprehensive component library using Radix UI primitives

The frontend follows a component-based architecture with clearly separated concerns:
- Page components handle route-level logic
- UI components provide reusable interface elements
- Custom hooks manage shared logic and state
- Utility functions handle common operations

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **API Design**: RESTful API with structured error handling
- **Development**: Hot module replacement with Vite integration
- **Storage**: In-memory storage implementation with interface for future database integration

The backend uses a modular approach with:
- Route handlers for API endpoints
- Storage abstraction layer for data persistence
- Middleware for request logging and error handling
- Shared schema validation between frontend and backend

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures
- **Planned**: PostgreSQL with Drizzle ORM for production
- **Schema**: Shared TypeScript schemas using Drizzle and Zod for validation
- **Tables**: Users and contact submissions with UUID primary keys

The storage layer uses an interface-based design allowing easy migration from in-memory to database storage without changing application logic.

## Authentication and Authorization
- **Current**: Basic user storage structure in place
- **Implementation**: Username/password based authentication ready for implementation
- **Session Management**: Cookie-based sessions with connect-pg-simple for PostgreSQL session store

## External Dependencies
- **Database**: Neon Database (PostgreSQL) for production data storage
- **UI Framework**: shadcn/ui built on Radix UI primitives
- **Validation**: Zod for runtime type checking and schema validation
- **ORM**: Drizzle with PostgreSQL dialect for type-safe database operations
- **Development Tools**: Replit-specific plugins for development environment integration
- **Styling**: Google Fonts integration for typography (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

The application integrates with external services for enhanced functionality:
- Social media links for artist promotion (Instagram integration shown)
- Partnership integration with Unison Music App for collaboration features
- Font delivery through Google Fonts CDN for consistent typography