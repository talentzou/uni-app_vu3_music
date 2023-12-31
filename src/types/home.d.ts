// export type blocks = {
//     action?: string
//     actionType?: string
//     blockCode: string
//     blockDemote: boolean
//     blockStyle: number
//     canClose: boolean
//     canFeedback: boolean
//     creatives: creatives[]
//     dislikeShowType: number
//     resourceIdList?: string[]
//     showType: string
//     sort: number
//     uiElement: uiElement[]
// }
export type creatives = {
    resources: []
    uiElement: uiElement
    [string: string]: any
}
export type uiElement = {
    image: { imageUrl: string }
    labelTexts: string[]
    mainTitle: { title: string; canShowTitleLogo: boolean }
    rcmdShowType: string
}
export type resources = {
    resourceExtInfo?: any
    resourceId?: string
    uiElement?: uiElement
    [string: string]: any
}
export type banners = {
    code: number
    banners: [{ imageUrl: string; [string: string]: any }]
}
//发现入口导航栏
export type tabbarData = {
    homepageMode: string
    iconUrl: string
    id: number
    name: string
    resourceState: null
    skinSupport: boolean
    url: string
}


