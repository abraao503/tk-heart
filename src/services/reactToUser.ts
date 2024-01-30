import {
  UserRepository,
  Reaction,
} from "../repositories/interfaces/UserRepository";

export class ReactToUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string, reaction: Reaction): Promise<void> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new Error(`User ${userId} not found`);
    }

    await this.userRepository.reactToUser(userId, reaction);
  }
}
