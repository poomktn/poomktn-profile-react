import { atom } from 'recoil';
export const nameState = atom({
    key: 'nameState',
    default: '' as string
})
export const countState = atom({
    key: 'countState',
    default: 0 as number
})