/** @type {import('next').NextConfig} */

module.exports = {

  reactStrictMode: true,

  env: {

    ETH_CONTRACT_ADDRESS: process.env.ETH_CONTRACT_ADDRESS,

    POLYGON_CONTRACT_ADDRESS: process.env.POLYGON_CONTRACT_ADDRESS,

  },

  async headers() {

    return [

      {

        source: '/api/:path*',

        headers: [

          { key: 'Access-Control-Allow-Credentials', value: 'true' },

          { key: 'Access-Control-Allow-Origin', value: '*' },

          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },

        ]

      }

    ]

  }

}
