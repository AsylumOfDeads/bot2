import { load } from 'cheerio'
import axios from 'axios'

const firstServer = 'https://gamingservers.ru/search/?q=146.19.87.179%3A27015'
const secondSrver = 'https://gamingservers.ru/search/?q=146.19.87.179%3A27016'
const thirdServer = 'https://gamingservers.ru/search/?q=146.19.87.179%3A27017'

export default async function getOnline() {
    const first = await axios.get(firstServer)
    const second = await axios.get(secondSrver)
    const third = await axios.get(thirdServer)

    const $first = load(first.data)
    const $second = load(second.data)
    const $third = load(third.data)

    const firstOnline = $first('.players').text()
    const secondOnline = $second('.players').text()
    const thirdOnline = $third('.players').text()

    const firstOnlineTrim = firstOnline.replace(/\s/g, '')
    const secondOnlineTrim = secondOnline.replace(/\s/g, '')
    const thirdOnlineTrim = thirdOnline.replace(/\s/g, '')

    return [
        firstOnlineTrim,
        secondOnlineTrim,
        thirdOnlineTrim
    ]
}