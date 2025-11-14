import React from "react";
import AboutBox from "./AboutBox";

const headings = [
  "Academically Inclined✒️ (But Also Fun🫠)",
  "Gourmet Traveler🧳",
  "A Mind Like a Sponge (and Sometimes a Remote)🧘‍♂️",
  "The Introvert Who Observes🧐",
  "Frontend Developer Extraordinaire👨‍💻 (with a Side of Backend Curiosity)",
  "Cricket & Stats Enthusiast🏏",
  "Sleep Connoisseur💤",
  "Mobile Detox Enthusiast📴",
  "Empathy Over Notifications🤔",
];

const texts = [
  "I’ve aced every competitive exam I’ve faced like it was just another level in a video game. From being selected in the Govt Scholarship Exam to conquering the Navodaya Exam, I guess you could say I’m the academic equivalent of a ‘boss fight’—and I’ve got the trophy (or, well, the certificates).",
  "I believe life is about great food and even better views. Whether it’s exploring local cuisine or hiking through nature's best spots, I’m always up for a culinary or outdoor adventure. If you’ve got a map of the world, I’m probably planning my next trip.",
  "When I'm not coding, you’ll catch me diving into psychology books, mindset literature, meditation, and occasionally, analyzing the world map like I'm preparing for a geopolitical quiz. Throw me a web series or a movie suggestion (preferably after 5 PM), and I’ll binge-watch it like it’s my job—don’t worry, I’m working on the balance.",
  "I’m a 'people-watcher.' I can spend hours observing and predicting how people think and act in different situations. You’d be amazed how much you can learn by sitting quietly in public spots and decoding human behavior. It’s like a real-life psychology experiment. Minus the lab coat.",
  "After 1 year of front-end wizardry with React, I’m now learning the dark arts of backend development. While I’m no full-stack sorcerer yet, I’m brewing up some serious skills. If coding were an adventure game, I’d be in the leveling up stage (without the cheat codes).",
  "I have a selective memory when it comes to cricket stats. Ask me about any match from 10 years ago, and I’ll have a fact for you. Rohit Sharma is my cricket hero, and yes, I know every run he’s ever scored. And I enjoy other sports too, and I'm sure, you’ll someday (after 100 years) catch me winning medals in badminton and volleyball.",
  "I consider sleep an art form. Whenever I get a break, I transform into a professional napper. If there were Olympic gold in sleep, I’d be a medal contender. It's not procrastination, it's recharging for my next big idea!",
  "I’ve been on a quest to reduce screen time to just 1–2 hours a day. You won’t see me glued to my phone during dinner. I prefer wandering in nature or reading something that expands my mind, not my Instagram feed.",
  "I’m all about learning from others whether it’s a conversation, their mistakes, or analyzing how people get ahead in life and sometimes why they don’t. It’s all about gaining perspective.",
];

function About() {
  return (
    <div className="about">
      <h3>Little About Me 😎</h3>
      <hr className="customHr" />
      <div className="aboutCards">
        {headings.map((heading, index) => (
          <AboutBox key={index} heading={heading} text={texts[index]} />
        ))}
      </div>
    </div>
  );
}

export default About;
