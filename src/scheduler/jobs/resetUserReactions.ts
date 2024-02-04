import { makeResetUsersReactions } from "@/factories/makeResetUsersReactions";

export async function resetUserReactionsJob() {
  try {
    const resetUserReactions = makeResetUsersReactions();
    await resetUserReactions.execute();
  } catch (error) {
    console.error("Error on resetUserReactions", error);
  }
}
