 //时间格式化
export const format = (temp: string) => {
    const tempMinutes = temp?.slice(0, 2)
    const tempSeconds = temp?.slice(3, 8)
    const minutes = Number.parseInt(tempMinutes)
    const seconds = Number.parseFloat(tempSeconds)
    return minutes * 60 + seconds
}