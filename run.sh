#!/bin/sh
rm -rf /home/ksk/web/pm2-production
cd /home/ksk/web/pm2-test
pm2 deploy pro setup
pm2 ls
