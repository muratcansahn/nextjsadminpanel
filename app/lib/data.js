import { connectToDB } from "./utils";
import {User} from "./models";

export const fetchUsers = async () => {
  try {
   await connectToDB();
    const Users = await User.find({});
    return Users;

  }
    catch (error) { 
        throw new Error('Error fetching users: ' + error);
        }

}