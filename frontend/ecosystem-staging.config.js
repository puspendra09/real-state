module.exports = {
  apps: [
    {
      name: "the-frontend-staging",
      script: "yarn",
      time: true,
      args: "start",
	  env: {
        HOST: "0.0.0.0",
        PORT: 3001,
        PUBLIC_URL: "https://",
      },
    },
  ],
};