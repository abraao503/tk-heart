export const reactions = [
  "like",
  "love",
  "haha",
  "wow",
  "sad",
  "angry",
] as const;

export type Reaction = (typeof reactions)[number];

export type User = {
  id: string;
  name: string;
  profilePictureUrl: string | null;
  reactions: Record<Reaction, number>;
};

export interface UserRepository {
  getUserById(id: string): Promise<User | null>;

  reactToUser(userId: string, reaction: Reaction): Promise<void>;

  getAll(): Promise<User[]>;

  resetReactions(): Promise<void>;
}
