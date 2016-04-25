#README

### HOW DID THIS GET MADE?

1.  made directory with 'npm init -y' and 'git init'
2.  within package.json file created 'start' route:

      "start": "http-server -c-1 -o"
3.  in shell, type 'npm start' to initiate server and load directory content
4.  in html head, added cdn links for bootstrap css, bootsrap js, angular, and jquery.
5.  in html body, added skeleton for angular components: ng-controller div, h1, and input.
6.  added ng-model attribute to input and {{name}} into h1 body.


## HOW TO GET THIS RUNNING LOCALLY?

1.  fork and clone this repo.
2.  run 'npm install' and 'npm start' commands in shell.
