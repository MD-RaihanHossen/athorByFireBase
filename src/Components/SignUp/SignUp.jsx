import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../__fireBase__";

const SignUp = () => {

    const handleForm = (e) => {
        e.prevenDefault()

        //get email
        const email = e.target.email.value;
        // get password 
        const password = e.target.password.value;

        if (password.length >= 6) {

            createUserWithEmailAndPassword(auth, email, password)
                .then(result => console.log(result))
                .catch(error => console.log(error))
        }
        else {
            alert('please input at list 6 ceracter password')
        }

    };


    return (
        <div className='text-black flex justify-center my-10 '>
            <div >

                <form onSubmit={handleForm} className='flex flex-col gap-2 justify-center'>
                    <legend className="fieldset-legend text-black md:text-3xl ">Registration Form</legend>
                    <input type="email" name="email" className="input text-white " placeholder="Write Email" />
                    <input type="password" name="password" className="input text-white" placeholder="Write Password" />
                    <button name="button" className="btn ">Registration</button>

                </form>
            </div>
        </div>
    );
};

export default SignUp;