import React from "react";
import '../styles/Technologies.css';
import html from '../assets/html.png';
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import next from '../assets/next.png'
import mongo from '../assets/mongo.webp'
import flutter from '../assets/flutter.png'
import dart from '../assets/dart.png'
import android from '../assets/android.png'
import postgres from '../assets/postgre.png'
import python from '../assets/python.png'
import csharp from '../assets/csharp.png'

const technologies = [
  html,
  css,
  js,
  react,
  node,
  next,
  mongo,
  flutter,
  csharp,
  dart,
  android,
  postgres,
  python
];

const Technologies = () => {
  return (
    <section className="technologies-section">
      <div className="container text-white py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="gradient-text display-4 fw-bold">Technologies</h2>
            <h3 className="fw-light">We use</h3>
          </div>
          <div className="col-md-6">
            <p>
              We leverage the latest cutting-edge technologies in both development and
              design to stay on par with technological advancements, ensuring our
              solutions are always at the forefront of innovation.
            </p>
          </div>
        </div>

        <div className="tech-slider">
          <div className="tech-track">
            {technologies.map((tech, idx) => (
              <div className="tech-item" key={idx}>
                <img src={tech} alt={`tech-${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
