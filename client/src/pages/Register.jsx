import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../utils/supabaseClient";
import { UserAuth } from "../context/AuthContext";
import { BrowserTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setSession } = UserAuth();
  const { theme } = BrowserTheme();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, setSession]);

  return (
    <div className="min-w-screen h-screen grid place-items-center dark:bg-blue-gray-900">
      <div className="w-full max-w-screen-sm px-8 sm:max-w-lg">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme={theme}
          providers={["google"]}
        />
      </div>
    </div>
  );
};

export default Register;
