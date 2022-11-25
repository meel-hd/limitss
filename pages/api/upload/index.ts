import { NextApiRequest, NextApiResponse } from 'next'
import S3 from 'aws-sdk/clients/s3'
import { nanoid } from 'nanoid'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import prisma from 'lib/prisma'

const s3 = new S3({
    region: 'ap-southeast-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const session = await unstable_getServerSession(req, res, authOptions)
    console.log('session',session)
    const user = session?.user?.email
        ? await prisma.user.findUnique({where: {email: session.user.email}})
        : null

        if(!user) {
            return res.status(401).json({ message: 'Unauthorized' })
        }


        console.log('user', user)
    try {
        let { name, type } = req.body

        const fileParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: nanoid() + name,
            Expires: 600,
            ContentType: type,
        }

        const url = await s3.getSignedUrlPromise('putObject', fileParams)
        const fileUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${fileParams.Key}`

        res.status(200).json({ url, fileUrl })
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb', // Set desired value here
        },
    },
}
