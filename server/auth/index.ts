import { AuthChecker, UnauthorizedError } from "type-graphql";
import { Context } from "../types/Context";

export const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  const { user } = context;
  // First Check if `@Authorized()`, no roles required
  // if not restrict access
  if (!user) {
    throw new UnauthorizedError();
  }
  // Second Check if `@Authorized('ROLE-X')`, require ROLE-X
  // if not restrict access
  if (roles.length > 0) {
    if (user.role !== roles[0]) {
      throw new UnauthorizedError();
    }
  }
  // If no roles required, or if user has required role,
  //grant access
  return true;
};
