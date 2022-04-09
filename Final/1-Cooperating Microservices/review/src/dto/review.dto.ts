


export class Review {
    constructor(
        public productId: number,
        public reviewId: number,
        public author: string,
        public subject: string,
        public content: string) { }
}