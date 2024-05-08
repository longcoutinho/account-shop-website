import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: "wuqDUJ8XW1x8ZV1sRql7EIIGy",
      clientSecret: "SMnVE1clYRg1KoQ3Q8JbjvfuR3h1Ax9x5hw8eU3utVl5UkSxwP",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
