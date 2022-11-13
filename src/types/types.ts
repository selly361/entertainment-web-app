import data from "data/data.json"

export type showsType = typeof data;

export type showType = {
    title: string;
    thumbnail: {
        trending: {
            small: string;
            large: string;
        }
        regular: {
            small: string;
            medium: string;
            large: string;
        }
    }
}