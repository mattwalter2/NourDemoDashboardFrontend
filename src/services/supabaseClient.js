// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY

// if (!supabaseUrl || !supabaseAnonKey) {
//     throw new Error('Supabase env vars missing')
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// --- MOCK SUPABASE TO PREVENT ERRORS ---
export const supabase = {
    auth: {
        getSession: async () => ({ data: { session: null } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
        signInWithPassword: async () => ({ data: null, error: null }),
        signOut: async () => ({ error: null }),
    },
    from: () => ({
        select: () => ({ data: [], error: null }),
        insert: () => ({ data: [], error: null }),
        update: () => ({ data: [], error: null }),
        delete: () => ({ data: [], error: null }),
    })
}