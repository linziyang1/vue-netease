
import ajax from "./ajax"


export const reqNavSwiper = () => ajax("/banner")

export const reqData = () => ajax("/data")

export const reqHome = () => ajax("/home")

export const reqClassify = () => ajax("/detail")

export const reqClassifyNav = () => ajax("/nav")
