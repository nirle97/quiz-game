# quiz-game

installation process:

1. Clone the code above.
2. Open application in your text editor.
3. Open you terminal and enter the following lines:
   <<<<<<< HEAD

- `npm i` install the server dependencies.
- `cd client`
- `npm i` install the client dependencies.
- `cd ../`

4. Open the zip file that contain the Database tables and import it to your `MySQL Workbench`:

- Create a new connection by pressing + button.
- Make sure that the Hostname is set to `127.0.0.1` and the port is set to `3306`.
- Create a new Schema.
- Import the `sql` file: - Click on `server` => `data import` => `import from self contained file` => choose the path of the file => choose `default target schema` => click `start import`.
  Now you should have all the required tables in the sql workbench:
  a. country_quiz: Contains all the information about the countries.
  b. players: Contains all the players credentials.
  c. questions: Contains all the rated questions.
  d. questions_templates: Contains all the question templates.
  e. ratings: Connection table that links each question with its rate.

5. In order to config sequelize with the tables in the workbench, fill in the data in the `example.env` file to connect your workbench.
6. Change the `example.env` file name to `.env`.
7. In the terminal run the server with the command `npm start`.

- `npm i` install the server dependencies.
- `cd client`
- `npm i` install the client dependencies.
- `cd ../`

4. Open the zip file that contain the Database tables and import it to your `MySQL Workbench`:

- Create a new connection by pressing + button.
- Make sure that the Hostname is set to `127.0.0.1` and the port is set to `3306`.
- Create a new Schema.
- Import the `sql` file:
  Click on `server` => `data import` => `import from self contained file` => choose the path of the file => choose `default target schema` => click `start import`.

Now you should have all the required tables in the sql workbench:

- country_quiz: Contains all the information about the countries.
- players: Contains all the players credentials.
- questions: Contains all the rated questions.
- questions_templates: Contains all the question templates.
- ratings: Connection table that links each question with its rate.

5. In order to config sequelize with the tables in the workbench, fill in the data in the `example.env` file to connect your workbench.
6. Change the `example.env` file name to `.env`.
7. In the terminal run the server with the command `npm start`.
8. In your browser enter localhost:8080 and have fun😄
