import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";

const handler = NextAuth(authOptions)

export {handler as Get , handler as POST}