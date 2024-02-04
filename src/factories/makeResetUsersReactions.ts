import { MongoUserRepository } from "@/repositories/mongoUserRepository";
import { ResetUserReactions } from "@/services/resetUserReactions";

export function makeResetUsersReactions() {
  const userRepository = new MongoUserRepository();
  const resetUserReactions = new ResetUserReactions(userRepository);

  return resetUserReactions;
}
