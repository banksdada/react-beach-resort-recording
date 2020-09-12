import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "We want you to relax, lay back and enjoy free unlimited cocktails on the house. !"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "We take advantage of our environement. Enjoy unlimited hiking in our mountains and resort!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Dont worry about looking for change to commute within our services. Its free to move around"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "If you love drinking cool chilled beer, then we have the space for your beer love"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
