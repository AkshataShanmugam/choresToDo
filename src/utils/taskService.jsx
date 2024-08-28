import { db } from '../firebase';
import { ref, push, set, onValue, update, remove } from 'firebase/database';
import Formatter from './Formatter';

export function addTask(task) {
    const tasksRef = ref(db, 'tasks');
    const newTaskRef = push(tasksRef);
    const taskWithTimestamp = {
        ...task,
        createdOn: new Date().toString(), // Add createdOn timestamp when the task is added
        completedOn: null,
    };
    return set(newTaskRef, taskWithTimestamp);
}

export function sortTasks(tasks, category) {
    const sortedTasks = tasks.sort((a, b) => {
        let valueA = 0;
        let valueB = 0;

        valueA = a[category];
        valueB = b[category];

        if (category === "timeToDo"){
            if (valueA.indexOf('hours') > 0){
                valueA = Number(valueA.split(" ")[0]) * 60
            } else {
                valueA = Number(valueA.split(" ")[0])
            }

            if (valueB.indexOf('hours') > 0){
                valueB = Number(valueB.split(" ")[0]) * 60
            } else {
                valueB = Number(valueB.split(" ")[0])
            }
        }

        if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
            return valueA === valueB ? 0 : valueA ? -1 : 1;
        }

        if (typeof valueA === 'string' || typeof valueA === 'number' || valueA instanceof Date) {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        }
    });

    return sortedTasks;
}

export function fetchTasks(callback, required) {
    const tasksRef = ref(db, 'tasks');
    onValue(tasksRef, (snapshot) => {
        if (required) {
            const data = snapshot.val();
            const tasks = data
                ? Object.keys(data)
                      .filter((key) => !data[key].completed) // Only fetch tasks where completed is not true
                      .map((key) => ({ id: key, ...data[key] }))
                : [];
            callback(tasks);
        } else {
            const data = snapshot.val();
            const tasks = data
                ? Object.keys(data)
                      .filter((key) => data[key].completed) // Only fetch tasks where completed is true
                      .map((key) => ({ id: key, ...data[key] }))
                : [];
            callback(tasks);
        }
    });
}

export function updateTask(taskId, updatedTask) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return update(taskRef, updatedTask);
}

export function deleteTask(taskId) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return remove(taskRef);
}

export function toggleTaskCompletion(taskId, completed) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return update(taskRef, { completed, completedOn: Formatter.formatDateTime(new Date())});
}
