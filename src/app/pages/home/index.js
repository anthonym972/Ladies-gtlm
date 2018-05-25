import React from "react";
import Page from "app/pages";
import css from "./styles.scss";
import Link from "dan/router/link";
import Localize from "dan/i18n/localize";
import { i18n } from "dan";
import config from "config";
import anime from "animejs";
import Slider from "react-slick";

export default class HomePage extends Page {
  constructor(props) {
    super(props, {
      title: "Ladies&G",
      description: "My custom page description !"
      // image: 'http://google.com/logo.png',
      // url: 'http://google.fr',
    });
  }

  // const Slideshow = () => {
  //       return (
  //           <Slide
  //             images={images}
  //             duration={5000}
  //             transitionDuration={1000}
  //           />
  //       )
  //   }

  timerId(e) {
    e.preventDefault();
    e.stopPropagation();

    const position = {
      value: window.scrollY
    };

    // anime({
    //   targets: e.target,
    //   fontSize: 40,
    //   color: "#f00"
    // });

    anime({
      targets: position,
      value: Math.min(
        document.body.scrollHeight,
        this.refs.conditions.getBoundingClientRect().top + window.scrollY
      ),
      duration: 500,
      easing: "easeOutQuad",
      update: () => {
        window.scrollTo(0, position.value);
      }
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={css.component}>
        <div className="header">
          <img alt="" src={config.assets + "img/logo.jpg"} />
          <div id="slide_show">
            <Slider {...settings}>
              <div>
                <img alt="" src={config.assets + "img/slide_1.jpg"} />
              </div>
              <div>
                <img alt="" src={config.assets + "img/slide_2.jpeg"} />
              </div>
              <div>
                <img alt="" src={config.assets + "img/slide_3.jpg"} />
              </div>
              <div>
                <img alt="" src={config.assets + "img/slide_5.jpg"} />
              </div>
            </Slider>
          </div>
          <div className="inscription">
            <a onClick={this.timerId.bind(this)}>click</a>
            <p>
              En appuyant sur Connexion, Vous acceptez nos Conditions
              d'utlilisaton et gardez vos informations privés{" "}
            </p>
            <h1> Connexion via facebook</h1>
            <h2> se connecter autrement</h2>
          </div>
        </div>
        <p id="conditions" ref="conditions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          tempus libero, quis vehicula velit. Aliquam non sapien quis enim
          porttitor tincidunt in ut magna. Maecenas viverra metus nec turpis
          blandit, in gravida dolor tincidunt. Quisque quis metus nec ex
          convallis imperdiet. Nunc vitae quam iaculis, posuere ex a, sodales
          libero. Ut sit amet odio at lacus pharetra ultricies nec eget arcu.
          Vestibulum ut lacus vel ipsum ornare mollis. Mauris fringilla ante
          vitae elit dapibus, non varius mauris ultrices. Nulla eleifend, lorem
          vel placerat pharetra, leo metus fringilla quam, nec ornare nunc nisi
          sed leo. Nulla scelerisque eu massa at aliquet. Praesent rhoncus nunc
          sem, in dignissim mi malesuada in. Nulla vel ipsum sit amet quam
          pharetra tempor. Duis pulvinar viverra tortor, vel pellentesque sem
          faucibus pretium. Praesent pharetra elit ut lectus porta congue. Fusce
          pulvinar vestibulum ligula, bibendum dignissim tellus fringilla at.
          Maecenas ut feugiat turpis. Aenean purus velit, venenatis sed
          tincidunt id, scelerisque non orci. Etiam vel enim quis enim tristique
          rhoncus. Praesent mollis nunc quis tellus interdum rhoncus vel in
          libero. Aenean tincidunt ipsum rutrum justo venenatis luctus. Duis
          pharetra tellus ante, tincidunt sodales est malesuada eu. Maecenas
          cursus nibh dolor, vel maximus ligula dictum a. Phasellus commodo
          ligula sit amet sollicitudin rutrum. Praesent rhoncus iaculis turpis
          ut gravida. Donec nec augue quis augue lacinia ultr vel placerat
          pharetra, leo metus fringilla quam, nec ornare nunc nisi sed leo.
          Nulla scelerisque eu massa at aliquet. Praesent rhoncus nunc sem, in
          dignissim mi malesuada in. Nulla vel ipsum sit amet quam pharetra
          tempor. Duis pulvinar viverra tortor, vel pellentesque sem faucibus
          pretium. Praesent pharetra elit ut lectus porta congue. Fusce pulvinar
          vestibulum ligula, bibendum dignissim tellus fringilla at. Maecenas ut
          feugiat turpis. Aenean purus velit, venenatis sed tincidunt id,
          scelerisque non orci. Etiam vel enim quis enim tristique rhoncus.
          Praesent mollis nunc quis tellus interdum rhoncus vel in libero.
          Aenean tincidunt ipsum rutrum justo venenatis luctus. Duis pharetra
          tellus ante, tincidunt sodales est malesuada eu. Maecenas cursus nibh
          dolor, vel maximus ligula dictum a. Phasellus commodo ligula sit amet
          sollicitudin rutrum. Praesent rhoncus iaculis turpis ut gravida. Donec
          nec augue quis augue lacinia ultr vel placerat pharetra, leo metus
          fringilla quam, nec ornare nunc nisi sed leo. Nulla scelerisque eu
          massa at aliquet. Praesent rhoncus nunc sem, in dignissim mi malesuada
          in. Nulla vel ipsum sit amet quam pharetra tempor. Duis pulvinar
          viverra tortor, vel pellentesque sem faucibus pretium. Praesent
          pharetra elit ut lectus porta congue. Fusce pulvinar vestibulum
          ligula, bibendum dignissim tellus fringilla at. Maecenas ut feugiat
          turpis. Aenean purus velit, venenatis sed tincidunt id, scelerisque
          non orci. Etiam vel enim quis enim tristique rhoncus. Praesent mollis
          nunc quis tellus interdum rhoncus vel in libero. Aenean tincidunt
          ipsum rutrum justo venenatis luctus. Duis pharetra tellus ante,
          tincidunt sodales est malesuada eu. Maecenas cursus nibh dolor, vel
          maximus ligula dictum a. Phasellus commodo ligula sit amet
          sollicitudin rutrum. Praesent rhoncus iaculis turpis ut gravida. Donec
          nec augue quis augue lacinia ultr
        </p>

        <h1 />
        <Link route="inputpage">next</Link>
      </div>
    );
  }
}
