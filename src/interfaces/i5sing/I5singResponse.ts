export interface I5singResponse<T extends any> {
    code: number;
    data: T;
    message: string;
    success: boolean;
}
