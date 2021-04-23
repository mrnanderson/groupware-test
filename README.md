# groupware-test

```
install node v14.16.0
npm start
```

#### opportunities for improvement

- make sure shelf items have unique ids
- validate function parameters

```
We have the following problem context:
We have a Case Manager, a Case Manager Supervisor (supervisor), a Case Client (client) and a “virtual” shelf. After a Case Manager sees a client, s/he would write on their case folio and place it on the shelf. When the shelf gets a new case folio, it will broadcast the news to all Case Manager Supervisors who’s watching the shelf—for the purpose of this let’s say this is just one supervisor.

Let’s create a function that represent a Case Manager who put a folio on the shelf, a supervisor function subscribing to the shelf, and a shelf that triggers all the subscriber functions, when it detects a new folio.
```
