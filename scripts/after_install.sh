#!/bin/bash
cd /opt/tet/todo/
cp -r * /var/www/html
cd /var/www/html
#mv index.nginx-debian.html ../
service nginx reload

#npm install pm2@latest -g
#pm2 start npm --name "todo-react-app" -- start
