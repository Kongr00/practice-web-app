import {Link} from "react-router-dom";
import cls from './registrationPage.module.css'
import {useState} from "react";


interface UserInfoFields {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
    sex: boolean;
}

const RegistrationPage = () => {

    const [userInfo, setUserInfo] = useState<UserInfoFields>({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        sex: false,
    })

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(userInfo)

        //give a token or smth like that
    }

    const changeInputHandler = (event) => {
       setUserInfo({
           ...userInfo,
            [event.target.name]: event.target.value
       })
    }

    return (
        <div className={cls.container}>
            <div>
                <form action="" onSubmit={submitHandler} className={cls.registerForm}>
                    <input type="text" name={"username"} value={userInfo?.username} onChange={changeInputHandler}/>
                    <input type="email" name={"email"} value={userInfo?.email} onChange={changeInputHandler}/>
                    <div className={cls.passwordBlock}>
                        <input type="password" name={"password"} value={userInfo?.password} onChange={changeInputHandler}/>
                        <input type="password" name={"repeatPassword"} value={userInfo?.repeatPassword} onChange={changeInputHandler}/>
                    </div>
                    <select name="sex" id="sex" value={userInfo?.sex.toString()} onChange={changeInputHandler}>
                        <option value="true">Male</option>
                        <option value="false">Female</option>
                    </select>

                    <button type={'submit'}>SUBMIT</button>
                </form>
            </div>
            <Link to={'/login'}>LOG IN</Link>
        </div>
    );
};

export default RegistrationPage;