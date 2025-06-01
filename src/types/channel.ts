export type Avatar = {
    url: string;
    hash: string;
    ext: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
}

export type Placeholder = {
    name: string;
    id: string;
    subscribers: number;
    avatar: Avatar[];
}

export interface Channel extends Placeholder {
    joined: Date;
}