'use client';

import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('❌ Supabase 환경변수 누락. .env.local 확인 요망');
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);