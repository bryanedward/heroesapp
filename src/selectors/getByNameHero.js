import { heroes } from "../data/heroes"

export const getByNameHero = (nameHero) => {
    return heroes.filter(item => item.superhero.toLowerCase().includes(nameHero.toLowerCase()))
}