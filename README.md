This is a server that simply manages true-to-size calculations for various shoes.

To setup: 
1) Install docker (and docker-compose if it's not installed with your OS' version of docker).
2) Open a terminal in the project root and run `./setup.sh`. This will build and run the necessary docker containers.

To add a true-to-size data point:
POST localhost:3000/true-to-size
{
  "shoeName": "adidas Yeezy",
  "indicator": <INT between 1 and 5>
}

To get a true-to-size calculation:
GET localhost:3000/true-to-size
{
  "shoeName": "adidas Yeezy"
}

To teardown:
Open a terminal in the project root and run `./teardown.sh`. This will stop and remove the created docker containers.