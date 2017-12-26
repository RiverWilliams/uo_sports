package app.exception;

public class DeleteChildBeforeParentException extends Exception {
    public DeleteChildBeforeParentException(String message, Throwable cause) {
        super(message, cause);
    }

    public DeleteChildBeforeParentException(Throwable cause) {
        super(cause);
    }
}
