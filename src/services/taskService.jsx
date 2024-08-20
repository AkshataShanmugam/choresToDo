import { db } from '../firebase';
import { ref, push, set, onValue, remove, update } from 'firebase/database';

export function addTask(task) {
    const tasksRef = ref(db, 'tasks');
    const newTaskRef = push(tasksRef);
    return set(newTaskRef, task);
}

export function fetchTasks(callback) {
    const tasksRef = ref(db, 'tasks');
    onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        const tasks = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        callback(tasks);
    });
}

export function deleteTask(taskId) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return remove(taskRef);
}

export function toggleTaskCompletion(taskId, completed) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return update(taskRef, { completed });
}
