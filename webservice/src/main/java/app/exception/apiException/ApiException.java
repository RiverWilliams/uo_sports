package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class ApiException extends RuntimeException {

    private HttpStatus httpStatus;
    private int code;

    public ApiException(HttpStatus httpStatus, int code, String message) {
        super(message);
        this.httpStatus = httpStatus;
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    final public Object getErreur() {
        return new Object() {
            public Object getErreur() {
                return new Object() {
                    public int getCode() {
                        return ApiException.this.getCode();
                    }

                    public String getMessage() {
                        return ApiException.this.getMessage();
                    }
                };
            }
        };
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

}
