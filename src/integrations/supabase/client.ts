// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nogcaqjknfkaymreilqr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vZ2NhcWprbmZrYXltcmVpbHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4ODA3MDcsImV4cCI6MjA0OTQ1NjcwN30.Fwd9hOeOuw2IGV6enIrhJTOxea0IsJbkLLQnnPHkKF4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);