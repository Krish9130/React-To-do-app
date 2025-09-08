#!/bin/bash
cd /opt/react/build/
cp -r * /var/www/html
cd /var/www/html
#mv index.nginx-debian.html ../
service nginx reload

