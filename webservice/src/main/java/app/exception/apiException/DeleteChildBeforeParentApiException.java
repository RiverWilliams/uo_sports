package app.exception.apiException;

import org.springframework.http.HttpStatus;

public class DeleteChildBeforeParentApiException extends ApiException {

    public final static int CODE = 5;
    public final static HttpStatus HTTP_STATUS = HttpStatus.BAD_REQUEST;

    public DeleteChildBeforeParentApiException() {
        super(HTTP_STATUS, CODE, "Impossible de supprimer l'entité avant d'avoir supprimé celles qui y font référence.");
    }
}
