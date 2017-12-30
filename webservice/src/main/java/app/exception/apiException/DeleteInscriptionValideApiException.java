package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class DeleteInscriptionValideApiException extends ApiException {

    public final static int CODE = 7;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;


    public DeleteInscriptionValideApiException(String msg) {
        super(HTTP_STATUS, CODE, msg);
    }

}
