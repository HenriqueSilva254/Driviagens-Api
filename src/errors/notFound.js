export function notFound(resource = "Item") {
    return {
        type: "notFound", 
        message: `${resource} não foi encontrado`
    }
}

