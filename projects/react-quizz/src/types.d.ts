export interface Question {
    id: number,
    question: string,
    alternatives: Alternative[],
    userSelectedAnswer?: number
}

export interface Alternative {
    option: string,
    isCorrect: boolean
}