
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class Zendesk {


  private remoteUri: string;
  private authToken: string;
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
    if (remoteUri === undefined) {
      throw new Error('RemoteUri is required');
    }

    this.remoteUri = remoteUri;
    this.authToken = remoteUri;

    this.axios = axios.create({
      baseURL: remoteUri,
      maxRedirects: 0,
      proxy: false
    });
  }

}