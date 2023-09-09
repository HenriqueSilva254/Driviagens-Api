export function conflict(resource) {
    return {
        type: "conflict", 
        message: resource
    }
}
