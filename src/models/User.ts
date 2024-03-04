export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ) { }

    getId(): string {
        return this.id
    }

    setId(value: string): void {
        this.id = value
    }

    getName(): string {
        return this.name
    }

    setName(value: string): void {
        this.name = value
    }

    getEmail(): string {
        return this.email
    }

    setEmail(value: string): void {
        this.email = value
    }

    getPassword(): string {
        return this.password
    }

    setPassword(value: string): void {
        this.password = value
    }

    getCreatedAt(): string {
        return this.createdAt
    }

}