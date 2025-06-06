const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL



export const fetchTokenData = async (tokenId) => {

  const res = await fetch(`${API_BASE_URL}/tokens/${tokenId}`)

  if (!res.ok) throw new Error('Failed to fetch token data')

  return await res.json()

}



export const submitContactForm = async (formData) => {

  const res = await fetch(`${API_BASE_URL}/contact`, {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json'

    },

    body: JSON.stringify(formData)

  })

  return await res.json()

}



// Authentication

export const authUser = async (signature, publicAddress) => {

  const res = await fetch(`${API_BASE_URL}/auth`, {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json'

    },

    body: JSON.stringify({ signature, publicAddress })

  })

  return await res.json()

}
