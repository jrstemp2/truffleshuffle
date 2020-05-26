export interface User
{
  id: number;
  userName: string;
  displayName: string;
  userPassword: string;
  weightLossGoal: number;
}

export interface UserLogin {
  success: boolean;
  errorMessage: string;
  user: User;
}
