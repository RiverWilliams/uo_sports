package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class EmailDejaUtiliseApiException extends ApiException {

    public final static int CODE = 10;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;


    public EmailDejaUtiliseApiException(String msg) {
        super(HTTP_STATUS, CODE, msg);
    }

}
