export interface Product {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
    price: number;
    userRatings: number;
    createdDateTime: Date;
    tags: Array<string>;
}
