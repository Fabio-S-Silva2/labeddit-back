export class Posts {
    constructor(
        private id: string,
        private usersId: string,
        private post: string,
        private comments: string[],
        private createdAt: string
    ) { }

    getId(): string {
        return this.id
    }

    setId(value: string): void {
        this.id = value
    }

    getUsersId(): string {
        return this.usersId
    }

    setUsersId(value: string): void {
        this.usersId = value
    }

    getPost(): string {
        return this.post
    }

    setPost(value: string): void {
        this.post = value
    }
    getComments(id: string): string[] {
        return this.comments
    }

    setComments(value: string): void {
        this.comments + value
    }

    getCreatedAt(): string {
        return this.createdAt
    }


}