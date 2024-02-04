import { UserModel } from "../models/mongoUserModel";
import { Reaction, User, UserRepository } from "./interfaces/UserRepository";

export class MongoUserRepository implements UserRepository {
  async getUserById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id);

    if (!user) {
      return null;
    }

    return {
      id: user._id.toString(),
      name: user.name ?? "",
      profilePictureUrl: user.profilePictureUrl ?? null,
      reactions: {
        like: user?.reactions?.like || 0,
        love: user?.reactions?.love || 0,
        haha: user?.reactions?.haha || 0,
        wow: user?.reactions?.wow || 0,
        sad: user?.reactions?.sad || 0,
        angry: user?.reactions?.angry || 0,
      },
    };
  }

  async reactToUser(userId: string, reaction: Reaction): Promise<void> {
    await UserModel.updateOne(
      { _id: userId },
      { $inc: { [`reactions.${reaction}`]: 1 } }
    );
  }

  async getAll(): Promise<User[]> {
    const users = await UserModel.find();

    return users.map((user) => ({
      id: user._id.toString(),
      name: user.name ?? "",
      profilePictureUrl: user.profilePictureUrl ?? null,
      reactions: {
        like: user?.reactions?.like || 0,
        love: user?.reactions?.love || 0,
        haha: user?.reactions?.haha || 0,
        wow: user?.reactions?.wow || 0,
        sad: user?.reactions?.sad || 0,
        angry: user?.reactions?.angry || 0,
      },
    }));
  }

  async resetReactions(): Promise<void> {
    await UserModel.updateMany(
      {},
      {
        reactions: {
          like: 0,
          love: 0,
          haha: 0,
          wow: 0,
          sad: 0,
          angry: 0,
        },
      }
    );
  }
}
