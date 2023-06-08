import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import RegisterForm from "../../components/RegisterForm";

import { API } from "../../api/constants";

interface ISignForm {
     name: string,
     email: string,
     key: string,
     secret: string
}

const Register: React.FC = () => {
     const { handleSubmit, control } = useForm<ISignForm>();
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();

     const onSubmit = handleSubmit(data => {
          setLoading(true);
          fetch(`${API}/signup`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Key: data.key,
                    Sign: data.secret
               },
               body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then(() => {
               setLoading(false);
               navigate('/login');
          })
          .catch(e => {
               setLoading(false);
               console.error(e);
          })
     });

     return (
          <div>
               <div className="form_wrap">
                    { loading && <div style={{textAlign: "center", marginBottom: '10px'}}><CircularProgress /></div> }
                    <Typography variant="h4" gutterBottom={true} align="center">
                         Sign up
                    </Typography>

                    <RegisterForm control={control} onSubmit={onSubmit}/>
                    <Typography variant="h5" align="center" >
                    Already have an account? <Link to="/login">Sign in</Link>
                    </Typography>
               </div>
          </div>
     );
};

export default Register;