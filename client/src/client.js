import axios from 'axios';
import { API_PATH } from "./config.json";

class Client {
  async _fetch(path="", method='get', options={}) {
    try {
      return (await axios[method](API_PATH + path, options)).data;
    } catch (err) {
      throw err.message;
    }
  }

  async mkdir(path="", name) {
    return (await this._fetch(`/mkdir${path}`, 'post', {
      name
    }));
  }

  async getContent(path="") {
    return (await this._fetch(`/content${path}`)).content;
  }

  async uploadMusics(path="", files) {
    const data = new FormData();
    for (const file of files) {
      data.append('musics', file);
    }
    return ((await this._fetch(`/upload${path}`, 'post', data)));
  }
}

export default new Client();
