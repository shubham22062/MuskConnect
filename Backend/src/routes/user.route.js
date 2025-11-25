import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendRequest,
  getMyFriends,
  getOutgoingFriendRegs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";
import { get } from "mongoose";

const router = express.Router();

router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends)

router.post("/friends-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("friend-request", getFriendRequest);
router.get("/outgoing-friend-request",getOutgoingFriendRegs);


export default router;