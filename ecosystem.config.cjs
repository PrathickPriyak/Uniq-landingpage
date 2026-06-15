module.exports = {
  apps: [
    {
      name: "uniq-landingpage",
      script: "pnpm",
      args: "start",
      cwd: "/var/www/uniq-landingpage",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
}
