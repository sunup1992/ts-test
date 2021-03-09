import {GET, Path, PathParam} from 'typescript-rest';

@Path('/test-api')
export class testController {
    @GET
    public getRandom() {
        return this.getRandomNumber()
    }

    getRandomNumber() {
        return 5
    }
}