import inquirer from "inquirer";
// import { addNote, addTask, listNotes, listTasks, listAllNotes, listAllTasks, searchByString } from './helper.js';


const chooseUserGroupMenu = (appName) => {
    // This will have all the credentials for the user group of that app
    const getListOfUserGroups = [appName]
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'user',
      message: 'Choose User group?',
      pageSize: 10,
      choices: ['S1User', 'S2User', 'S3User'],
    },
  ])
  .then(answers => {
   
  });
}
const generateKeyMenu = () => {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'app',
      message: 'Choose an App?',
      pageSize: 10,
      choices: ['S1', 'S2', 'S3'],
    },
  ])
  .then(answers => {
    // console.log(answers.app);
    chooseUserGroupMenu(answers.app)
  
  });

}

export { generateKeyMenu };
