// import { jwtVerify } from "jose";

export async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;

  try {
    // await jwtVerify(token, new TextEncoder().encode(), {
    //   algorithms: ["HS256"],
    // });

    return true;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
    return false;
  }
}
