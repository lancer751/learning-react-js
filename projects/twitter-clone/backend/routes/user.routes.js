import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUserProfile } from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.get("/profile/:username", protectRoute, getUserProfile)
userRouter.get("/suggested", protectRoute, getSuggestedUsers)
userRouter.post("/follow/:id", protectRoute, followUnfollowUser)
userRouter.put("/update/", protectRoute, updateUserProfile)


export default userRouter