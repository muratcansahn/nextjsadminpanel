import { connectToDB } from "./utils";
import {User} from "./models";

export const fetchUsers = async (
  q
) => {
  const reqex = new RegExp(q, 'i');///means case insensitive
  try {
   await connectToDB();
    const Users = await User.find({
      username:{
        $regex: reqex
      }
    });
    return Users;

  }
    catch (error) { 
        throw new Error('Error fetching users: ' + error);
        }

}