package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class CreneauNonUniqueApiException extends ApiException {

    public final static int CODE = 9;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;


    public CreneauNonUniqueApiException() {
        super(HTTP_STATUS, CODE, "On ne peux pas s'inscrire plusieurs fois au même créneau.");
    }

}
