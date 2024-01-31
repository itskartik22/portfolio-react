import Img1 from "./../img/project1.png";
import Todo from "./../img/to-do-list.png";
import portfolio1 from "./../img/animated-portfolio.png";
const projectList = [
  {
    id : 1,
    name: "SkillSphere",
    text:
      "Fully responsive Course Selling Platform having simple and user-friendly design. Enabling seamless user registration, login, and personalized course-enrollments.",
    img: Img1,
    period: "16 Dec - 10 Jan",
    techStack: ["React", "Express", "NodeJs", "MongoDB", "Tailwind"],
    projectLink : "https://skillsphere-liard.vercel.app/",
    githubLink : ""
  },
  { 
    id: 2,
    name: "React-To-Do",
    text:
      "A user-friendly task management web application designed to simplify your daily life. This project empowers you to organize your tasks with ease, featuring a clean and intuitive user interface. It incorporates essential CRUD (Create, Read, Update, Delete) operations, enabling you to manage your tasks effortlessly.",
    img: Todo,
    period: "13 Oct - 7 Nov",
    techStack: ["React", "Tailwind"],
    projectLink : "https://react-todo-dashboard.netlify.app/",
    githubLink : ""
  },
  {
    id: 3,
    name: "Clone Portfolio",
    text:
    "A seamlessly responsive, cloned portfolio, featuring comprehensive animations and scroll-triggered effects, expertly crafted using the advanced capabilities of GSAP (GreenSock Animation Platform).",
    img: portfolio1,
    period: "Jun 23 - Jul 23",
    techStack: ["Html", "Css", "Javascript", "GSAP"],
    projectLink : "https://itskartik22.github.io/clone-portolio/",
    githubLink : ""
  },
];

export default projectList;
