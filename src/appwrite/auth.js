import conf from '../congif/config'
import { Client, ID, Account } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            if(userAccount){
                //User account is now created, redirect to login
                return this.login({email, password});
            }
            else{
                //User not created
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite error :: createAccount :: " + error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite error :: login :: ", error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite error :: logout :: ", error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service error :: getCurrentUser :: ", error);
        }
    }
}

const authService = new AuthService();

export default authService;