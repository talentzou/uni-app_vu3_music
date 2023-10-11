 export interface responseData {
    code: number
    data: mvData[]
}
export type mvData = {
    artistId: number
    artistName: string
    artists: artist[]
    briefDesc: null
    cover: string
    desc: null
    duration: number
    id: number
    mark: number
    name: string
    playCount: number
    subed: boolean
}
type artist = {
    id: number
    name: string
}
