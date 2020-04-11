import {createProject} from './logic'
import {pageLoad, storeMyProjects} from './loadDOM'

let allProjects = [];

if(localStorage.length == 0){
    createProject('Example project', 'This is a project based to-do list created for The Odin Project curriculum by Tim Kelly')
    storeMyProjects();
} else {
    allProjects = JSON.parse(window.localStorage.getItem('user'))
}
pageLoad()

export {allProjects}