import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../uitl/validators';

const NewPart = () => {

    const partSubmitHandler = event => {
        event.preventDefault();
        console.log(); // send this to backend!
    };

    return (
        <form className='' onSubmit={partSubmitHandler} >
            <button type='submit' >ADD PART</button>
        </form>
    );
};

export default NewPart;
