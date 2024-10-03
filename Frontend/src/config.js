const config = {
  local: {
    apiUrl: 'http://localhost:5555/api/blogs',
  },
  remote: {
    apiUrl: 'https://oose-teamrookieenginners-backend.onrender.com/api/blogs',
  },
};

const activeEnv = 'remote'; // Change to 'remote' for deployment, 'local' for local testing (using our own backend)

export default config[activeEnv];
