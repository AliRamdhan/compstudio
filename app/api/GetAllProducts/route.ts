import { NextResponse } from "next/server";
// export async function GET() {
//   const res = await fetch(
//     "https://api.github.com/search/users?q=richard&amp;per_page=3"
//   );
//   const data = await res.json();
//   return NextResponse.json(data);
// }
export async function GET() {
  // username parent route
  return new Response("This is my parent route");
}
