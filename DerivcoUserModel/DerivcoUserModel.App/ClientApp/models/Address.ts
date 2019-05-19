export class Address {
    constructor() {
        this.id = 0
        this.lineOne = ""
        this.lineTwo = ""
        this.city = ""
        this.country = ""
        this.postalCode = ""
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    id: number
    lineOne: string
    lineTwo: string
    city: string
    country: string
    postalCode: string
    createdAt: Date
    updatedAt: Date
}

export default Address