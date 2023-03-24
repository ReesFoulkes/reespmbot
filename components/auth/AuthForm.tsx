import { useState, FormEvent } from "react";
import { auth } from "@/types/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import styles from "./AuthForm.module.css"; // Import the CSS module


const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSignup, setIsSignup] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/"); // Redirect to the main page after successful login or signup
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>{isSignup ? "Signup" : "Login"}</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">{isSignup ? "Signup" : "Login"}</button>
        </form>
      </div>
      <button className={styles.toggleButton} onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Login here" : "Don't have an account? Signup"}
      </button>
    </div>
  );
};

export default AuthForm;