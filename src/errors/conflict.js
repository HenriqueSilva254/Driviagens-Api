export function conflict(resource) {
    return {
        type: "conflict", 
        message: `${resource ? resource : "Item"} já existe!`
    }
}

export function conflictFlights(resource) {
    return {
        type: "conflict", 
        message: `Destinos não podem ser iguais`
    }
}