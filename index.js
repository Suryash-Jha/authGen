#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import figlet from 'figlet';
// import { addNote, addTask, listNotes, listTasks, searchByString, listAllNotes, listAllTasks } from './helper.js';
import { promptMenu } from './menus/mainMenu.js';

figlet('Auth - Gen', { 
    font: 'Star Wars',
 },async (err, data) => {
  const gradient = await import('gradient-string');
  if (err) {
    console.error('Error generating ASCII art');
    return;
  }

  console.log(gradient.default.pastel.multiline(data)); // Use gradient.default due to dynamic import
  if (process.argv.length === 2) {
    promptMenu();
    return;
  }
  yargs(hideBin(process.argv))
    .scriptName('authgen')
    .usage('$0 <cmd> [args]')


    .help().argv;
});

