"use server"

import { connectToDatabase } from "../mongoose"
import User from "@/database/user.model";
import { GetUserByClerkIdParams } from "./shared.types";

export async function getUserByClerkId(params: GetUserByClerkIdParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = User.findOne({ clerkId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}