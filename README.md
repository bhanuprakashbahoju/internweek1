**#download the docker image from you cli using "docker pull bhanuprakashbahoju/web" <br />**
download init.sql and docker-compose.yml files from this repository <br />
move the above downloaded files to your project folder where you downloaded the docker image<br />
run docker-compose file by executing "docker-compose up" command in your CLI<br />


Testing:
If your containers are running.<br />
then you can visit http://localhost:3000/api/expenses to get the table data from sql
<br />
api methods implemented at: <br />
get -> http://localhost:3000/api/expenses <br />
post -> http://localhost:3000/api/add_expense <br />
send name and type of expense as json  with the request. <br />
put -> http://localhost:3000/api/edit_expense <br />
send id, name and type as json data with the request. <br />
delete -> http://localhost:3000/api/delete_expenses <br />
send id as json data with the request <br />
