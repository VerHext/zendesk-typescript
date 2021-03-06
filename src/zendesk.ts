
import axios, { AxiosInstance } from 'axios';
import { Base64 } from 'js-base64';
import { Users } from './model/Users';


export class Zendesk {


  private remoteUri: string;
  private authToken: string;
  private username: string;


  public people: Users;
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


    this.people= new Users(this.username, this.authToken, this.remoteUri);
  }



  async testAuth(callback: any){

    try {
      const response = await this.axios.get(this.remoteUri + "/users/me", {
      headers: {
        'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
        }});
        if (response.data.user.id != null){
            callback(true)
        }else{
            callback(false)
        }

    } catch (error) {

        callback(false)
    }

  }



}