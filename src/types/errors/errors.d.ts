export interface CustomError extends Error{
    code?: string,
    userMessage?: string,
    technicalMessage?: data | AxiosError<any, any>
}