import { NextApiRequest, NextApiResponse } from 'next'

import { connectDB } from '@lib/db'

import Token from '@models/Token'



export default async function handler(

  req: NextApiRequest,

  res: NextApiResponse

) {

  await connectDB()

  const { id } = req.query



  try {

    switch (req.method) {

      case 'GET':

        const token = await Token.findById(id)

        if (!token) {

          return res.status(404).json({ error: 'Token not found' })

        }

        return res.status(200).json(token)

      

      case 'PUT':

        // Verify admin access

        if (!req.headers['admin-key'] === process.env.ADMIN_API_KEY) {

          return res.status(403).json({ error: 'Unauthorized' })

        }

        

        const updatedToken = await Token.findByIdAndUpdate(

          id, 

          req.body, 

          { new: true }

        )

        return res.status(200).json(updatedToken)

      

      default:

        return res.status(405).json({ error: 'Method not allowed' })

    }

  } catch (error) {

    return res.status(500).json({ error: error.message })

  }

}
