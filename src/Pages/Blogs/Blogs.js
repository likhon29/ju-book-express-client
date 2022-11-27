import React from "react";
import Blog from "./Blog/Blog";
import "./Blogs.css";

// import useTitle from "../../Hooks/useTitle";
// import { Button, Card } from "react-bootstrap";
const Blogs = () => {
  //  useTitle("Blogs");

  const Blogs = [
    {
      id: 1,
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1094992/image_5-0059967eb5450c477b154760cd8c8525-b228bd4760b1e5e5a69ab124d1e5dc7d.png",
      title:
        "What are the different ways to manage a state in a React application?",
      description:
        "React is an open-source, front-end library developed by Facebook that’s used for creating web and mobile applications. React is termed as a library because, in an MVC architecture, it’s only the view layer and not a complete architecture.The plus point here is that React is very flexible and can be connected with several packages that have been developed for it, which helps in the development of a complete application. Angular is an open-source, front-end framework developed by Google, used for creating web applications. Angular is termed as a framework because it includes enough functionality out of the box for the development of a complete web application. The advantage here is that you don’t need to go through packages and then select from those. Instead, you can start working directly without worrying about adding functionalities via different packages.Vue is an open-source, front-end library developed by Evan You, an ex-Google employee. Vue is used for creating web applications, and like React, it’s not a complete MVC framework. The packages developed for Vue are lesser than that of React due to its lower popularity, which makes it a challenge to select packages that provide functionality relevant to a particular scenario.",
    },
    {
      id: 2,
      img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1611419306527/rAYE8_Kv_.png",
      title:
        "How does prototypical inheritance work?",
      description:
        "React is an open-source, front-end library developed by Facebook that’s used for creating web and mobile applications. React is termed as a library because, in an MVC architecture, it’s only the view layer and not a complete architecture.The plus point here is that React is very flexible and can be connected with several packages that have been developed for it, which helps in the development of a complete application. Angular is an open-source, front-end framework developed by Google, used for creating web applications. Angular is termed as a framework because it includes enough functionality out of the box for the development of a complete web application. The advantage here is that you don’t need to go through packages and then select from those. Instead, you can start working directly without worrying about adding functionalities via different packages.Vue is an open-source, front-end library developed by Evan You, an ex-Google employee. Vue is used for creating web applications, and like React, it’s not a complete MVC framework. The packages developed for Vue are lesser than that of React due to its lower popularity, which makes it a challenge to select packages that provide functionality relevant to a particular scenario.",
    },
    {
      id: 3,
      img: "https://felixgerschau.com/static/b14ac1562d60ae714bc24c368955c6cf/5a190/unit-testing-react-introduction-thumbnail.png",
      // https://www.vtnetzwelt.com/wp-content/uploads/2019/04/unit-testing-in-react.jpg
      title: "What is a unit test? Why should we write unit tests?",
      description:
        "React is an open-source, front-end library developed by Facebook that’s used for creating web and mobile applications. React is termed as a library because, in an MVC architecture, it’s only the view layer and not a complete architecture.The plus point here is that React is very flexible and can be connected with several packages that have been developed for it, which helps in the development of a complete application. Angular is an open-source, front-end framework developed by Google, used for creating web applications. Angular is termed as a framework because it includes enough functionality out of the box for the development of a complete web application. The advantage here is that you don’t need to go through packages and then select from those. Instead, you can start working directly without worrying about adding functionalities via different packages.Vue is an open-source, front-end library developed by Evan You, an ex-Google employee. Vue is used for creating web applications, and like React, it’s not a complete MVC framework. The packages developed for Vue are lesser than that of React due to its lower popularity, which makes it a challenge to select packages that provide functionality relevant to a particular scenario.",
    },
    {
      id: 4,
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
      title: "React vs. Angular vs. Vue?",
      description:
        "React is an open-source, front-end library developed by Facebook that’s used for creating web and mobile applications. React is termed as a library because, in an MVC architecture, it’s only the view layer and not a complete architecture.The plus point here is that React is very flexible and can be connected with several packages that have been developed for it, which helps in the development of a complete application. Angular is an open-source, front-end framework developed by Google, used for creating web applications. Angular is termed as a framework because it includes enough functionality out of the box for the development of a complete web application. The advantage here is that you don’t need to go through packages and then select from those. Instead, you can start working directly without worrying about adding functionalities via different packages.Vue is an open-source, front-end library developed by Evan You, an ex-Google employee. Vue is used for creating web applications, and like React, it’s not a complete MVC framework. The packages developed for Vue are lesser than that of React due to its lower popularity, which makes it a challenge to select packages that provide functionality relevant to a particular scenario.",
    },
  ];
  return (
    <div className='w-3/5 grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-auto mb-5'>
      {
        Blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
      }
    </div>
  );
};

export default Blogs;
