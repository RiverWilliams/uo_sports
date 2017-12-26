package app.exception.apiException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;

public class MethodArgumentNotValidApiException extends ApiException {
    public final static int CODE = 4;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;

    public MethodArgumentNotValidApiException(MethodArgumentNotValidException ex) {
        super(HTTP_STATUS, CODE, String.format("Le champ '%s' est invalide, il %s.", ex.getBindingResult().getFieldError().getField(), ex.getBindingResult().getFieldError().getDefaultMessage()));
    }
}
