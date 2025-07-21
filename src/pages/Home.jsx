import { useState, useContext } from "react";
import { Button } from "../components/ui/button";
import { Card, CardTitle } from "../components/ui/card";
import { ToggleTheme } from "../components/ui/ToggleTheme";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${theme}`}>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute top-4 right-4">
          <ToggleTheme />
        </div>
        <Card className="w-80 p-4">
          <CardTitle>Welcome to my react template app</CardTitle>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Card>
      </div>
    </section>
  );
}

export default Home 

