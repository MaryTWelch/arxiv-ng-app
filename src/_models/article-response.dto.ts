export interface ArxivDataResponse {
    status: number;
    message?: string;
    articles: ArticleResponse[];
}

export interface ArticleResponse {
    id: string;
    arxiv_id: string;
    title: string;
    Authors: AuthorResponse[];
    updated: string;
    published: string;
    createdAt: string;
    updatedAt: string;
}

export interface AuthorResponse {
    id: string;
    name: string;
    articleId: string;
    createdAt: string;
    updatedAt: string;
}