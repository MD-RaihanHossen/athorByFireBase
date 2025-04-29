import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../__fireBase__";
import { useState } from "react";


const Login = () => {

    const [showError, setShowError] = useState('')


    const handleForm = (e) => {
        e.preventDefault()
        const email = (e.target.email.value)
        const password = (e.target.password.value)

        //clear setShowError
        setShowError('');

        if (password.length >= 6) {

            createUserWithEmailAndPassword(auth, email, password)
                .then(result => console.log(result))
                .catch(error => setShowError(error.message))

        }
        else {
            alert('please input at list 6 ceracter password')
        }


        e.target.email.value = '';
        e.target.password.value = '';


    };

    return (
        <div className='text-black flex justify-center my-10 '>
            <div>

                <form onSubmit={handleForm} className='flex flex-col gap-2 justify-center'>
                    <legend className="fieldset-legend text-black md:text-3xl ">Login Form</legend>
                    <input type="email" name="email" className="input text-white " placeholder="Write Email" />
                    <input type="password" name="password" className="input text-white" placeholder="Write Password" />
                    <button name="button" className="btn ">Registration</button>

                </form>
                <div>
                <h2 className="text-red-600">{showError}</h2>
                </div>
            </div>

        </div>
    );
};

export default Login;