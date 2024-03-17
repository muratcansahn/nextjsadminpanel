import { connectToDB } from "./utils";
import {User,Product} from "./models";

export const fetchUsers = async (
  q,page
) => {
  const reqex = new RegExp(q, 'i');///means case insensitive
  const ITEM_PER_PAGE = 2;
  try {
   await connectToDB();
   const count = await User.countDocuments({
    username:{
      $regex: reqex
    }
  });

  const users = await User.find({
      username:{
        $regex: reqex
      }
    }).limit(ITEM_PER_PAGE).skip((page-1)*ITEM_PER_PAGE);
    return {count,users};

  }
    catch (error) { 
        throw new Error('Error fetching users: ' + error);
        }

}
export const fetchProducts= async (
  q,page
) => {

  const reqex = new RegExp(q, 'i');///means case insensitive
  const ITEM_PER_PAGE = 2;
  try {
   await connectToDB();
   const count = await Product.countDocuments({
    title:{
      $regex: reqex
    }
  });

  const products = await Product.find({
      title:{
        $regex: reqex
      }
    }).limit(ITEM_PER_PAGE).skip((page-1)*ITEM_PER_PAGE);
    return {count,products};

  }
    catch (error) { 
        throw new Error('Error fetching users: ' + error);
        }

}