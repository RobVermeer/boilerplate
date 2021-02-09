const { getSession } = require('next-auth/client')
import prisma from '~/lib/prisma'

const resolvers = {
  Query: {
    async viewer(_root, _args, context, _info) {
      const session = await getSession(context)

      if (!session) return null

      const { id } = session

      const user = await prisma.user.findUnique({ where: { id } })

      if (!user) return null

      const { name, email, emailVerified, image } = user

      return {
        id,
        name,
        email,
        emailVerified: Boolean(emailVerified),
        image,
      }
    },
  },
}

module.exports = resolvers
