export interface Game{
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publisher>;
    ratings: Array<Rating>;
    screehshots: Array<Screenshot>;
    trailers: Array<Trailer>;
}

export interface APIResponse<T>{
    result: Array<T>;
}