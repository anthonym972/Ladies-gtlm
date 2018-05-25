import React from "react";
import Page from "app/pages";
import css from "./styles.scss";
import Link from "dan/router/link";
import Localize from "dan/i18n/localize";
import { i18n } from "dan";
import config from "config";

export default class InputPage extends Page {
  constructor(props) {
    super(props, {
      title: "Home page",
      description: "My custom page description !"
      // image: 'http://google.com/logo.png',
      // url: 'http://google.fr',
    });
  }

  componentDidMount() {
    // JSON
    // fetch(config.assets + "api.json")
    //   .then(response => {
    //     if (response.ok) {
    //       response
    //         .json()
    //         .then(data => {
    //           console.log("data", data);
    //         })
    //         .catch(error => {
    //           console.log("failed to parse json", error);
    //         });
    //     } else {
    //       // TODO: error
    //     }
    //   })
    //   .catch(error => {
    //     console.log("error", error);
    //   });

    const formData = new FormData();
    formData.append("email", "sample@gmail.com");
    formData.append("email2", "sample@gmail.com");

    fetch("http://localhost:8888/back/api.php", {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(data => {
              console.log("data", data);
            })
            .catch(error => {
              console.log("failed to parse json", error);
            });
        } else {
          // TODO: error
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div align="center" className={css.component}>
        <h2>Inscription</h2>
        <form method="POST" action="">
          <table>
            <tr>
              <td text-align="right">
                <label for="">Pseudo :</label>
              </td>
              <input
                type="text"
                placeholder="Votre mot de pseudo"
                id="pseudo"
                name="pseudo"
              />
            </tr>
            <tr>
              <td text-align="right">
                <label for="mail">Mail :</label>
              </td>
              <input type="email" placeholder="mail" id="mail" name="mail" />
            </tr>
            <tr>
              <td text-align="right">
                <label for="mail2">Confirmation du mail :</label>
              </td>
              <input
                type="email"
                placeholder="confirmez votre mail"
                id="mail2"
                name="mail2"
              />
            </tr>
            <tr>
              <td text-align="right">
                <label for="mdp">Mot de passe :</label>
              </td>
              <input
                type="password"
                placeholder="Votre mot de passe"
                id="mdp"
                name="mdp"
              />
            </tr>
            <tr>
              <td text-align="right">
                <label for="mdp2">Mot de passe :</label>
              </td>
              <input
                type="password"
                placeholder="Confirmez votre mdp"
                id="mdp2"
                name="mdp2"
              />
            </tr>
            <tr>
              <td />
              <td>
                <br />
                <input id="inscription" type="submit" value="je m'inscris" />
              </td>
            </tr>
          </table>
        </form>
        <Link route="home"> salut</Link>
      </div>
    );
  }
}
