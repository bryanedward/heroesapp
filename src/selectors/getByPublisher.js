import { heroes } from "../data/heroes"


export const getHeroesByPublisher = (publisher) => {
    
    const publisherPermit = ['DC Comics', 'Marvel Comics']
    
    if (!publisherPermit.includes(publisher)) {
        return 'ok'
    }
    return heroes.filter(item => item.publisher = publisher)
}