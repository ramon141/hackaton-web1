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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import { useState } from "react";
import { toastPromisse } from "utils/toast";
import { UserAPI } from "api/User";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";

function Cover() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [universityName, setUniversityName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    toastPromisse(
      UserAPI.signup(name, email, password, universityName),
      {
        pending: 'Logando...',
        success: () => { },
        error: 'Erro ao cadastrar'
      }
    );


  }


  return (
    <CoverLayout
      title="Bem-vindo!"
      description="Comece sua jornada para o sucesso acadêmico e profissional — Cadastre-se e descubra um mundo de oportunidades!"
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card>
        <ArgonBox p={3} mb={1} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium">
            Cadastrar
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox pb={3} px={3}>
          <form onSubmit={handleSubmit}>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Universidade"
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
              />
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="dark" fullWidth type="submit">
                Cadastrar
              </ArgonButton>
            </ArgonBox>
          </form>
          <ArgonBox mt={2}>
            <ArgonTypography variant="button" color="text" fontWeight="regular">
              Já possui conta?&nbsp;
              <ArgonTypography
                component={Link}
                to="/authentication/sign-in"
                variant="button"
                color="dark"
                fontWeight="bold"
                textGradient
              >
                Entrar
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
