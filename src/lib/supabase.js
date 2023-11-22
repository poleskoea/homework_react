import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://ekndownyjmlnsohjxqoz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbmRvd255am1sbnNvaGp4cW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODczODYsImV4cCI6MjAxNjA2MzM4Nn0.8H7lhzyWM3M7MS-xm-AWIBJYh08D5l7nWzL-oCKgwIU"
);
