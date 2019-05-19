import Address from "./Address";

export class User {
    constructor() {
        this.id = 0
        this.firstName = ""
        this.lastName = ""
        this.age = 0
        this.email = ""
        this.dateOfBirth = ""
        this.identityNumber = 0
        this.address = new Address()
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    id: number
    firstName: string
    lastName: string
    age: number
    email: string
    dateOfBirth: string
    identityNumber: number
    address: Address
    createdAt: Date
    updatedAt: Date
}

export default User