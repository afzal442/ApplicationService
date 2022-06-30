# Restaurant App
This contains Web App for Taj Mahal Restaurant service. **Restaurant App** which allows you to provide services based on the online resource and to book orders available on the menu.
This app also has other feature that allow you to view the items on different categories using the search bar, choose the items and buy it based on the availability.

## 🔥 Inspiration !
Inspired by the Kubernetes and DevOps tool i.e. Linode Kubernetes Engine(LKE) and CD pipeline provided by ArgoCD tool, and then decided to create a web application on top of this tool deploying to LKE cluster.

## 🤔How we built it?
Frontend built using React and Bootstrap CSS, deployed to LKE Cluster, Overpass for querying food item API (currently) Two stages docker images built under the hood of yarn install and nginx server CD pipeline using ArgoCD platform.

Let's run our app using `yarn start` before that make sure you have installed the dependencies using `yarn install`. The host machine would land you on the home page of Taj Mahal Restaurant App as simple as that.
![h1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656584831183/46T_yLCbV.png align="left")

The menu page shows you the available items as shown below that you can choose and book your order through contact details.
![h2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656591826242/0RJF4mZQy.png align="left")

If you want to search for deserts or beverages, you will able to use search bar and view the items, later you can contact the restaurant to order. 
![h3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1656591839881/Vj_5wbUI5.png align="left")

## ⏭ What's next for Restaurant Service App with Harness CD
I will try to make my project more user-friendly and include more resources in an organised way. Leverage the application to support the chat feature from the getstream.io API. If you have any idea to enhance the page, feel free to send your PR in the repo.

The experience with the Linode platform is amazing when you first deploy your app and configure the kubernetes engine. Even you can make use of the marketplace features and their own CLI tool to configure clusters, nodes, etc. 

## Linode x Hashnode


