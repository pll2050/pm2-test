module.exports = {
  apps : [{
      name: 'pm2-test',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
  }],

  deploy : {
    pro : {
      user : 'ksk',
      key  : '/home/ksk/.ssh/pll2050.pub',
      host : '192.168.0.10',
      ref  : 'origin/main',
      repo : 'git@github.com:pll2050/pm2-test.git',
      path : '/home/ksk/web/pm2-production',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && npm run generate && pm2 startOrReload ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
