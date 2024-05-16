import { User } from '../models/user';

const BASE_USER: User = {
  id: "507f1f77bcf86cd799439011",
  firstName: "Jamie",
  lastName: "Doe",
  gender: "M",
  email: "jamie.doe@example.com",
  subscriptions: [],
};

export const USER_WITH_ONE_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: ["RIGHT_1"],
};

export const USER_WITHOUT_SUBSCRIPTION: User = { ...BASE_USER, subscriptions: [] };

export const USER_WITH_MULTIPLE_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: ["RIGHT_1", "RIGHT_2"],
};

export const useUser = (): User => {
  return USER_WITH_ONE_SUBSCRIPTION;
};