import {allProjects, createProject, createToDo, clearActiveProjects} from './logic'
import {pageLoad, changeProject} from './loadDOM'
import {newProject, newTask, editProject} from './functionalityDOM'

// Loading DOM layer
createProject('project 1', 'description 1')
createToDo('hello old pal')
createToDo('the second to-do')
pageLoad()



/* 
Next cab off the rank:
- Create delete project icon event listener
*/