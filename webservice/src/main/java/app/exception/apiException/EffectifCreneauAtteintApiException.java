package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class EffectifCreneauAtteintApiException extends ApiException {

    public final static int CODE = 6;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;


    public EffectifCreneauAtteintApiException(String msg) {
        super(HTTP_STATUS, CODE, msg);
    }

}
