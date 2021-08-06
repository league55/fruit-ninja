
/**
 * Launches periodic task that stops itself on exception
 * @param {number} interval - interval to execute a task
 */
export default function launchTask(task, interval, onPass, onFail) {
    const intervalId = setInterval(async () => {
        try {
            let result = await task();
            onPass(result);
        } catch (e) {
            clearInterval(intervalId);
            onFail(e);
        }
    }, interval);
}