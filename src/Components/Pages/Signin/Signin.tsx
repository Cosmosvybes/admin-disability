import { Button, Input, Spinner } from "reactstrap";
import motherhoodLogo from "../../../assets/mother.jpg";
import { Lock } from "react-huge-icons/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://disability-and-motherhood-server.onrender.com/api/sign-in?email=${email}&password=${password}`,
      { method: "POST" }
    )
      .then((result) => {
        if (!result.ok) {
          if (result.status === 404) {
            throw new Error("Account not found");
          } else if (result.status === 401) {
            throw new Error("Incorrect password");
          }
        }
        return result.json();
      })
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          navigate("/home");
        } else {
          return;
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.warn(err.message, { theme: "dark" });
      });
  };

  return (
    <>
      <div className="h-screen flex  flex-col max-sm:justify-start  max-sm:px-2 gap-5 max-sm:gap-1 justify-center py-20 max-sm:py-2 items-center">
        <div className="relative max-sm:px-2 max-sm:items-center flex max-sm:justify-start justify-start px-20  flex-col items-center gap-2">
          {" "}
          <div
            className="relative w-24 h-24 max-md:h-24  max-md:w-24 max-sm:w-24 max-sm:w-h-24 flex justify-center  items-center rounded-full"
            style={{
              backgroundImage: `url(${motherhoodLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="text-2xl max-sm:text-2xl  font-extrabold">
            Disability & Motherhood
          </h1>{" "}
        </div>
        <div className="relative py-2 flex max-sm:w-full  flex-col justify-center items-center w-1/3 h-full max-sm:h-auto  bg-gray-50 rounded-2xl shadow-md max-sm:shadow-none">
          <h1>Sign in to your account.</h1>
          <p>Enter your user-ID and passkey to proceed! </p>
          <form
            onSubmit={handleSubmit}
            className="w-full flex  flex-col gap-3  px-20 max-sm:px-2"
          >
            <label>
              <b>Admin ID </b>
            </label>
            <Input
              type="email"
              placeholder="user@email.com"
              className="py-3 w-full rounded-md "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>
              <b>Passkey</b>
            </label>
            <Input
              type="password"
              placeholder="passkey here"
              className="py-3 w-full rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              color="primary"
              className="py-2 w-full rounded-md text-center font-bold text-4xl"
            >
              Sign in{" "}
              {loading ? (
                <Spinner size={"sm"} type="border" />
              ) : (
                <Lock className="text-xl text-white inline" />
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
