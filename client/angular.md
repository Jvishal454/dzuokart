<!-- Code -->

## To break it down:

BehaviorSubject Creation:

- BehaviorSubject is like a container that holds a value and emits it to subscribers whenever a new value is set using next().
In the AuthService, a BehaviorSubject named loggedInSubject is created to manage the user's login status.
Observable Formation:

- loggedIn$ is a property within AuthService that holds an observable.
This observable (loggedIn$) is derived from loggedInSubject using asObservable().
Any changes in loggedInSubject are conveyed through this observable.
Functionality:

- Whenever this.loggedInSubject.next(newValue) is called, it updates the loggedInSubject with a new value.
This update triggers a notification through the observable loggedIn$.
Subscribers, like the HeaderComponent, automatically receive these updates when they occur, allowing them to react accordingly.
This setup ensures that changes to the login status are communicated throughout the app using the observable, enabling different components or services to react to those changes without explicitly calling any method.

```bash
# Subject Creation
private loggedInSubject = new BehaviorSubject<boolean>(this.getToken());

```

-this.getToken() is initially used to set the starting value of loggedInSubject. This call gets the current login status (true/false) from the stored token, assuming that the token stores the user's login status.
When setLoginStatus(true) is called:

-true is passed to loggedInSubject.next(loggedIn). This updates the loggedInSubject with the new value of true, indicating that the user is logged in. The use of this.getToken() during BehaviorSubject initialization is to set the initial value of the BehaviorSubject based on the stored token value (which could be true or false depending on the login status stored in the token).

-After this initialization, when setLoginStatus(true) is called and loggedInSubject.next(loggedIn) is triggered with true, it updates the BehaviorSubject with this new value (true). The loggedIn$ observable, derived from loggedInSubject, notifies subscribers about this change, which in turn updates the components that are subscribed to loggedIn$ to reflect the new login status. This process doesn't use getToken() again; it relies on the updated value sent through loggedInSubject.next(loggedIn).

-So, getToken() is used only once during the initialization to set the initial value of the BehaviorSubject. Subsequent updates to the login status rely on loggedInSubject.next(loggedIn) to communicate changes through the observable stream.
