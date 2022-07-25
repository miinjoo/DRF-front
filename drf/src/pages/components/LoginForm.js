import React from 'react';
import {useForm} from 'react-hook-form';
import KakaoLog from './KakaoLog.png';
import GoogleLog from './googlelog.png'
import {  useNavigate } from 'react-router-dom';

const LoginForm= ()=>  {

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const goUpload =() => {
        navigate("/mypage"); 
    }
    return (
        <>
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
                <label htmlFor="email" ></label>
                <input 
                style={{marginTop :'15px',width :'370px',height :'40px',border :'none',fontSize:'18px',fontWeight:"700"}}
                    id="email"
                    type="email"
                    name="email"
                    placeholder ="ID"
                    {...register("email")}
                    />
                
                <br/>
                <label htmlFor="password"></label>
                <input 
                    style={{marginTop :'15px',width :'370px',height :'40px',border :'none',fontSize:'18px',fontWeight:"700"}}
                    id="password"
                    type="password"
                    name="password"
                    placeholder ="PASSWORD"
                    {...register("password")}
                    />
                
                <br/>
                <button onClick = {goUpload}
                    type='submit'
                    style={{marginTop :'15px',width :'370px',height :'40px',border :'none',fontSize:'18px',color:'#fff',backgroundColor:"#AB0000",fontWeight:"700"}}
                    >
                    LOGIN</button>
            </form>

            <img 
            style ={{marginTop:'18px'}}
            src={KakaoLog}></img>
            <img 
            style ={{marginTop:'18px', marginLeft:'30px',borderRadius:'10px',width:'37px'}}
            src={GoogleLog}></img>
        </>
    );
};

export default LoginForm;