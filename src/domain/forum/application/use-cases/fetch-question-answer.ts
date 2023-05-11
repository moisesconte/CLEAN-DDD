import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface FetchQuestionAnswersCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnswersCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersCaseRequest): Promise<FetchQuestionAnswersCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
