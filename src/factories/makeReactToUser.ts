import { MongoUserRepository } from "@/repositories/mongoUserRepository";
import { ReactToUser } from "@/services/reactToUser";

export function makeReactToUser() {
  const userRepository = new MongoUserRepository();
  const reactToUser = new ReactToUser(userRepository);

  return reactToUser;
}
