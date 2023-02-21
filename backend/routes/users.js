import express from "express"
import { getUser, getUserFriends, addRemoveFriend} from "../controllers/users.js"
import { VerifyToken } from "../middleware/auth.js"