import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sucqoiievtuwkmwuxebu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1Y3FvaWlldnR1d2ttd3V4ZWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMDQxOTksImV4cCI6MjA0MDc4MDE5OX0.VdRsuBD-UWcg-_78dcBFQMju24u2S6gFS4u4wLB2yyE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
