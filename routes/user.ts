import * as express from 'express';
import { prisma } from '../prisma/client';
import { ZodError, z } from "zod"
const router = express.Router();

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string()
})

router.get("/", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    return res.status(200).json({ users: allUsers });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = await req.body;
    const { email, name } = UserSchema.parse(data);

    const existUser = await prisma.user.findFirst({
      where: {
        email
      }
    })
    if (existUser) {
      return res.status(409).json({ message: "User already exits" });
    }

    const user = await prisma.user.create({
      data: { email, name }
    })
    return res.status(200).json({ message: "User created Successfully", user });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(500).json({ message: error.issues[0].message });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId
      }
    })
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export const userRouter = router;
