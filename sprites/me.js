import { invert } from './utils';

const meCoding = [
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ffffffff", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff15e6f1", "#ff516fe7", "#ff61a2f4", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff15e6f1", "#ff516fe7", "#ff61a2f4", "#ffebc88c", "#fff3a827", "#fff3a827", "#fff3a827", "#ff15e6f1", "#fff3a827", "#ffebc88c", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff15e6f1", "#fff3a827", "#fff3a827", "#fff3a827", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#fff3a827", "#fff3a827", "#ffebc88c", "#ff61a2f4", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff173755", "#ff173755", "#ff173755", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffebc88c", "#fff3a827", "#ff15e6f1", "#ff0792f1", "#fff3a827", "#fff3a827", "#ffebc88c", "#fff3a827", "#ff0792f1", "#fff3a827", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff173755", "#ff173755", "#ff163f66", "#ff173755", "#ff163f66", "#ff173755", "#ff173755", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#fff3a827", "#ffebc88c", "#fff3a827", "#ffebc88c", "#ff15e6f1", "#ff15e6f1", "#ff15e6f1", "#ff15e6f1", "#ff0792f1", "#fff3a827", "#fff3a827", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff173755", "#ff163f66", "#ff163f66", "#ff173755", "#ff163f66", "#ff173755", "#ff163f66", "#ff173755", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ffebc88c", "#fff3a827", "#ff0792f1", "#ff0792f1", "#fff3a827", "#ff15e6f1", "#ff000000", "#ff15e6f1", "#ff15e6f1", "#ff000000", "#fff3a827", "#fff3a827", "#ffebc88c", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff678ad1", "#ff678ad1", "#ff163f66", "#ff173755", "#ff163f66", "#ff173755", "#ff163f66", "#ff173755", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ffffffff", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff15e6f1", "#fff3a827", "#ff0792f1", "#ff0792f1", "#fff3a827", "#ff0a0aed", "#ff15e6f1", "#ff15e6f1", "#ff15e6f1", "#ff0792f1", "#fff3a827", "#fff3a827", "#ffebc88c", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff678ad1", "#ff678ad1", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff15e6f1", "#ffebc88c", "#fff3a827", "#ffebc88c", "#ff00419b", "#fff3a827", "#ff15e6f1", "#ff0792f1", "#ff0792f1", "#ff0792f1", "#ffebc88c", "#fff3a827", "#fff3a827", "#ffebc88c", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff678ad1", "#ff678ad1", "#ffabb8ed", "#ff163f66", "#ff163f66", "#ff163f66", "#ff163f66", "#ff163f66", "#ff163f66", "#00000000", "#ff3d393d", "#ff686067", "#ff3d393d", "#ff686067", "#ff3d393d", "#ff686067", "#ff3d393d", "#ff686067", "#ff3d393d", "#ff686067", "#ff3d393d", "#ff686067", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#fff3a827", "#fff3a827", "#ff00419b", "#ff15e6f1", "#ff0792f1", "#ff000000", "#ff0792f1", "#ff000000", "#fff3a827", "#fff3a827", "#ffebc88c", "#ff15e6f1", "#ff61a2f4", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#ffabb8ed", "#ff678ad1", "#ffabb8ed", "#ffabb8ed", "#ff000000", "#ffabb8ed", "#ffabb8ed", "#ff000000", "#00000000", "#00000000", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ffebc88c", "#fff3a827", "#fff3a827", "#ff15e6f1", "#ff0792f1", "#ff00419b", "#ff00419b", "#ff0792f1", "#fff3a827", "#ffebc88c", "#fff3a827", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff75eea", "#fff38bea", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ff678ad1", "#ffabb8ed", "#00000000", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff3d393d", "#ff61a2f4", "#ffebc88c", "#fff3a827", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#fff3a827", "#fff3a827", "#ff15e6f1", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#ffabb8ed", "#ffabb8ed", "#ff678ad1", "#ff678ad1", "#ff678ad1", "#ffabb8ed", "#ffabb8ed", "#00000000", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#00000000", "#00000000", "#ffd0d5e9", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff3d393d", "#ff61a2f4", "#ffebc88c", "#ff15e6f1", "#fff3a827", "#fff3a827", "#fff3a827", "#fff3a827", "#ffebc88c", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff38bea", "#fff38bea", "#fff75eea", "#fff38bea", "#fff38bea", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#fff38bea", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#ffdccfb9", "#ffebc88c", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#00000000", "#00000000", "#00000000", "#00000000", "#ffd0d5e9", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff686067", "#fff8f8ff", "#ff3d393d", "#ff61a2f4", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#ffebc88c", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff75eea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#fff38bea", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#00000000", "#00000000", "#00000000", "#ffd0d5e9", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff000000", "#fff8f8ff", "#fff8f8ff", "#ff3d393d", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff38bea", "#fff38bea", "#fff75eea", "#fff75eea", "#ffabb8ed", "#ffabb8ed", "#fff38bea", "#fff38bea", "#ffabb8ed", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff3d393d", "#fff8f8ff", "#fff8f8ff", "#ff3d393d", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff3d393d", "#ff3d393d", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff38bea", "#fff75eea", "#fff38bea", "#fff38bea", "#ffabb8ed", "#ffabb8ed", "#ffabb8ed", "#fff38bea", "#ffabb8ed", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff686067", "#ff3d393d", "#00000000", "#00000000", "#ff678ad1", "#ff163f66", "#ff163f66", "#ff163f66", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff3d393d", "#ff3d393d", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff3d393d", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff38bea", "#fff38bea", "#fff38bea", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff686067", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff686067", "#ff3d393d", "#00000000", "#00000000", "#ff678ad1", "#00000000", "#ff163f66", "#ff163f66", "#ff163f66", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff686067", "#ff3d393d", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#fff75eea", "#fff75eea", "#fff75eea", "#ff3d393d", "#ff000000", "#ff3d393d", "#ff3d393d", "#ff000000", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#ff3d393d", "#00000000", "#00000000", "#00000000", "#00000000", "#ff678ad1", "#ff163f66", "#ff163f66", "#ff163f66", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff686067", "#fff8f8ff", "#ff3d393d", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff000000", "#ff686067", "#fff8f8ff", "#fff8f8ff", "#ff3d393d", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff000000", "#ff000000", "#fff8f8ff", "#fff8f8ff", "#ff3d393d", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff2727f3", "#ff686067", "#ff686067", "#fff8f8ff", "#fff8f8ff", "#fff8f8ff", "#fff8f8ff", "#ff3d393d", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff61a2f4", "#ff516fe7", "#ff3d393d", "#ff686067", "#ff686067", "#ff686067", "#fff8f8ff", "#fff8f8ff", "#fff8f8ff", "#fff8f8ff", "#fff8f8ff", "#ff3d393d", "#ff61a2f4", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#ff516fe7", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", 
    "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000", "#00000000",
];

export default invert(meCoding);