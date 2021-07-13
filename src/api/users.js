import { isProduction } from "../environment"

const inMemoryUsers = []

export const authenticateUserCredentials = async (email, password) => {
    if (isProduction()) {
        throw new Error("not implemented")
    } else {
        const user = inMemoryUsers.find(user => user.email === email && user.password === password)
        if (!user) {
            throw new Error("invalid credentials")
        } else {
            return {...user, jwt: "test_jwt_token"}
        }
    }
}

export const registerUser = async ({
    email,
    password,
    firstName,
    lastName,
    birthYear
}) => {
    if (isProduction()) {
        throw new Error("not implemented")
    } else {
        console.log({ email, password, firstName, lastName, birthYear })
        const exists = !!inMemoryUsers.find(user => user.email === email)
        if (exists) {
            throw new Error("user already exists")
        }
        inMemoryUsers.push({
            email,
            password,
            firstName,
            lastName,
            birthYear,
            id: `IN_MEMORY_USER_${inMemoryUsers.length}`
        })
        console.log(inMemoryUsers)
    }
}

export const getUserById = async id => {
    if (isProduction()) {
        throw new Error("not implemented")
    } else {
        return {
            id: "abc123",
            email, 
            firstName: "Test",
            lastName: "Testsson",
            jwt: "123456"
        }
    }
}