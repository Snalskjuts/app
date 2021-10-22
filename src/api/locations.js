import { isProduction } from "../environment"

const locations = ["Varberg", "Falkenberg", "Göteborg", "Stockholm", "Malmö"]

export const searchSingleLocation = async name => {
    if (isProduction()) {
        throw new Error("not implemented")
    } else {
        const location = locations.find(loc => loc.includes(name))
        return location
    }
}