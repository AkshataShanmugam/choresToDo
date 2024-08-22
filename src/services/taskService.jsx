import { db } from '../firebase';
import { ref, push, set, onValue, update, remove } from 'firebase/database';

export function addTask(task) {
    const tasksRef = ref(db, 'tasks');
    const newTaskRef = push(tasksRef);
    const taskWithTimestamp = {
        ...task,
        createdOn: new Date().toString(), // Add createdOn timestamp when the task is added
    };
    return set(newTaskRef, taskWithTimestamp);
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

// export function deleteTask(taskId) {
//     const taskRef = ref(db, `tasks/${taskId}`);
//     return update(taskRef, { completed: true }); // Mark the task as completed instead of removing
// }

export function deleteTask(taskId) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return remove(taskRef);
}

export function toggleTaskCompletion(taskId, completed) {
    const taskRef = ref(db, `tasks/${taskId}`);
    return update(taskRef, { completed });
}
