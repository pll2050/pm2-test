module.exports = {
  apps : [{
      name: 'pm2-test',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
  }],

  deploy : {
    production : {
      user : 'ksk',
      key  : '/home/ksk/web/key/pll2050@vmware.pub',
      host : '192.168.0.119',
      ref  : 'origin/main',
      repo : 'git@github.com:pll2050/pm2-test.git',
      path : '/home/ksk/web/pm2-production',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 start ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
