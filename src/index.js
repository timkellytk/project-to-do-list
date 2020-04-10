import {allProjects, createProject, createToDo} from './logic'
import {pageLoad} from './loadDOM'

createProject('project 1', 'description 1')
createToDo('hello old pal')
console.log(allProjects)
pageLoad()