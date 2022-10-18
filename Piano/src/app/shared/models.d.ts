// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface JWT {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  client_id: string;
}

interface IStateParamsUrls {
  currentUrl: string;
  previousUrl: string;
}

interface IStateParams {
  url?: string;
  postcode?: string;
  radius?: number;
  careHomeId?: number;
  plannedHomeId?: number;
  postcodes?: number[];
  careHomes?: number[];
  // authority
  code?: string;
  details?: boolean;
  fitBounds?: boolean;
}

interface IUrlChangeParams {
  current: IStateParams;
  previous: IStateParams;
  diff: IStateParams;
}

type Role = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface User {
  role: Role;
  country: string;
  city: string;
  telephone: string;
  name: string;
  login: string;
  password: string;
  links: string;
}

interface IUserDetails {
  username: string;
  email: string;
  telephone: string;
  role: number;
  country: string;
  city: string;
  password: string;
}
