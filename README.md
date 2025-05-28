# Studyhub and Resource Tracker

A web application designed to help users manage their study schedules, resources, and events efficiently. The project includes features like authentication, a dashboard, event planning, resource management, and more.

## Features

- **Authentication**: Secure user login and registration using Supabase.
- **Dashboard**: Overview of tasks, events, and resources.
- **Event Planner**: Plan and manage your study events.
- **Resource Management**: Organize and track study materials.
- **Chat**: Collaborate with peers in real-time.
- **Settings**: Customize your preferences, including theme (light/dark mode).

## Tech Stack

- **Frontend**: React, Tailwind CSS, Material Tailwind
- **Backend**: Supabase (for authentication and database)
- **Build Tool**: Vite

## Project Structure

```
Studyhub and Resource Tracker/
├── client/                # Frontend code
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Context providers (Auth, Theme)
│   │   ├── pages/         # Application pages
│   │   ├── utils/         # Utility functions (e.g., Supabase client)
│   │   └── router.jsx     # Application routes
│   ├── public/            # Static assets
│   ├── package.json       # Client dependencies
│   └── vite.config.js     # Vite configuration
├── package.json           # Root dependencies (if any)
└── README.md              # Project documentation
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Studyhub-and-Resource-Tracker
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the `client` directory with the following variables:
```env
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: Your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [Perush Parajuli](mailto:your-email@example.com).
