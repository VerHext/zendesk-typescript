
import axios, { AxiosInstance } from 'axios';
import { Base64 } from 'js-base64';

export class Users {

    private remoteUri: string;
    private authToken: string;
    private username: string;

    private axios: AxiosInstance;

  constructor(username: string, token: string, remoteUri: string) {
    this.remoteUri = remoteUri;
    this.authToken = token;
    this.username = username;

    this.axios = axios.create({
      baseURL: this.remoteUri,
      maxRedirects: 0,
      proxy: false
    });

  }

    async get(id: string, callback: any){
        try {
            const response = await this.axios.get(this.remoteUri + "/users/" + id + ".json", {
            headers: {
                'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
                }});
            callback(response.data)
        } catch (error) {
            callback(error)
        }
    }

    async create(json: string, callback: any){
        try {
            const response = await this.axios.post(this.remoteUri + "/users.json", {
            headers: {
                'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
                }, body: json
                });
            callback(response.data)
        } catch (error) {
            callback(error)
        }
    }

    async createOrUpdate(json: string, callback: any){
        try {
            const response = await this.axios.post(this.remoteUri + "/users/create_or_update.json", {
            headers: {
                'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
                }, body: json
                });
            callback(response.data)
        } catch (error) {
            callback(error)
        }
    }

        async delete(id: string, callback: any){
        try {
            const response = await this.axios.post(this.remoteUri + "/users/"+id+".json", {
            headers: {
                'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
                }});
            callback(response.data)
        } catch (error) {
            callback(error)
        }
    }

    async getAll(callback: any){
        try {
            const response = await this.axios.get(this.remoteUri + "/users", {
            headers: {
                'Authorization': 'Basic ' + Base64.encode(this.username + ":" + this.authToken)
                }});
            callback(response.data)
        } catch (error) {
            callback(error)
        }
    }
}