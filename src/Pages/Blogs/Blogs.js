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
        `There are four main types of state you need to properly manage in your React apps:

        Local state
        Global state
        Server state
        URL state
        Let's cover each of these in detail:
        
        Local (UI) state – Local state is data we manage in one or another component.
        
        Local state is most often managed in React using the useState hook.
        
        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
        
        Global (UI) state – Global state is data we manage across multiple components.
        
        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
        
        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
        
        Sometimes state we think should be local might become global.
        
        Server state – Data that comes from an external server that must be integrated with our UI state.
        
        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
        
        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
        
        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
        
        URL state – Data that exists on our URLs, including the pathname and query parameters.
        
        URL state is often missing as a category of state, but it is an important one.
        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
        
        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.`,
    },
    {
      id: 2,
      img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1611419306527/rAYE8_Kv_.png",
      title:
        "How does prototypical inheritance work?",
      description:
        "Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.",
    },
    {
      id: 3,
      img: "https://felixgerschau.com/static/b14ac1562d60ae714bc24c368955c6cf/5a190/unit-testing-react-introduction-thumbnail.png",
      // https://www.vtnetzwelt.com/wp-content/uploads/2019/04/unit-testing-in-react.jpg
      title: "What is a unit test? Why should we write unit tests?",
      description:
        `Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
        
        Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.`,
    },
    {
      id: 4,
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
      title: "React vs. Angular vs. Vue?",
      description:
        `React is an open-source, front-end library developed by Facebook that’s used for creating web and mobile applications. React is termed as a library because, in an MVC architecture, it’s only the view layer and not a complete architecture.The plus point here is that React is very flexible and can be connected with several packages that have been developed for it, which helps in the development of a complete application. Angular is an open-source, front-end framework developed by Google, used for creating web applications. Angular is termed as a framework because it includes enough functionality out of the box for the development of a complete web application. The advantage here is that you don’t need to go through packages and then select from those. Instead, you can start working directly without worrying about adding functionalities via different packages.Vue is an open-source, front-end library developed by Evan You, an ex-Google employee. Vue is used for creating web applications, and like React, it’s not a complete MVC framework. The packages developed for Vue are lesser than that of React due to its lower popularity, which makes it a challenge to select packages that provide functionality relevant to a particular scenario.`,
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
