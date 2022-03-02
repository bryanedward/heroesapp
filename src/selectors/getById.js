import { heroes } from "../data/heroes"

export const getById = (id) => {
    return heroes.find(item => item.id === id)
}