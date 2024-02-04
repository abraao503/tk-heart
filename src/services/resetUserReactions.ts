import { UserRepository } from "@/repositories/interfaces/UserRepository";

export class ResetUserReactions {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<void> {
    await this.userRepository.resetReactions();
  }
}
