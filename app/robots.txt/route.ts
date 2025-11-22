import { NextResponse } from "next/server";

export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://agentic-2a499630.vercel.app/sitemap.xml`;
  return new NextResponse(body, { headers: { "content-type": "text/plain" } });
}
