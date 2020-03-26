# FaunaDB Blog with Next.js

> A statically generated blog example using Next.js and Cosmicjs. Base blog template has been inspired heavily from [Next.js blog examples](https://github.com/zeit/next.js/tree/canary/examples/blog-starter) and tweaked it simpler to understand how JAMStack works.

# Demo
[next-faunadb-blog.now.sh/](next-faunadb-blog.now.sh/)

# Configuration

1. Upload Graphql schema

```js
type Query {
  person: [Person!]!
  posts: [Post!]!
}

type Person {
  name: String!
  profile: String!
}

type Post {
  title: String!
  author: Person!
  content: String!
}
```

2. Create a document for sample

```sh
mutation CreateAAuthor {
   createPerson(data: {
    name: "John Moon"
    profile: "https://pbs.twimg.com/profile_images/1171572038919581696/93xdT4Km_400x400.jpg"
   }) {
     name,
     profile,
     _id
   }
}

mutation CreateAAuthor {
   createPerson(data: {
   name: "Jimmy Moon"
   profile: "https://avatars2.githubusercontent.com/u/124117?s=460&u=7f824cbb2248dd006ac3f17299dbfd9bcdaaf1f7&v=4"
   }) {
     name,
     profile,
     _id
   }
}

mutation CreateAPost {
  createPost(data: {
    title: "In nobis dicam regione per",
    # use author's `_id` printed out after the author creating
    author: {connect: "261054433674134035"},
    content: "<p>In nobis dicam regione per. Cum at alii nibh lucilius, vim in delectus reformidans. Mel malorum ceteros ad. Albucius nominavi similique mea id, exerci inermis deserunt te pri. No eam etiam molestiae eloquentiam, usu eu quod scripta, pri putent adipisci lobortis no. Et corpora inciderint eam.</p> <br/> <p>Munere everti voluptatibus nam an, ferri ubique eum ea, vel an postea senserit ocurreret. Falli epicuri conclusionemque eos et. Feugiat accusamus reformidans an vix, simul mediocritatem an mei. In nec convenire percipitur, justo invidunt verterem no vis. Est ludus phaedrum repudiare ne. <br/><p>Posse comprehensam nec ex, eos ad magna legendos intellegat. Cu eam dicta blandit, no sit clita elaboraret, tantas sensibus in ius. Qui id everti suscipit referrentur. Ei sea illum eloquentiam. No has solum civibus detraxit, qui ei gloriatur reformidans. Veniam sensibus ne vel.</p><br/><p>His ancillae vivendum mnesarchum ad. Ex oratio omnesque quo, mea ei nostrum inimicus disputando. Discere menandri recusabo pro an, ex cum postea vocibus, sit at ancillae abhorreant. Has diam sententiae philosophia in, vix ut unum conclusionemque, ea recteque repudiandae comprehensam has. Utamur similique sed ne, vix ne munere verear epicurei.</p>"
  }) {
    title
    author {
      name
    }
    content
  }
}

mutation CreateAPost {
  createPost(data: {
    title: "Hinc causae placerat his at",
    author: {connect: "261054433674134035"},
    content: "<p>Hinc causae placerat his at, virtute phaedrum ad vix. Pri ad cibo vitae electram. Scripta accumsan ex his. Eam munere possim id, ut duis melius eum. Ne eos labore phaedrum, te mutat placerat vix. At his putant dignissim complectitur, id mea bonorum pertinacia appellantur.</p><br/><p>Eos falli delicata scribentur te. Duo pericula consequat eu, nibh repudiare patrioque an mea. Sit dictas aliquam consetetur ea. Vivendo legendos antiopam ut sed, vel eu velit virtute meliore. Vide omnis ceteros cu mea. Mei eu error phaedrum, eam an soleat tacimates salutatus.</p><br/><p>Et nec unum delectus lucilius, ad vero suscipiantur eam. Causae facilisi usu ei, rebum molestie splendide ius no. Nam id tibique dissentias, justo placerat sit et. Ea ius habeo porro dolorem, graece habemus senserit vis ad. Saepe bonorum no eos, tritani consetetur mei id. An inciderint reformidans nam.</p>"
  }) {
    title
    author {
      name
    }
    content
  }
}

mutation CreateAPost {
  createPost(data: {
    title: "Lorem ipsum dolor sit amet",
    author: {connect: "261054600745845267"},
    content: "<p>Lorem ipsum dolor sit amet, eum ad probatus vituperatoribus. Nisl phaedrum ad ius, illud instructior ut vis, purto soluta tamquam est ut. Option persius his no, omnes soluta vivendum in qui, debitis veritus pro ei. Tale graecis nec ut, vim nulla elitr ne. Quo novum nullam eleifend id, qui cu enim noster diceret.</p><br/><p>Incorrupte reformidans cum in, vim ei ponderum perpetua expetendis. Corpora voluptua et eos. Ad ullum essent molestiae quo, illud posidonium te nam. Est cu quem essent gubergren, propriae mediocrem eum te, lorem veritus an usu.</p><br/><p>Eum autem phaedrum eu, porro aliquip has at. Et sit quis melius abhorreant, an his iusto quidam. Est epicurei euripidis et, cu mei regione labitur, brute exerci nam ex. Perpetua qualisque nec ei, mollis verear incorrupte ex cum. Id nec sumo aperiam, ius malorum gloriatur ea. Doctus nostrum vel no.</p>"
  }) {
    title
    author {
      name
    }
    content
  }
}
```

# Setup Next.js environment variables

Please refer to [Step 5. Set up environment variables](https://github.com/zeit/next.js/tree/canary/examples/cms-takeshape#step-5-set-up-environment-variables) in the other examples. No big changes, all of steps are same except names of env variable.

# License

MIT @ Jimmy Moon