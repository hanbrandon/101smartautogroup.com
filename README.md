# 101 Smart Auto Group — Jake Kim

Premium automotive sourcing and dealership services based in Los Angeles and Orange County. This platform is designed to provide a transparent, high-end experience for clients looking to find their perfect drive.

## 🏎️ About the Project

101 Smart Auto Group, led by Jake Kim, specializes in connecting clients with premium and luxury vehicles. This website serves as a digital storefront and personal branding platform, showcasing services, client testimonials, and recent automotive highlights.

### Key Features

- **Custom Sourcing**: Specialized search for rare and luxury vehicles.
- **Contact Inquiries**: Integrated 2-tab contact drawer (New Car & Sell Your Car) with Brevo email notifications.
- **Credit Application**: Secure multi-step online financing application page.
- **Privacy Shield**: One-click "Do Not Sell" opt-out functionality with GPC detection.
- **Instagram Gallery**: Real-time updates and recently delivered vehicles.
- **Premium Design**: Sleek Orange & Black aesthetic optimized for all devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Switzer & Inter via Google Fonts and Fontshare

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hanbrandon/101smartautogroup.com.git
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Run the development server:

    ```bash
    pnpm dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Configuration

The project requires several environment variables for full functionality. Create a `.env.local` file based on `.env.example`:

### Brand Information
- `NEXT_PUBLIC_MANAGER_NAME`: Displays the manager's name across the site.
- `NEXT_PUBLIC_PHONE`: Primary contact phone number.
- `NEXT_PUBLIC_EMAIL`: Primary contact email.

### Email Service (Brevo)
- `BREVO_API_KEY`: Required for sending contact inquiries and credit applications.
- `NOTIFICATION_EMAIL`: The recipient email address for all form submissions.

## 📄 License

© 2026 101 Smart Auto Group. All rights reserved.
Built by [Sang Hyun Han](https://gawoori.com).
