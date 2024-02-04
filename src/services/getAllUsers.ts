import { User, UserRepository } from "@/repositories/interfaces/UserRepository";

export class GetAllUsers {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
