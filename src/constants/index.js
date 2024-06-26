import yujaimg from "../assets/images/yuja-monitor.png"
import rf from "../assets/images/RF_prediction.png"
import tcp from "../assets/images/tcp-iot.png"
import library from "../assets/images/library.png"
import sd from "../assets/images/sdfast.jpg"
import blocker from "../assets/images/website-blocker.png"
import plag from "../assets/images/Plag-checker.png"
import chat from "../assets/images/chatapp.png"


export const projects = [
  {
    title: "Screen Capture (YSC)",
    desc: "Designed and developed the new multi-screen feature for the YuJa Screen Capture (YSC), a desktop application that\n" +
        "captures multiple lecture notes and student performances and meets the university’s requirements as well as\n" +
        "optimizing the existing product architecture.",
    tags: [
      {
        name: "C#",
        color: "red-600",
      },
      {
        name: "C++",
        color: "green-600",
      },
      {
        name: "Directshow",
        color: "yellow-600",
      },

      {
        name: "MVVM",
        color: "blue-800",
      },
    ],
    img: yujaimg,
    code: "https://github.com/",
  },

  {
    title: "Chat-App with Django",
    desc: "This repository contains a person-to-person messaging application built with Django. The app features a REST API and WebSocket notifications to avoid polling, ensuring real-time message updates. " +
        "It uses a MySQL database and Redis for backend operations.",
    tags: [
      {
        name: "Python",
        color: "blue-800",
      },
      {
        name: "Django",
        color: "green-600",
      },
      {
        name: "MySQL",
        color: "red-600",
      },
      {
        name: "Redis",
        color: "orange-600",
      },
    ],
    img: chat,
    link: "https://github.com/ArifulIslamPreence/ChatApp",
    code: "https://github.com/ArifulIslamPreence/ChatApp",
  },
  {
    title: "Radio Frequency Prediction",
    desc: "This research project uses a time-series deep-learning solution to utilize improved feature mapping on the pre-processed data and, ultimately, perform the link failure prediction. " +
        "The proposed model learns the high-level features from the sequential data in an incremental manner, which reduces the complex data pre-processing and allows the model to perform prediction over a large amount of data.",
    tags: [
      {
        name: "Python",
        color: "blue-800",
      },
      {
        name: "Pytorch",
        color: "orange-600",
      },
      {
        name: "Neural Networks",
        color: "yellow-600",
      },
      {
        name: "MongoDB",
        color: "blue-800",
      },
    ],
    img: rf,
    code: "https://github.com/ArifulIslamPreence/RLFPredictionMainThesis",
  },
  {
    title: "IoT- TCP attack detection",
    desc: "I led the development of a cutting-edge project, 'IoT-TCP Attack Detection using Multiple Neural Network Models,' focusing on bolstering cybersecurity in IoT networks." +
        " Employing flow generators Argus and Tranalyzer, I transformed pcap packets into structured flows for efficient analysis." +
        " The organized project structure facilitated seamless execution of the analysis script, capturing diverse network behaviors in both benign and attack scenarios. Utilizing multiple neural network models, the project showcased my expertise in machine learning for anomaly detection in IoT traffic. ",

    tags: [
      {
        name: "Python",
        color: "red-600",
      },
      {
        name: "Pytorch",
        color: "green-600",
      },
      {
        name: "Pandas",
        color: "yellow-600",
      },
      {
        name: "Flask",
        color: "blue-800",
      },
    ],
    img: tcp,
    code: "https://github.com/ArifulIslamPreence/IoT-TCP-Attack-detection",
  },
  {
    title: "Library Management System",
    desc: "I developed a comprehensive Library Management System using Java 8 and MySQL, showcasing my proficiency in backend development." +
        " This system efficiently manages library resources, including book cataloging, user registration, and lending operations. " +
        "The integration with MySQL database highlights my expertise in data management and database design. Additionally, the system incorporates user-friendly interfaces, demonstrating my commitment to creating intuitive solutions." ,

    tags: [
      {
        name: "Java",
        color: "red-600",
      },
      {
        name: "Jquery",
        color: "green-600",
      },
      {
        name: "MySQL",
        color: "blue-800",
      },
    ],
    img: library,

    code: "https://github.com/ArifulIslamPreence/Library-Management-System-Personal-/tree/master/Library",
  },
  {
    title: "Dataplane Failure Detection",
    desc: "A failure detection mechanism for dataplane recovery in SD-FAST dataplane architecture implementation using p4",
    tags: [
      {
        name: "P4",
        color: "red-600",
      },
      {
        name: "Python",
        color: "green-600",
      },
      {
        name: "Mininet",
        color: "yellow-600",
      },
      {
        name: "MySQL",
        color: "blue-800",
      },
      {
        name: "Machine Learning",
        color: "orange-600",
      },
    ],
    img: sd,
    link: "https://github.com/ArifulIslamPreence/dataplane-failure-detection",
    code: "https://github.com/ArifulIslamPreence/dataplane-failure-detection",
  },

  {
    title: "Plagarism Checker",
    desc: "This repository contains a plagiarism checker that uses TF-IDF vectorization and cosine similarity to detect similarities between text files." +
        " It reads `.txt` files from the current directory, calculates their similarity scores, and outputs potential plagiarism cases ",
    tags: [
      {
        name: "Python",
        color: "green-600",
      },
      {
        name: "MySQL",
        color: "blue-800",
      },
      {
        name: "Text manipulation",
        color: "orange-600",
      },
    ],
    img: plag,
    link: "https://github.com/ArifulIslamPreence/PlagiarismChecker",
    code: "https://github.com/ArifulIslamPreence/PlagiarismChecker",
  },

  {
    title: "Website Blocker by Python",
    desc: "a website blocker script that modifies the hosts file to block specified websites during certain hours." +
        " The script supports both Linux and Windows environments and can be used to improve productivity by restricting access to distracting sites.",
    tags: [
      {
        name: "Python",
        color: "green-600",
      },
      {
        name: "MySQL",
        color: "blue-800",
      },
      {
        name: "website-blocking",
        color: "orange-600",
      },
    ],
    img: blocker,
    link: "https://github.com/ArifulIslamPreence/websiteblocker",
    code: "https://github.com/ArifulIslamPreence/websiteblocker",
  },


];
