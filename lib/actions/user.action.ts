"use server"

import { connectToDatabase } from "../mongoose"
import User from "@/database/user.model";
import { CreateUserParams, DeleteUserParams, GetAllUsersParams, GetUserByClerkIdParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

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

export async function createUser(params: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, { new: true })

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    if (!user)
      throw new Error('User not found');

    // delete everything user has ever done - question, answer, comment, upvotes, downvotes
    // const userQuestionIds = await Question.find({ author: user._id }).distinct('_id')

    await Question.deleteMany({ author: user._id })
    
    const deletedUser = await User.findByIdAndDelete(user._id)
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    connectToDatabase()
    // const { page = 1, pageSize = 10, filter, searchQuery } = params

    const users = await User.find({}).sort({ createdAt: -1 })

    return { users }
  } catch (error) {
    console.log(error)
    throw error
  }
}