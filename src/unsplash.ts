import axios from 'axios'
import bible from './data/bible.json'
import fiftyShades from './data/fifty_shades.json'
import orderOfPhoenix from './data/order_of_the_phoenix.json'
import warAndPeace from './data/war_and_peace.json'

const access = 'apOV03z9LRqBrKIDhS0zMrkEhWxwfMJ5KKf50v2XIds'
export const findImage = async (word: string): Promise<string | null> => {
  const resp = await axios.get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${access}&per_page=1`)
  return resp?.data?.results[0]?.urls?.regular || null
}

type resp = {
  img: string
  word: string
}

type dict = { [letter: string]: string[]}

export const findWordAndImage = async (dictName: string, letter: string): Promise<resp> => {
  const dict = selectDict(dictName)
  const options = dict[letter]
  let img, word
  while(!img || !word){
    const randomI = Math.floor(Math.random() * options.length)
    word = options[randomI]
    img = await findImage(word)
  }
  return { img, word }
}

export const selectDict = (name: string): dict =>  {
  if(name === 'bible') return bible
  if(name === 'war_and_peace') return warAndPeace
  if(name === 'fifty_shades') return fiftyShades
  if(name === 'order_phoenix') return orderOfPhoenix
  throw new Error("not a valid name")
}
