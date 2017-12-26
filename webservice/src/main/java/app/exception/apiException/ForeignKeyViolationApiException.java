package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class ForeignKeyViolationApiException extends ApiException {

    public final static int CODE = 2;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;

    public ForeignKeyViolationApiException(String fils) {
        super(HTTP_STATUS, CODE, String.format("La clé étrangère de '%s' est invalide.", fils));
    }
}
