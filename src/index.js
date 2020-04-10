import {allProjects, createProject, createToDo, clearActiveProjects} from './logic'
import {pageLoad, changeProject} from './loadDOM'
import {newProject, newTask, editProject} from './functionalityDOM'

// Loading DOM layer
createProject('project 1', 'description 1')
createToDo('hello old pal')
pageLoad()



/* 
What I need to create:
- Add data-value = x for each project
- Use this data-value to swap the active projects
- Use this data-value to delete projects

*/