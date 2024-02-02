import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CurrentUser {
  email: string;
  id: string;
  activated: boolean;
}

// Create the context
const CurrentUserContext = createContext<CurrentUser | undefined>(undefined);

// Custom hook to use the current user context
const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return context;
};

// Context provider component
const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  // State to hold the current user
  const [currentUser, setCurrentUser] = useState<CurrentUser | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchUser() {
      try {
        const userString = localStorage.getItem("user");
        if (userString) {
          const user = JSON.parse(userString) as CurrentUser;

          if (!user.activated) {
            const res = await fetch(
              `http://3.95.116.98/api/auth/users/${user.id}`,
              {
                method: "GET",
                mode: "no-cors",
              }
            );

            if (res.ok) {
              const updatedUser = await res.json();
              console.log(updatedUser);
              const { email, id, activated } = updatedUser;
              localStorage.setItem(
                "user",
                JSON.stringify({
                  id,
                  email,
                  activated,
                })
              );
              setCurrentUser({ email, id, activated });
            } else {
              // Handle error if the fetch fails
              console.error("Error fetching user data:", res.statusText);
            }
          } else {
            setCurrentUser(user);
            // Handle inactive user
            console.log("User is not activated");
          }
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }

    fetchUser();
  }, []); // Only run the effect once on component mount

  // Value object for the context provider
  const contextValue = {
    currentUser,
  };

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { useCurrentUser, CurrentUserProvider };
