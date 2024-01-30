import express from "express";
import joi from "joi";
import { makeReactToUser } from "./factories/makeReactToUser";
import { isValidObjectId } from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/react-to-user", async (req, res) => {
  try {
    const reactToUser = makeReactToUser();

    const schema = joi.object({
      userId: joi.string().custom((value, helpers) => {
        if (!isValidObjectId(value)) {
          return helpers.error("any.invalid");
        }

        return value;
      }),
      reaction: joi
        .string()
        .valid("like", "love", "haha", "wow", "sad", "angry"),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    await reactToUser.execute(value.userId, value.reaction);

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
