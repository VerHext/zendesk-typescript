
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Base64 } from 'js-base64';

export class Zendesk {


  private remoteUri: string;
  private authToken: string;
  private username: string;
   /**
   * Axios HTTP client instance used by this client
   */
  private axios: AxiosInstance;


  constructor(username: string, token: string, remoteUri: string) {
    if (remoteUri === undefined) {
      throw new Error('Remote URL is required');
    }
    if (token === undefined) {
      throw new Error('Token is required');
    }
    if (username === undefined) {
      throw new Error('Username is required');
    }

    this.remoteUri = remoteUri;
    this.authToken = token;
    this.username = username + "/token";

    this.axios = axios.create({
      baseURL: this.remoteUri,
      maxRedirects: 0,
      proxy: false
    });
  }

  async testAuth(callback){

    try {
      const response = await this.axios.get(this.remoteUri + "/users/me", {
      headers: {
        'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
        }});
        if (response.data.user.id != null)
            callback(true)

            callback(false)
    } catch (error) {
        callback(false)
    }

  }

}