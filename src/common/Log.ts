/**
 * Log类，用来控制控制台的输出
*/
class Log {
    public static isOpen = true;

    public static info(content: any): void {
        if (Log.isOpen) {
            console.info(content);
        }
    }

    public static error(content: any): void {
        if (Log.isOpen) {
            console.error(content);
        }
    }
}