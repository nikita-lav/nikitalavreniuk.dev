export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IExperienceClient {
    name: string;
    description: string[];
    techStack: string[];
}

export interface IExperience {
    title: string;
    company: string;
    duration: string;
    description: string[];
    techStack: string[];
    clients?: IExperienceClient[];
}

export interface IProject {
    title: string;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}
