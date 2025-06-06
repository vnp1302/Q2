import NextAuth from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'

import { verifyMessage } from '@lib/auth'



export default NextAuth({

  providers: [

    CredentialsProvider({

      name: 'Ethereum',

      credentials: {

        message: { label: "Message", type: "text" },

        signature: { label: "Signature", type: "text" },

        address: { label: "Address", type: "text" }

      },

      async authorize(credentials) {

        try {

          const user = await verifyMessage(

            credentials.message,

            credentials.signature,

            credentials.address

          )

          return user

        } catch (e) {

          return null

        }

      }

    })

  ],

  session: {

    strategy: "jwt"

  },

  jwt: {

    secret: process.env.JWT_SECRET

  },

  callbacks: {

    async jwt({ token, user }) {

      if (user) {

        token.address = user.address

        token.isAdmin = user.isAdmin

      }

      return token

    },

    async session({ session, token }) {

      session.address = token.address

      session.isAdmin = token.isAdmin

      return session

    }

  }

})
