import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mozopmztsiwognmqumqx.supabase.co";
const supabasePublishableKey = "sb_publishable_ToRKuDky9WQpcLteNzAiag_Vx8iXlBL";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
