import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: "sJnc3wNBFWKc21TAmcn986Jlz",
      clientSecret: "grULILfPG6rI0qgMCrkvx4e8ZvMwfd01Jan80jjkE5d166qzKC",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
