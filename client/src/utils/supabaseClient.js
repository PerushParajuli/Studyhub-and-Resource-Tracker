import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseApi = import.meta.env.VITE_SUPABASE_API

export const supabase = createClient(supabaseUrl, supabaseApi)