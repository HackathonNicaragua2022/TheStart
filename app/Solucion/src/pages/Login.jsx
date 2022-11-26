import "./login.css"
import logo from "./../data/logo.png"

export const Login = () => {

    

  return (
    <div className=".bg-main-bg container-login w-full min-h-screen flex-2 ">

      <div className="text-area">
        <img src={logo} alt="logo" />
        <h2>Ewischers solution</h2>
        <p>
          Empresa comprometida al desarrollo de software personalizo, especializado en el potencial amiento de tu negocio
        </p>
      </div>

      <div className="form">
        <h3>Iniciar session</h3>

        <div className="input">
          <div className="inputBox">
            <input type="text" name="" placeholder="Email" />
          </div>
          <div className="inputBox">
            <input type="password" name="" placeholder="password" />
          </div>
          <div className="inputBox">
            <input type="submit" name="" value="Login" />
          </div>
        </div>
        <p className="login">
        </p>
      </div>
    </div>
  );
};
