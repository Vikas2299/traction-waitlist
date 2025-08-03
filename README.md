# Traction - Student Finance Rewards Platform

Traction is the first debit card that rewards students for paying tuition, student loans, and educational expenses. This website serves as the landing page and waitlist collection platform for the Traction platform.

## Features

- **Modern Design**: Built with Next.js 14 and Tailwind CSS using a custom earth tone color palette
- **Waitlist System**: Integrated with Supabase for collecting and managing waitlist entries
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Proper meta tags and structured content

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom earth tone color palette
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd traction-site
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase Database:

Create a new table called `waitlist` with the following structure:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  university TEXT,
  student_status TEXT CHECK (student_status IN ('current', 'graduate', 'prospective')),
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
traction-site/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── Stats.tsx          # Statistics section
│   ├── Footer.tsx         # Footer
│   └── WaitlistForm.tsx   # Waitlist form
├── lib/                   # Utility libraries
│   └── supabase.ts        # Supabase client and functions
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## Color Palette

The website uses a custom earth tone color palette:

- **Primary Browns**: `earth-600` (#8b6b5a), `earth-700` (#6d5a4a)
- **Sage Greens**: `earth-sage` (#9ca88c), `earth-moss` (#5a6d5a)
- **Terracotta**: `earth-terracotta` (#b87a5a), `earth-rust` (#a86b4a)
- **Neutrals**: `earth-50` (#f8f6f3), `earth-100` (#f0ede8)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary and confidential.

## Contact

For questions about this project, contact the development team.

---

**Traction** - Turning student loan payments into rewards.
