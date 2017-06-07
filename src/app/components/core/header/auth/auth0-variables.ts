interface AuthConfiguration {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfiguration = {
  clientID: 'mCyEmx4GjQskqhAjm03WTl1PrJ9ITzLz',
  domain: 'ssergienko.auth0.com',
  callbackURL: 'http://localhost:3000/home'
};
