import { useState } from "react";
import { ToggleTheme } from "../components/ui/ToggleTheme";
import { Card, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute top-4 right-4">
          <ToggleTheme />
        </div>
        <Card className="w-80 p-4">
          <CardTitle className="text-center">
            Welcome to My React Template
          </CardTitle>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Home;
