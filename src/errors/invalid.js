export function invalid(resource) {
    return {
        type: "invalid", 
        message: resource
    }
}
