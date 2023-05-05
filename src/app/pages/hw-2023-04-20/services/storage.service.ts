import { Injectable } from '@angular/core';

export interface INewUser {
  id: string,
  currentUser: string,
  firstName: string,
  lastName: string,
  email: string,
  secretWord: string,
  passwordValue: string,
  confirmPasswordValue: string,
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private _setData(identifier: string, data: INewUser) {
    localStorage.setItem(identifier, JSON.stringify(data))
  }

  private _getData(identifier: string): INewUser {
    const data = JSON.parse(<string>localStorage.getItem(identifier));
    return data;
  }

  public isSignedUp(id: string): boolean {
    const user = localStorage.getItem(id);
    let isSignedUp = false;

    if (user) {
      isSignedUp = true;
    } 

    return isSignedUp;
  }

  public isConfirmedPassword(email: string, confirmPassword: string, secretWord: string=''): boolean {
    const user = this._getData(email)
    let isConfirmed = false;

    if (user.passwordValue === confirmPassword && !secretWord) {
      isConfirmed = true;
    } else if (secretWord === user.secretWord) {
      isConfirmed = true;
    }

    return isConfirmed;
  }

  public create(userData: INewUser) {
    const data = userData;
    this._setData(data.id, data);
  }

  public get(email: string) {
    const user = this._getData(email);
    return user;
  }

  public delete(email: string) {
    localStorage.removeItem(email);
    this.deleteCurrentUser();
  }
  
  public changePassword(email: string, newPassword: string) {
    const user = this._getData(email);
    user.passwordValue = newPassword;
    user.confirmPasswordValue = newPassword;

    this._setData(email, user);

    if ( this.isSignedUp('currentUser') ) {
      this._setData('currentUser', user);
    }
  }

  public setCurrentUser(currentUser: INewUser) {
    this._setData('currentUser', currentUser);
  }

  public getCurrentUser() {
    return this._getData('currentUser');
  }
  
  public deleteCurrentUser() {
    localStorage.removeItem('currentUser');
  }
}
