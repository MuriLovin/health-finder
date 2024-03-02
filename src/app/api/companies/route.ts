import { NextResponse } from "next/server";
import connection from "../../../../database/connection";

export async function GET(request: Request) {
  const result = await connection.query(
    "SELECT * FROM companies ORDER BY name asc"
  );
  return NextResponse.json({ data: result[0] });
}
