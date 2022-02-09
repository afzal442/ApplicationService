# Restaurant App
This contains Web App for Taj Mahal Restaurant service 

🔥 Inspiration !
Inspired by the DevOps tool i.e. CD pipeline provided by harness.io platform, and decided to create a web application on top of this tool and GCP cluster.

🤩What it does ?
The web app gives you look around the Taj Mahal Restaurant' today's menu and allows you to order the item you like. Taj Mahal Restaurant is a country wide famous restaurant where service is awesome and food's quality is exceptional.

🤔How we built it?
Frontend built using React and Bootstrap CSS, deployed to GKE Cluster, Overpass for querying food item API (currently) Two stages docker images built under the hood of yarn install and nginx server CD pipeline using app.harness.io platform

😉Challenges we ran into?
Faced many errors after deploying the website like the 404 error due to nginx server and also CD harness delegate setup error, had to learn during the hackathon. Successful in resolving them after seeking help from the community. After successfully deployed the app project, then got an error while deploying. Later figured out that it had to include nginx.conf, which then resolved.

😎Accomplishments that we're proud of !
Able to create a intuitive UI using React Able to setup CD pipeline through harness.io platform Although not familiar with most of the tools and tech I used to build it, I tried and learned on the go to make it possible.

⚙️What we learned?
Learnt about react, CD deployment and how to make use of all the tools according to the use case of my project. Multi-stage dockerisation of a react-app

⏭ What's next for Restaurant Service App with Harness CD
Will try to make my project more user-friendly and include more resources in an organised way. Leverage the pipeline to sync the project from the git repo
