==============Running a NOde server on AWS container

SSH :
ssh need a cert key pair
ssh -i <pem file name> ubuntu@ip (see aws ec2 connect properties for connection) - https://www.youtube.com/watch?v=qQ7XC9ytLyk

> C:\Users\priya\OneDrive\Desktop\AWS_SSH>ssh -i Dandy_Socket_Server_keyPair.pem ubuntu@16.16.126.83
> sudo su
> /home/ubuntu/AWS_PROJECT# node Server.js

ps aux | grep node

handinling cors externally: https://socket.io/docs/v3/handling-cors/

tmux session:
sudo apt-get update
sudo apt-get install tmux

tmux new -s pingSession

node Server.js /sudo node Server.js
sudo NODE_ENV=production node Server.js >> log.txt &

exit by ctrl+b then d

tmux attach -t pingSession


> curl "http://ec2-16-16-126-83.eu-north-1.compute.amazonaws.com/socket.io/?EIO=4&transport=polling"
https://ec2-16-16-126-83.eu-north-1.compute.amazonaws.com:80/




-----

uninstall old versions:
sudo npm cache clean -f
sudo npm install -g n
sudo n stable


https://us-east-1.console.aws.amazon.com/billing/home?region=us-east-1#/
