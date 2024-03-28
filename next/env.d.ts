declare module 'process' {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                NODE_ENV?: string;
                DATABASE_URL: string; // Supabase の Session URI
                DIRECT_URL: string; // Supabase の Transaction URI
                GOOGLE_CLIENT_ID: string;
                GOOGLE_CLIENT_SECRET: string;
                URL: string; // ウェブサイトが動いてるURL (etc: http://localhost:3000/)
            }
        }
    }
}
