export class Likes {
    constructor(
        private userId: string,
        private postsId: string,
        private likedPosts: number, // guarda 1 ou 0 para true ou false
        private likedComment: number // guarda 1 ou 0 para true ou false
    ) { }

    getUserId(): string {
        return this.userId
    }

    setUserId(value: string): void {
        this.userId = value
    }

    getPostId(): string {
        return this.postsId
    }

    setPostId(value: string): void {
        this.postsId = value
    }

    getLikePosts(): number {
        return this.likedPosts
    }

    setLikePosts(value: number): void {
        this.likedPosts = value
    }

    getLikeComment(): number {
        return this.likedComment
    }
    
    setLikeComment(value: number): void {
        this.likedComment = value
    }

}