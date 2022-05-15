interface goodsInfoType {
    key: number,
    name: string,
    quan: number,
    unit: string,
    mark?: string,
}
interface userInfo{
    userName: string,
    password: string
}
interface currnetItemType extends goodsInfoType {
    newQuan: number
}
export type { currnetItemType, goodsInfoType, userInfo }