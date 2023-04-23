require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [
    {
      name: 'backend',
      script: './dist/app.js',
    },
  ],

  deploy: {
    production: {
      // key: '/home/alena_ismagilova/.ssh/id_rsa',
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'pre-setup': 'rm -rf web-plus-pm2-deploy',
      'pre-deploy-local': 'pwd',
      // eslint-disable-next-line max-len
      // 'post-setup': `scp /home/alena/development/praktikum/web-plus-pm2-deploy/backend/.env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}`,
      // eslint-disable-next-line max-len
      // 'pre-deploy-local': `scp ./.env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/source/backend`,
      // 'post-deploy': 'npm i && npm run build',
    },
  },
};
