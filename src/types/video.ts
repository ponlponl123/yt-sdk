import { Placeholder as ChannelPlaceholder } from "./channel";

export type Thumbnail = {
    url: string;
    hash: string;
    ext: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
}

export interface Meta {
    title: string;
    description: string;
    like: number;
    dislike: number;
    view: number;
    date: Date;
    tags: string[];
    thumbnail: Thumbnail[];
    author: ChannelPlaceholder;
}