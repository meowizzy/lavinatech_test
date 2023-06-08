import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, CircularProgress, FormHelperText  } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import MD5 from "crypto-js/md5";
import LoginForm from "../../components/LoginForm";
import { API } from "../../api/constants";
import { AuthSuccessAction, AuthErrorAction } from "../../store/actions/auth";


interface ISignForm {
     key: string,
     secret: string
}

const Login: React.FC = () => {
     const { handleSubmit, control } = useForm<ISignForm>();
     const [loading, setLoading] = useState<Boolean>(false);
     const [isAuth, setIsAuth] = useState<Boolean>(true);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const onSubmit = handleSubmit((data) => {
          const url = "/myself";
          const md5 = MD5(`GET${url}${data.secret}`);
          setLoading(true);
          fetch(`${API}${url}`, {
          method: "GET",
          headers: {
               Key: data.key,
               Sign: md5.toString()
          }
     })
          .then((response) => response.json())
          .then((result) => {
               if (result.isOk) {
                    dispatch(AuthSuccessAction(md5.toString()));
                    navigate('/');
               }
               else setIsAuth(false);
               setLoading(false);
          })
          .catch((e) => {
               setLoading(false);
               dispatch(AuthErrorAction("Failed to auth."));
               console.log(e);
          });
     });

     return (
          <div>
               <div className="form_wrap">
                    { loading && <div style={{textAlign: "center", marginBottom: '10px'}}><CircularProgress /></div> }
                    { !isAuth && <FormHelperText style={{textAlign: "center"}} error={true} children="Incorrect username or password"/> }
                    <Typography variant="h4" gutterBottom={true} align="center">
                         Sign in
                    </Typography>

                    <LoginForm control={control} onSubmit={onSubmit}/>
                    <Typography variant="h5" align="center" >
                    or <Link to="/register">Sign up</Link>
                    </Typography>
               </div>
          </div>
     );
};

export default Login;