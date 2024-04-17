/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { toastPromisse } from "utils/toast";
import { UserAPI } from "api/User";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    toastPromisse(
      UserAPI.login(email, password),
      {
        pending: 'Logando...',
        success: () => {
          navigate('/dashboard')
        },
        error: 'Credenciais inválidas'
      }
    );


  }

  return (
    <IllustrationLayout
      title="Entrar"
      description="Informe suas credenciais"
      illustration={{
        image: bgImage,
        title: '',
        description:
          "Conecte-se, colabore e construa seu futuro — Invista em conexões hoje para colher oportunidades amanhã.",
      }}
    >
      <ArgonBox>
        <form onSubmit={handleSubmit}>
          <ArgonBox mb={2}>
            <ArgonInput type="email" placeholder="Email" size="large"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </ArgonBox>
          <ArgonBox mb={2}>
            <ArgonInput type="password" placeholder="Senha" size="large"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <ArgonTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Lembrar-me
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox mt={4} mb={1}>
            <ArgonButton color="info" size="large" fullWidth type="submit">
              Entrar
            </ArgonButton>
          </ArgonBox>
        </form>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Ainda não tem conta?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Cadastro
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout >
  );
}

export default Illustration;
