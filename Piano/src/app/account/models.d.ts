interface ILoginModel {
  email: string;
  password: string;
  //rememberMe: boolean;
}

interface ISignUpModel {
  email: string;
  confirmEmail: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  termsAndConditionsAccepted: boolean;
}

interface IForgotPasswordModel {
  email: string;
}

interface IResetPasswordModel {
  newPassword: string;
  confirmPassword: string;
  email: string;
  identifier: string;
  token: string;
  termsAndConditionsAccepted: boolean;
}

interface IAccountActionResult {
  succeeded: boolean;
  errors?: any[];
}

interface IExpiredPageReason {
  reason: number;
}

interface IPasswordChangeModel {
  password: string;
  newPassword: string;
  confirm: string;
}

interface ILoggedInOtherDeviceModel extends ILoginModel {
  logout_code: string;
  redirectUrl: string;
}
