#!/bin/bash
cd /app

sudo apt-get install curl -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo apt-get install npm -y
sudo apt install nginx -y
ufw allow 'Nginx HTTP'
