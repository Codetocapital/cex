export const authConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  redirectUri: window.location.origin,
  scope: 'openid profile email',
}

export const demoCredentials = {
  username: 'demo',
  password: 'demo123'
}

export const adminCredentials = {
  username: 'admin',
  password: 'admin123'
}