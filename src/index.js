import {createProject, createToDo} from './logic'
import {pageLoad} from './loadDOM'

let allProjects = [];

if(localStorage.length == 0){
    createProject('Example project', 'This is a project based to-do list created for The Odin Project curriculum by Tim Kelly')
    createToDo('The dates for each task are useful (thanks to Moment.js)', '2020-07-06')
    createToDo('You can re-order your tasks using drag and drop (courtesy of SortableJS)', '2020-04-09')
    createToDo('Interested in a junior web developer in Sydney? Get in touch at timpkelly1@gmail.com', '2020-05-09')
} else {
    allProjects = JSON.parse(window.localStorage.getItem('user'))
}

pageLoad()

export {allProjects}