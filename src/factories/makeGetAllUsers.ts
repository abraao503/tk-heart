import { MongoUserRepository } from "@/repositories/mongoUserRepository";
import { GetAllUsers } from "@/services/getAllUsers";

export function makeGetAllUsers() {
  const userRepository = new MongoUserRepository();
  const getAllUsers = new GetAllUsers(userRepository);

  return getAllUsers;
}
