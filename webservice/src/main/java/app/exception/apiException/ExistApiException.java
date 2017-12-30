package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class ExistApiException extends ApiException {

    public final static int CODE = 8;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;


    public ExistApiException(String msg) {
        super(HTTP_STATUS, CODE, msg);
    }

}
