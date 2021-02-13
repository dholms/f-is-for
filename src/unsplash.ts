import axios from 'axios'

const access = 'apOV03z9LRqBrKIDhS0zMrkEhWxwfMJ5KKf50v2XIds'
export const findImage = async (word: string): Promise<string | null> => {
  const resp = await axios.get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${access}&per_page=1`)
  return resp?.data?.results[0]?.urls?.regular || null
}
