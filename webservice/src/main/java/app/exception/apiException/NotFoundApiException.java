package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class NotFoundApiException extends ApiException {

    public final static int CODE = 3;
    public final static HttpStatus HTTP_STATUS = HttpStatus.NOT_FOUND;


    public NotFoundApiException(String msg) {
        super(HTTP_STATUS, CODE, msg);
    }

}
